const KEY = "poe-330-shaemora-v1";

const actsEl = document.querySelector("#acts");
const mainEl = document.querySelector("#main");
const railEl = document.querySelector("#rail");

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (!raw || typeof raw !== "object") return { done: {}, index: 0 };
    return {
      done: raw.done && typeof raw.done === "object" ? raw.done : {},
      index: Number.isInteger(raw.index) ? raw.index : 0
    };
  } catch (err) {
    return { done: {}, index: 0 };
  }
}

let state = load();
if (state.index < 0 || state.index >= STEPS.length) state.index = 0;

function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function actLabel(act) {
  if (act === 11) return "Maps";
  if (act === 12) return "Atlas";
  return "Act " + act;
}

function actsInOrder() {
  const seen = [];
  STEPS.forEach(function (step) {
    if (seen.indexOf(step.act) === -1) seen.push(step.act);
  });
  return seen;
}

function firstIndexOfAct(act) {
  return STEPS.findIndex(function (step) { return step.act === act; });
}

function renderActs() {
  const current = STEPS[state.index].act;
  const buttons = actsInOrder().map(function (act) {
    const total = STEPS.filter(function (step) { return step.act === act; }).length;
    const done = STEPS.filter(function (step) {
      return step.act === act && state.done[step.id];
    }).length;
    return (
      '<button class="act-btn" type="button" data-act="' + act + '"' +
      (act === current ? ' aria-current="true"' : "") + ">" +
      "<span>" + esc(actLabel(act)) + "</span>" +
      '<span class="count">' + done + "/" + total + "</span></button>"
    );
  }).join("");
  actsEl.innerHTML =
    "<h1>Raging Spirit</h1>" +
    "<p>Witch into Necromancer. Summon Raging Spirit from the Mud Flats through maps.</p>" +
    buttons;
}

function renderMain() {
  const step = STEPS[state.index];
  const inAct = STEPS.filter(function (item) { return item.act === step.act; });
  const place = inAct.findIndex(function (item) { return item.id === step.id; }) + 1;
  const walk = step.walk.map(function (zone) {
    return "<li>" + esc(zone) + "</li>";
  }).join("");
  const steps = step.steps.map(function (line) {
    return "<li>" + esc(line) + "</li>";
  }).join("");
  const gems = step.gems.length
    ? "<ul class=\"gems\">" + step.gems.map(function (gem) {
      return "<li><span class=\"gem " + esc(gem.color) + "\">" + esc(gem.color) +
        "</span> <strong>" + esc(gem.name) + "</strong> " + esc(gem.note) + "</li>";
    }).join("") + "</ul>"
    : "";
  mainEl.innerHTML =
    '<p class="banner">Passive names are from the 3.29 tree. This Path of Building has no 3.30 character tree yet. Atlas steps follow the 3.30 rules and do not invent wheel names. The Allflame profile this follows used a Breachlord bloodline. That bloodline is not a step in this guide.</p>' +
    '<p class="where">' + esc(actLabel(step.act)) + ", step " + place + " of " + inAct.length + "</p>" +
    "<h2 tabindex=\"-1\">" + esc(step.title) + "</h2>" +
    '<ol class="walk">' + walk + "</ol>" +
    "<ol class=\"steps\">" + steps + "</ol>" +
    gems +
    '<label class="done-row"><input id="done" type="checkbox"' +
    (state.done[step.id] ? " checked" : "") + "> This step is done</label>" +
    '<div class="nav-row">' +
    '<button type="button" id="prev"' + (state.index === 0 ? " disabled" : "") + ">Previous step</button>" +
    '<button type="button" id="next"' + (state.index === STEPS.length - 1 ? " disabled" : "") + ">Next step</button>" +
    "</div>" +
    '<p class="keys">Press n for the next step, p for the previous step, and d to mark the step done. <button type="button" class="text-btn" id="reset">Start over</button></p>';
}

function renderRail() {
  const step = STEPS[state.index];
  const equip = step.equip.map(function (line) {
    return "<li>" + esc(line) + "</li>";
  }).join("");
  const gate = step.resist
    ? '<div class="gate" id="resist-gate"><strong>' + esc(step.resist.title) +
      "</strong>" + esc(step.resist.body) + "</div>"
    : "";
  const passives = PASSIVES.map(function (row) {
    return "<li><span class=\"when\">" + esc(row.at) + "</span> " +
      esc(row.name) + ". " + esc(row.note) + "</li>";
  }).join("");
  railEl.innerHTML =
    "<h3>Equip now</h3>" +
    '<p class="button-now">Main button: ' + esc(step.button) + "</p>" +
    gate +
    '<ul class="equip">' + equip + "</ul>" +
    (step.passive ? "<p>" + esc(step.passive) + "</p>" : "") +
    "<h3>Passive order</h3>" +
    '<ul class="passives">' + passives + "</ul>";
}

function render() {
  renderActs();
  renderMain();
  renderRail();
  const heading = mainEl.querySelector("h2");
  if (heading) heading.focus();
}

function go(next) {
  state.index = Math.max(0, Math.min(STEPS.length - 1, next));
  save();
  render();
}

document.body.addEventListener("click", function (event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target.id === "next") go(state.index + 1);
  if (target.id === "prev") go(state.index - 1);
  if (target.id === "reset") {
    if (!confirm("Clear every checkmark and go back to Hillock?")) return;
    state = { done: {}, index: 0 };
    save();
    render();
  }
  const actBtn = target.closest(".act-btn");
  if (actBtn) go(firstIndexOfAct(Number(actBtn.dataset.act)));
});

document.body.addEventListener("change", function (event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || target.id !== "done") return;
  const step = STEPS[state.index];
  if (target.checked) state.done[step.id] = true;
  else delete state.done[step.id];
  save();
  renderActs();
});

document.addEventListener("keydown", function (event) {
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;
  if (event.key === "n") go(state.index + 1);
  if (event.key === "p") go(state.index - 1);
  if (event.key === "d") {
    const step = STEPS[state.index];
    if (state.done[step.id]) delete state.done[step.id];
    else state.done[step.id] = true;
    save();
    render();
  }
});

render();
