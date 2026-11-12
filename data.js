/* Campaign and atlas steps for Shaemora: Witch, Necromancer, Summon Raging Spirit.
   Passive names and point counts are from the 3.29 tree. */
const PASSIVES = [
  { at: "Act 1", name: "Lord of the Dead", note: "7 points from the Witch start. Arcanist's Dominion is on the way." },
  { at: "Act 2", name: "Enduring Bond", note: "11 points. Minion duration, and minion damage after you cast a minion skill." },
  { at: "Act 2", name: "Sacrifice", note: "17 points. Minion life, and life regeneration for you and the minions." },
  { at: "Act 3", name: "Spiritual Command", note: "19 points. Minion attack and cast speed. That speed also applies to you." },
  { at: "Act 3", name: "Discipline and Training", note: "22 points. Flat life." },
  { at: "Lab 1", name: "Mindless Aggression", note: "Normal labyrinth. Minions have more life and more damage." },
  { at: "Act 4", name: "Heart and Soul, then Mystic Bulwark", note: "27 points. Life and mana, then a chance to block spells." },
  { at: "Lab 2", name: "Unnatural Strength", note: "Cruel labyrinth, level 40 or higher. Minions gain Unholy Might. The spirit already converts physical damage to fire, so the physical portion is then split with chaos." },
  { at: "Acts 8–10", name: "Redemption, Sanctuary, Influence, Sovereignty", note: "57 points once Sovereignty is in. This is the reservation path for Malevolence." },
  { at: "Lab 3", name: "Bone Barrier", note: "Merciless labyrinth, level 50 or higher. Damage reduction from your minions, and life leech from their damage." },
  { at: "With the shield", name: "Gravepact, then three keystones", note: "Gravepact can come first, at 63 points. Glancing Blows, Eldritch Battery, and Mind Over Matter wait until Aegis Aurora is equipped. That package is 67 points." },
  { at: "Later", name: "Commander of Darkness", note: "Fourth labyrinth, once maps are already safe." }
];

const STEPS = [
  {
    id: "a1-hillock",
    act: 1,
    title: "Kill Hillock, take Rolling Magma",
    walk: ["The Twilight Strand", "Lioneye's Watch"],
    button: "Rolling Magma",
    steps: [
      "Kill Hillock on the Twilight Strand and enter Lioneye's Watch.",
      "Take Rolling Magma from the Enemy at the Gate reward. It is the blue gem. Socket it in anything with a blue socket.",
      "This is the button until the Mud Flats. Summon Raging Spirit replaces it there, at character level 4."
    ],
    gems: [
      { name: "Rolling Magma", color: "blue", note: "Quest reward. The button for the first few zones only." }
    ],
    equip: [
      "Weapon: a white wand, or any wand with spell damage or minion damage.",
      "A life flask stays on the bar for the whole campaign.",
      "Life on any armour you put on. Resistances can wait one zone."
    ],
    resist: null,
    passive: "Spend points toward Lord of the Dead. Arcanist's Dominion is on that path. Take it. Leave Elemental Overload alone."
  },
  {
    id: "a1-hailrake",
    act: 1,
    title: "Hailrake, then the quicksilver flask",
    walk: ["The Coast", "The Tidal Island", "Lioneye's Watch"],
    button: "Rolling Magma",
    steps: [
      "Clear the Coast. Skip the Fetid Pool.",
      "On the Tidal Island, kill Hailrake and pick up the medicine chest.",
      "Back in town, take the Quicksilver Flask. Leave Chance to Poison. Summon Phantasm is not the plan."
    ],
    gems: [],
    equip: [
      "Quicksilver Flask: use it whenever you are running. This is the flask from the quest, not a gem.",
      "Boots: if Tarkleigh sells boots with movement speed, buy them.",
      "Still a life flask, and Rolling Magma in a blue socket."
    ],
    resist: null,
    passive: "Keep spending points. Do not save them."
  },
  {
    id: "a1-srs",
    act: 1,
    title: "Mud Flats, then Summon Raging Spirit",
    walk: ["The Mud Flats", "Lioneye's Watch", "The Submerged Passage", "The Flooded Depths"],
    button: "Summon Raging Spirit",
    steps: [
      "In the Mud Flats, break the three rhoa nests. Go straight back to town.",
      "Take Summon Raging Spirit. It is blue, and it needs character level 4. Take Frostblink as well if a second gem is offered. If the quest allows one gem, take Summon Raging Spirit and buy Frostblink.",
      "Summon Raging Spirit is a direct cast. The base duration is 5 seconds and the base cap is 20. Enduring Bond is what makes them last longer. Recast to keep them up. Frostblink is how you move. Each spirit converts its physical damage to fire.",
      "Buy Convocation from Nessa if she lists it. It pulls the spirits to you. It does not need a link.",
      "Submerged Passage, then the Flooded Depths. Kill the Dweller and take the Book of Skill before you move on."
    ],
    gems: [
      { name: "Summon Raging Spirit", color: "blue", note: "Breaking Some Eggs. The button from here through maps." },
      { name: "Frostblink", color: "blue", note: "Take it if offered, otherwise buy it. Movement." },
      { name: "Convocation", color: "blue", note: "Buy from Nessa when she has it. Unlinked." }
    ],
    equip: [
      "Summon Raging Spirit wants a blue socket. Rolling Magma can come out of that socket.",
      "Frostblink in any other blue socket.",
      "Check Tarkleigh again for movement-speed boots."
    ],
    resist: null,
    passive: "Lord of the Dead is the first notable. It is 7 points, counting the travel nodes."
  },
  {
    id: "a1-brutus",
    act: 1,
    title: "Prison trial, Brutus, then the links",
    walk: ["The Ledge", "The Climb", "The Lower Prison", "The Upper Prison", "Lioneye's Watch"],
    button: "Summon Raging Spirit",
    steps: [
      "Ledge, Climb, Lower Prison. Do the spike trial. It is the first labyrinth trial.",
      "Upper Prison. Kill Brutus.",
      "Take Minion Damage. It is blue, and it needs character level 8. If a second gem is offered, take Unbound Ailments. If it is not, buy Unbound Ailments in town.",
      "Take the Simple Robe only when its sockets or links are better than what you are wearing. A three-link or four-link of the wrong base is the right chest.",
      "Link Summon Raging Spirit, Minion Damage, and Unbound Ailments in blue sockets as soon as the links exist. Unbound Ailments waits for poison. Socket it now so the link stays blue."
    ],
    gems: [
      { name: "Minion Damage", color: "blue", note: "The Caged Brute. First support." },
      { name: "Unbound Ailments", color: "blue", note: "Same reward if a second gem is offered, otherwise buy it. Poison duration, later." }
    ],
    equip: [
      "Body: best links you have. Three blue sockets for Summon Raging Spirit, Minion Damage, Unbound Ailments.",
      "Do not use jeweller's orbs or fusings to force links. Wait for a drop or a vendor link.",
      "The spirits are the damage. Recast the skill. Convocation if they are stuck on the last pack."
    ],
    resist: null,
    passive: "By the end of this act, Lord of the Dead should be allocated or one point away."
  },
  {
    id: "a1-merveil",
    act: 1,
    title: "Fairgraves, then cold resistance before Merveil",
    walk: ["Prisoner's Gate", "The Ship Graveyard", "The Ship Graveyard Cave", "The Cavern of Wrath", "The Cavern of Anger"],
    button: "Summon Raging Spirit",
    steps: [
      "Prisoner's Gate, then the Ship Graveyard. Do the cave and kill Fairgraves. Take the Book of Skill from Bestel.",
      "Before you enter the Cavern of Anger, put cold resistance on your gear and put a freeze removal flask on the bar.",
      "Kill Merveil. The exit is the Southern Forest, which is Act 2."
    ],
    gems: [],
    equip: [
      "Flask of Heat on a life flask. It removes freeze. Buy or alter until you have one.",
      "Sapphire ring: vendor an iron ring plus a spare blue gem. The gem is destroyed. Never sell Summon Raging Spirit for this.",
      "Cold resistance on the ring, the amulet, or the boots. Some is enough. Zero is how you die here."
    ],
    resist: {
      title: "Before Merveil",
      body: "Cold resistance on gear, and a life flask of Heat so freeze falls off. Do not walk in at 0% cold resistance."
    },
    passive: "If you just leveled, spend the point before the fight."
  },
  {
    id: "a2-crossroads",
    act: 2,
    title: "The beast, then the Crossroads",
    walk: ["The Southern Forest", "The Forest Encampment", "The Old Fields", "The Den", "The Crossroads"],
    button: "Summon Raging Spirit",
    steps: [
      "Southern Forest to the Forest Encampment. Sell junk.",
      "Old Fields, then the Den. Kill the Great White Beast. Take the Book of Skill on your next town visit.",
      "Go to the Crossroads and take the waypoint."
    ],
    gems: [],
    equip: [
      "Boots with movement speed, every town, before any other boot stat.",
      "Life on helm, body, gloves, and boots. Then the resistance the next boss uses.",
      "Weapon, in this order: +1 to level of minion skill gems, then +1 to level of spell skill gems, then minion damage. A Convoking Wand is the right base when one drops."
    ],
    resist: null,
    passive: "Next notable is Enduring Bond. It is 4 points past Lord of the Dead, 11 from the start."
  },
  {
    id: "a2-crypt",
    act: 2,
    title: "Crypt, Chamber of Sins, the extra point",
    walk: ["The Fellshrine Ruins", "The Crypt", "The Chamber of Sins", "The Forest Encampment"],
    button: "Summon Raging Spirit",
    steps: [
      "From the Crossroads, Fellshrine Ruins, then the Crypt. Level 1 has the spinning-blade trial. Level 2 has the Golden Hand. Clear both.",
      "Give the Golden Hand to Yeena. That book is a passive point. Since 3.25 this quest holds the point that used to be the second bandit point.",
      "Chamber of Sins Level 1, then Level 2. Do the sawblade trial, and kill Fidelitas for Intruders in Black.",
      "This character does not use a herald. If the quest makes you take a gem, take it and sell it. The book is the reason you are here."
    ],
    gems: [],
    equip: [
      "Turn in the Great White Beast book if it is still in your inventory.",
      "Four blue sockets is the campaign link: Summon Raging Spirit, Minion Damage, Unbound Ailments, and Minion Speed once you have it.",
      "A dropped three-link or four-link replaces a better-looking armour with fewer links."
    ],
    resist: null,
    passive: "Enduring Bond, then start toward Sacrifice."
  },
  {
    id: "a2-alira",
    act: 2,
    title: "Help Alira",
    walk: ["The Broken Bridge", "The Riverways", "The Western Forest", "The Wetlands"],
    button: "Summon Raging Spirit",
    steps: [
      "Broken Bridge: kill Kraityn and take his amulet.",
      "Riverways, then the Western Forest. Kill Captain Arteri, put the emblem in the wall, and later take The Way Forward book from Bestel in Lioneye's Watch.",
      "Alira is in the Western Forest. Help her. Kill Kraityn and Oak, then accept Alira's reward.",
      "Back at the Riverways, take the side path to the Wetlands and kill Oak. Take his amulet.",
      "Alira gives 15% to all elemental resistances. Killing all three and talking to Eramir is one passive point. Take her reward unless fire, cold, and lightning are already capped."
    ],
    gems: [],
    equip: [
      "You still receive the Apex either way, so the pyramid door will open.",
      "15% all resistances is the gear piece you do not have to find.",
      "If you are already capped, kill Alira too and take Eramir's one point instead."
    ],
    resist: null,
    passive: "Sacrifice is the notable after Enduring Bond. 17 points from the start."
  },
  {
    id: "a2-vaal",
    act: 2,
    title: "Lightning resistance, the Weaver, Vaal Oversoul",
    walk: ["The Weaver's Chambers", "The Forest Encampment", "The Vaal Ruins", "The Northern Forest", "The Caverns", "The Ancient Pyramid"],
    button: "Summon Raging Spirit",
    steps: [
      "Before the Weaver, put lightning resistance on a ring or the amulet.",
      "Kill the Weaver. On Sharp and Cruel, take Minion Speed. Leave Elemental Focus and Controlled Destruction.",
      "Minion Speed is blue and needs character level 18. Carry it until the gem text is white, then put it in the fourth blue socket.",
      "Buy Desecrate if a vendor sells it and you are level 16. It is green. Flesh Offering is blue and needs level 12. Buy that too. Desecrate makes a corpse. Flesh Offering consumes one and buffs the spirits.",
      "Vaal Ruins, Northern Forest, the Caverns, the Ancient Pyramid. Use the Apex. Kill the Vaal Oversoul. Same lightning resistance rule."
    ],
    gems: [
      { name: "Minion Speed", color: "blue", note: "Sharp and Cruel. Fourth blue socket, once you are level 18." },
      { name: "Desecrate", color: "green", note: "Buy it. Any green socket. Corpses for Flesh Offering." },
      { name: "Flesh Offering", color: "blue", note: "Buy it. Cast it on a corpse before a boss." }
    ],
    equip: [
      "Topaz ring: iron ring plus a spare green gem. Never sell a skill gem to make it.",
      "Campaign four-link, all blue: Summon Raging Spirit, Minion Damage, Unbound Ailments, Minion Speed.",
      "On a boss: Desecrate if the ground is empty, Flesh Offering, then Summon Raging Spirit."
    ],
    resist: {
      title: "Before the Weaver and Vaal Oversoul",
      body: "Lightning resistance. A topaz ring is enough to stop the one-shot. Shock still hurts. A flask of Grounding removes shock if you have one."
    },
    passive: "Spiritual Command is 2 points past Sacrifice. Take it when the points arrive. Minion speed also speeds you up."
  },
  {
    id: "a3-crematorium",
    act: 3,
    title: "Crematorium trial, then Despair",
    walk: ["The City of Sarn", "The Sarn Encampment", "The Slums", "The Crematorium"],
    button: "Summon Raging Spirit",
    steps: [
      "City of Sarn, then the encampment. Sell and check boots and the wand.",
      "The Slums. Find the Crematorium. Do the furnace trial. Kill Piety's force and take Tolman's Bracelet. Remember the sewer grating if you pass it.",
      "Town. Give the bracelet to Clarissa. On Lost in Love, take Despair. It is blue and needs character level 24. Malevolence is on the same reward. If you can take only one gem, take Despair and buy Malevolence from Lilly in Act 6.",
      "Despair is a curse. Cast it on rares and on bosses. It does not need a link. Leave Malevolence off until you can reserve it and still cast.",
      "Piety in the Crematorium deals lightning. Keep the topaz ring on."
    ],
    gems: [
      { name: "Despair", color: "blue", note: "Lost in Love. Curse. Unlinked. Socket it at level 24." },
      { name: "Malevolence", color: "blue", note: "Take it if a second gem is offered. Otherwise Lilly, Act 6. Off until reservation allows it." }
    ],
    equip: [
      "Despair in any blue socket that is not part of the four-link.",
      "Two-stone rings start appearing around now. Wear one when it beats your sapphire or topaz.",
      "Life, then the resistance you are lowest on."
    ],
    resist: {
      title: "Crematorium",
      body: "Lightning resistance still matters for Piety. Do not vendor the topaz ring until something better is on the character."
    },
    passive: "Discipline and Training is the life notable. 22 points from the start."
  },
  {
    id: "a3-sewers",
    act: 3,
    title: "Three busts, then the Catacombs trial",
    walk: ["The Sewers", "The Marketplace", "The Catacombs"],
    button: "Summon Raging Spirit",
    steps: [
      "Open the sewers with Clarissa's keys. There are three platinum busts. One is before the waypoint and two are after it.",
      "Give the busts to Hargan for a Book of Skill.",
      "Leave the sewers into the Marketplace. Take the waypoint. The Catacombs entrance is beside it.",
      "Do the blade-sentry trial in the Catacombs, then waypoint out. Do not full-clear it."
    ],
    gems: [],
    equip: [
      "If a four-link drops, put the four blue gems in it even if the base is wrong.",
      "Still do not spend fusings.",
      "A ruby flask or fire resistance on gear is the next gap, for the fire bosses ahead."
    ],
    resist: null,
    passive: "Finish Discipline and Training, then the path back toward Heart and Soul."
  },
  {
    id: "a3-library",
    act: 3,
    title: "Solaris Temple, then Siosa",
    walk: ["The Battlefront", "The Solaris Temple", "The Imperial Gardens", "The Library"],
    button: "Summon Raging Spirit",
    steps: [
      "Battlefront. Pick up the Ribbon Spool and do the Solaris Temple. Take the waypoint. Skip a full clear of the Docks unless a quest item you are holding still asks for it.",
      "The Library is in the Imperial Gardens. Do A Fixture of Fate and turn the pages in.",
      "After the quest, Siosa sells supports. Buy Minion Damage, Unbound Ailments, or Minion Speed if one of those is still missing.",
      "This detour is the book. Do not do it twice."
    ],
    gems: [],
    equip: [
      "The four-link stays all blue. Do not break it to fit a red or green support.",
      "Void Manipulation is green and Melee Splash is red. Both wait for a socket that is not one of those four.",
      "Movement speed boots, again."
    ],
    resist: null,
    passive: "Heart and Soul is life and mana, close to the Witch start. Take it when the branch is open."
  },
  {
    id: "a3-lab",
    act: 3,
    title: "Gardens trial, normal lab, Dominus",
    walk: ["The Ebony Barracks", "The Imperial Gardens", "The Lunaris Temple", "The Aspirants' Plaza", "The Sceptre of God"],
    button: "Summon Raging Spirit",
    steps: [
      "Ebony Barracks. Imperial Gardens: the dart trial is the sixth and last normal trial. Lunaris Temple Level 1 and Level 2. Kill Piety, take the Tower Key.",
      "Take the Book of Skill from Grigor. On Sever the Right Hand, take Raise Spectre. Do not raise a corpse. The profile this guide follows does not name one, and a campaign corpse is the wrong one to keep.",
      "Normal labyrinth, from the Aspirants' Plaza in town. You need all six trials. At the altar, take Mindless Aggression. The font is not part of this guide.",
      "Sceptre of God, then the Upper Sceptre. Kill Dominus. Fire resistance before he splits into fire.",
      "Boss cast, from here on: Despair, Desecrate, Flesh Offering, Summon Raging Spirit. Recast the spirits as they expire."
    ],
    gems: [
      { name: "Raise Spectre", color: "blue", note: "Sever the Right Hand. Carry it. Do not use it yet." }
    ],
    equip: [
      "Lab: a quicksilver, a life flask, and the freeze and bleed flasks if you have them. Bleed is a flask of Staunching.",
      "After the lab you are a Necromancer. The notable is Mindless Aggression.",
      "Four-link by the end of Act 4 if one has dropped. Do not stop the act to craft one."
    ],
    resist: {
      title: "Dominus",
      body: "Fire resistance for the second phase. A ruby flask, or a life flask of Dousing, if the gear is still short."
    },
    passive: "Mindless Aggression. On the tree, Heart and Soul if the points are there."
  },
  {
    id: "a4-golem",
    act: 4,
    title: "Dried Lake and the Stone Golem",
    walk: ["Highgate", "The Dried Lake"],
    button: "Summon Raging Spirit",
    steps: [
      "Highgate. Check the vendors, then the Dried Lake.",
      "Kill Voll. Use Deshret's Banner in Highgate to break the seal.",
      "Take Summon Stone Golem. It is red and needs character level 34. Carry it until the gem text is white, then socket it.",
      "In 3.30 the Stone Golem grants 16% increased defences. It is still the golem. This character uses one golem, not three."
    ],
    gems: [
      { name: "Summon Stone Golem", color: "red", note: "Breaking the Seal. Any red socket. Unlinked is fine." }
    ],
    equip: [
      "The golem in a red socket that is not your four-link.",
      "If mana is tight, leave Malevolence off. Do not drop the golem or the spirits.",
      "Keep the quicksilver rolled with extra movement speed during effect when you next see a cheap alteration."
    ],
    resist: null,
    passive: "Heart and Soul, then Mystic Bulwark. Mystic Bulwark is spell block. The whole path through Mystic Bulwark is 27 points."
  },
  {
    id: "a4-mines",
    act: 4,
    title: "Mines, Kaom, Daresso",
    walk: ["The Mines", "The Crystal Veins", "Kaom's Dream", "Daresso's Dream"],
    button: "Summon Raging Spirit",
    steps: [
      "Mines Level 1 and Level 2. Free Deshret's spirit. That is a Book of Skill. Take it.",
      "Crystal Veins, then Kaom's Dream and Daresso's Dream. Kill both.",
      "Kaom is fire. Have fire resistance on before you open his door.",
      "If an NPC offers a Book of Skill in town, take it before you leave."
    ],
    gems: [],
    equip: [
      "Ruby ring if fire resistance is your lowest: iron ring plus a spare red gem.",
      "Life on every empty armour slot before a damage roll.",
      "Movement speed on boots still beats a small life roll with no speed."
    ],
    resist: {
      title: "Before Kaom",
      body: "Fire resistance. The fight is a small room. Stand where the magma is not, and keep the life flask instant if you have a Seething or Bubbling flask."
    },
    passive: "Spend every point on the path through Mystic Bulwark. Do not take Glancing Blows, Eldritch Battery, or Mind Over Matter."
  },
  {
    id: "a4-malachai",
    act: 4,
    title: "Malachai, then Unleash",
    walk: ["The Belly of the Beast", "The Harvest", "The Core"],
    button: "Summon Raging Spirit",
    steps: [
      "Belly of the Beast, the Harvest, the Core. Kill Malachai.",
      "Fire resistance before the Core.",
      "On The Eternal Nightmare, take Unleash. It is blue and needs character level 38. Leave Spell Echo.",
      "At level 38, Unleash replaces Minion Speed in the four-link. The four blue gems are then Summon Raging Spirit, Minion Damage, Unbound Ailments, and Unleash. Put Minion Speed in another blue socket if you have one.",
      "Take the Book of Skill from this quest as well."
    ],
    gems: [
      { name: "Unleash", color: "blue", note: "The Eternal Nightmare. Socket at level 38, in place of Minion Speed." }
    ],
    equip: [
      "Until you are 38, the four-link does not change. Carry Unleash in the inventory.",
      "A five-link, if one has dropped, gets Minion Speed back in the fifth socket when that socket is blue.",
      "Do not hunt a six-link in the campaign."
    ],
    resist: {
      title: "Before Malachai",
      body: "Fire resistance, a life flask you trust, and the quicksilver to reposition. If you die, fix the flask before you try again."
    },
    passive: "Mystic Bulwark should be allocated. Extra points are life nodes that touch the path. The reservation path starts later."
  },
  {
    id: "a5-innocence",
    act: 5,
    title: "Ascent to Innocence",
    walk: ["The Ascent", "The Slave Pens", "The Control Blocks", "Oriath Square", "The Templar Courts", "The Chamber of Innocence"],
    button: "Summon Raging Spirit",
    steps: [
      "The Ascent, the Slave Pens, the Control Blocks. In Service to Science is a Book of Skill in the Control Blocks. Take it.",
      "Oriath Square. Vendor, then the Templar Courts and the Chamber of Innocence.",
      "Kill Innocence. Despair, offering, spirits, and move when the ground changes.",
      "If an NPC offers a Book of Skill, take it before you leave town."
    ],
    gems: [],
    equip: [
      "Instant life flask by now if you can roll one. Seething is instant and uses the whole flask.",
      "Cap the resistance you are lowest on before you cap a resistance you already have.",
      "Links stay as they are. Do not recolor in town unless a gem is sitting in the wrong socket."
    ],
    resist: null,
    passive: "Extra points go into life nodes touching the path you already took."
  },
  {
    id: "a5-kitava",
    act: 5,
    title: "The Reliquary, then the first Kitava",
    walk: ["The Torched Courts", "The Ruined Square", "The Reliquary", "The Cathedral", "The Cathedral Rooftop"],
    button: "Summon Raging Spirit",
    steps: [
      "Torched Courts, Ruined Square. Do the Reliquary before the rooftop. Kitava's Torments is a Book of Skill. Take it.",
      "The Cathedral, then the rooftop.",
      "After this fight you lose 30% to fire, cold, and lightning resistance. The penalty is permanent.",
      "Kill Kitava. Do not open Act 6 and keep running on negative resistances."
    ],
    gems: [],
    equip: [
      "Put your best fire resistance on before the fight. A ruby flask is the emergency button.",
      "Flask of Dousing removes ignite. Have one.",
      "After the fight, look at the character sheet before you buy anything else."
    ],
    resist: {
      title: "Before Kitava, Act 5",
      body: "You are about to lose 30% to all elemental resistances. Stack fire resistance for the fight. The moment he dies, open the character sheet with C and raise whatever went negative."
    },
    passive: "No new keystone. Life, then the resistance you just lost."
  },
  {
    id: "a5-sheet",
    act: 5,
    title: "Fix the sheet before Act 6",
    walk: ["Oriath Square"],
    button: "Summon Raging Spirit",
    steps: [
      "Press C. Read fire, cold, and lightning.",
      "Vendor or equip until none of the three is negative. You do not need 75 yet. You need to not be in the minus.",
      "Craft a resistance onto an open suffix if the bench in town can do it and you have a transmutation orb.",
      "Then leave for Act 6."
    ],
    gems: [],
    equip: [
      "Rings and the amulet are the resistance slots. Armour is life first.",
      "A wand with +1 to minion skill gems is worth buying when it costs about a chaos. Leave The Covenant, Aegis Aurora, Aul's Uprising, and Darkness Enthroned for maps.",
      "Two-stone rings beat a single-resistance ring when two of your resists are low."
    ],
    resist: {
      title: "After the first Kitava",
      body: "Negative resistance is the thing that makes Act 6 feel unfair. Fix it in this town. 75% can wait until the gear exists."
    },
    passive: "No new notable until the sheet is fixed."
  },
  {
    id: "a6-fortress",
    act: 6,
    title: "Lilly, the fortress, the prison trial",
    walk: ["The Twilight Strand", "Lioneye's Watch", "The Coast", "The Mud Flats", "The Karui Fortress", "The Ridge", "The Lower Prison", "Shavronne's Tower"],
    button: "Summon Raging Spirit",
    steps: [
      "Clear the Twilight Strand so Lilly Roth will sell gems. Buy whatever is missing from this list: Malevolence, Desecrate, Flesh Offering, Convocation. At level 31 she can also sell Feeding Frenzy and Generosity. Buy those when you are 31 and a socket is free.",
      "Feeding Frenzy is blue. Put it with the Stone Golem when a link exists. Generosity is red. It will support Malevolence later. Leave both in the stash until the socket is there.",
      "Skip the Tidal Island unless your amulet and belt are still bad.",
      "Coast, Mud Flats, Karui Fortress. Kill Tukohama. Take the Book of Skill.",
      "The Ridge. In the Lower Prison, do the spike trial. This is the first cruel-lab trial. Then Shavronne's Tower and kill Shavronne.",
      "From Act 6 on, magic and rare items can roll an Item Tier. A higher tier means better modifiers, and a better chance of quality, sockets, and links. Pick those up."
    ],
    gems: [
      { name: "Malevolence", color: "blue", note: "Lilly, if Act 3 did not give it. Off until you can still cast." },
      { name: "Feeding Frenzy", color: "blue", note: "Level 31. With the Stone Golem when a link exists." },
      { name: "Generosity", color: "red", note: "Level 31. For Malevolence later. Stash it until then." }
    ],
    equip: [
      "Identify rare armour. Wear it when it has life and a resistance you need, or when it has more links.",
      "A five-link or six-link of a bad base beats a four-link of a good base.",
      "Movement speed boots, again. Check every town."
    ],
    resist: null,
    passive: "Still the same tree. Extra points are life."
  },
  {
    id: "a6-books",
    act: 6,
    title: "Abberath and Ryslatha",
    walk: ["Prisoner's Gate", "The Western Forest", "The Riverways", "The Wetlands"],
    button: "Summon Raging Spirit",
    steps: [
      "Prisoner's Gate. Kill Abberath for The Cloven One and take the book in town.",
      "Press Y and set Abberath as the minor god. The base soul is 60% less ignite duration on you. The second soul is a map boss. The first soul is enough for now.",
      "Follow the road to the Western Forest, then the Riverways. Take the waypoint.",
      "From the Riverways, the Wetlands. Kill Ryslatha, the Puppet Mistress. Take the book. She is in the Wetlands, not the Riverways.",
      "These two books are easy to skip because the zones are wide. Do not skip them."
    ],
    gems: [],
    equip: [
      "Cold resistance wants to be healthy again before the Brine King.",
      "Flask of Heat still removes freeze. Refill it.",
      "If a rare wand has +1 to minion skill gems, equip it."
    ],
    resist: null,
    passive: "No detour."
  },
  {
    id: "a6-brine",
    act: 6,
    title: "The flag, the Brine King, the pantheon",
    walk: ["The Southern Forest", "The Cavern of Anger", "The Beacon", "The Brine King's Reef"],
    button: "Summon Raging Spirit",
    steps: [
      "From the Riverways, the Southern Forest, then the Cavern of Anger. Pick up the black flag.",
      "The Beacon. Raise the flag. The Brine King's Reef.",
      "Kill the Brine King. He freezes. Cold resistance and the Heat flask are the fight.",
      "In town, press Y and choose the Brine King as the major god. He stops a chain of stuns. This stays on for the rest of the push to 100. Abberath stays the minor god."
    ],
    gems: [],
    equip: [
      "Cold resistance and a flask of Heat.",
      "Quicksilver to leave the wave.",
      "After the kill, the pantheon screen is Y."
    ],
    resist: {
      title: "Before the Brine King",
      body: "Cold resistance and a flask that removes freeze. The pantheon after the fight is part of the reward. Turn the Brine King on."
    },
    passive: "Brine King major, Abberath minor."
  },
  {
    id: "a7-thicket",
    act: 7,
    title: "Skill books, and do not enter the Wildwood",
    walk: ["The Northern Forest", "The Dread Thicket", "The Causeway", "The Crossroads", "The Fellshrine Ruins", "The Crypt"],
    button: "Summon Raging Spirit",
    steps: [
      "Northern Forest. If a Viridian Wildwood entrance is on the map, leave it.",
      "Dread Thicket. Kill Gruthkul, Queen of Despair, and take the book. If the Wildwood entrance is here too, leave it.",
      "The Causeway. Pick up Kishara's Star and take the book.",
      "Crypt, off the Fellshrine side, when you reach the Crossroads: spinning-blade trial, and Ralakesh for The Master of a Million Faces. Take that book in town. The trial is the second cruel-lab trial."
    ],
    gems: [],
    equip: [
      "Fire and cold should both be comfortable. Act 7 has both.",
      "Keep one instant life flask.",
      "Do not stay to clear a side area that is not a book or a trial."
    ],
    resist: null,
    passive: "You should be level 40 soon. The cruel lab waits until the third trial, and you run it from the Act 8 town."
  },
  {
    id: "a7-trial",
    act: 7,
    title: "Chamber of Sins trial, then Maligaro",
    walk: ["The Chamber of Sins", "The Ashen Fields", "The Fortress", "The Temple of Decay"],
    button: "Summon Raging Spirit",
    steps: [
      "Chamber of Sins Level 2. Do the sawblade trial. This is the third cruel trial.",
      "A hidden switch just past this trial opens a gem chest. Open it if you are already standing there. Do not search the zone for it.",
      "Ashen Fields, the Fortress, the Temple of Decay. Kill Maligaro. That opens Act 8.",
      "Do not run the cruel labyrinth in the middle of this act. Do it from the Act 8 town, once you are level 40 or higher."
    ],
    gems: [],
    equip: [
      "Same four-link. Unleash should be in it if you are 38.",
      "Despair and Flesh Offering on Maligaro.",
      "Stone Golem up before you open the door."
    ],
    resist: null,
    passive: "Cruel lab is next: Unnatural Strength."
  },
  {
    id: "a8-lab",
    act: 8,
    title: "Cruel lab, then Unholy Might",
    walk: ["The Sarn Encampment", "The Aspirants' Plaza"],
    button: "Summon Raging Spirit",
    steps: [
      "You need the normal labyrinth already done, the three cruel trials, and level 40.",
      "Enter from the Aspirants' Plaza. Take Unnatural Strength.",
      "Minions gain Unholy Might. That converts physical damage to chaos and lets hits apply Withered. The spirit skill also converts physical damage to fire, so the physical portion is split between fire and chaos.",
      "Poison still needs a poison chance. A Ghastly Eye jewel with a chance for minions to poison is that piece. Wear one when it drops. Do not stop the act to buy a perfect jewel. Added chaos on that jewel, and later The Covenant, is what the poison is built from. Unbound Ailments makes the poison last longer.",
      "Void Manipulation is the green chaos support. Melee Splash is the red clear support. Add either one only in a socket outside the four blue gems."
    ],
    gems: [
      { name: "Void Manipulation", color: "green", note: "Buy it if a vendor has it. A spare green socket, after this lab." },
      { name: "Melee Splash", color: "red", note: "A spare red socket. The spirits' attacks splash. Do not break the four-link." }
    ],
    equip: [
      "One Stone Golem. Recast it when it dies.",
      "Malevolence can come on if you still have mana to cast Summon Raging Spirit. Generosity supports it when the red socket exists, so the aura applies to the minions.",
      "If the aura turns your cast off, lower the gem level or turn the aura off."
    ],
    resist: null,
    passive: "Unnatural Strength. Then start the reservation path: Redemption, Sanctuary, Influence, Sovereignty."
  },
  {
    id: "a8-sarn",
    act: 8,
    title: "Doedre, Bath House, the three books",
    walk: ["The Toxic Conduits", "Doedre's Cesspool", "The Grand Promenade", "The Bath House", "The High Gardens", "The Quay", "The Grain Gate"],
    button: "Summon Raging Spirit",
    steps: [
      "Kill Doedre. She curses. A flask of Warding removes curses if you have one.",
      "The Bath House. Do the furnace trial. This is the first merciless-lab trial.",
      "High Gardens. Kill Yugul. Reflection of Terror is a Book of Skill.",
      "The Quay. Love is Dead is a Book of Skill.",
      "The Grain Gate. The Gemling Legion is a Book of Skill.",
      "If a quest offers boots, take them only when the movement speed or the sockets beat your current pair."
    ],
    gems: [],
    equip: [
      "Chaos damage shows up more from here. Chaos resistance is welcome and not required.",
      "Do not buy a six-link.",
      "Keep fire resistance high. The next labs and Kitava both care."
    ],
    resist: null,
    passive: "Redemption is the first notable on the reservation path. It is minion damage on the way to the aura nodes."
  },
  {
    id: "a8-bridge",
    act: 8,
    title: "Solaris, Lunaris, the bridge",
    walk: ["The Solaris Temple", "The Lunaris Temple", "The Harbour Bridge"],
    button: "Summon Raging Spirit",
    steps: [
      "Do both temples. Kill the two goddesses on the bridge.",
      "Despair, Flesh Offering, spirits. Move off the marked ground.",
      "Take any Book of Skill offered in town, then go to Act 9.",
      "You should be around the mid 50s. If you are much lower, you are clearing too little. If you are much higher, you are clearing too much."
    ],
    gems: [],
    equip: [
      "Lightning and cold together. Two-stone ring if one resistance fell off.",
      "Quicksilver to cross the bridge.",
      "Life flask instant."
    ],
    resist: null,
    passive: "Sanctuary is block while you hold a shield. A life shield with a block roll is enough. Aegis Aurora is not a campaign shield."
  },
  {
    id: "a9-desert",
    act: 9,
    title: "Desert and Oasis, skip the Mirage",
    walk: ["The Blood Aqueduct", "Highgate", "The Vastiri Desert", "The Oasis"],
    button: "Summon Raging Spirit",
    steps: [
      "Blood Aqueduct is a later farming zone. Walk through it now.",
      "Highgate. Vendors, then the Vastiri Desert.",
      "Do Queen of the Sands. The Oasis holds Shakari if the quest points you there. Take the book.",
      "Both zones can spawn a Mirage in 3.30. Do the skill-book bosses. Do not enter the Mirage."
    ],
    gems: [],
    equip: [
      "Same gear rules. A tiered rare with life and two resistances replaces a weak unique.",
      "Check the wand one more time for +1 to minion skill gems.",
      "Boots still need movement speed."
    ],
    resist: null,
    passive: "Influence, then Sovereignty. Sovereignty is reservation efficiency. Malevolence gets easier to keep on once it is allocated. The path through Sovereignty is 57 points."
  },
  {
    id: "a9-core",
    act: 9,
    title: "Tunnel trial, Quarry, the Rotting Core",
    walk: ["The Tunnel", "The Quarry", "The Refinery", "The Rotting Core"],
    button: "Summon Raging Spirit",
    steps: [
      "The Tunnel. Do the blade-sentry trial. This is the second merciless trial. A hidden switch in this trial opens a gem chest. Take it if you see the switch. Do not hunt.",
      "The Quarry. Kill Garukhan. The Ruler of Highgate is a Book of Skill.",
      "The Refinery, then down into the Rotting Core. Kill the gods there.",
      "Sin sends you to Act 10. Take every book before you go."
    ],
    gems: [],
    equip: [
      "Fire resistance for the fire god, lightning for the lightning one.",
      "If a resistance is under 40% after the Act 5 penalty, fix it in Highgate before the Core.",
      "Vitality is a red aura and needs character level 10. Socket it on a ring when a red socket is free and the reservation still leaves you able to cast. It is life regeneration. It can wait."
    ],
    resist: {
      title: "Before the Rotting Core",
      body: "Look at the sheet. Fire and lightning both want to be high. Fix the lower one in Highgate."
    },
    passive: "Merciless lab is one trial away, in Act 10. Do not run it early."
  },
  {
    id: "a10-lab",
    act: 10,
    title: "Ossuary trial, then Bone Barrier",
    walk: ["The Cathedral Rooftop", "The Ravaged Square", "The Ossuary", "The Aspirants' Plaza"],
    button: "Summon Raging Spirit",
    steps: [
      "Into Oriath. Ravaged Square, then the Ossuary.",
      "Do the dart trial. This is the third merciless trial.",
      "You need the cruel labyrinth done and level 50. Run the merciless labyrinth from town.",
      "Take Bone Barrier. You gain physical damage reduction for each minion, you leech life from minion damage, and the minions gain energy shield from their life.",
      "Do not take Commander of Darkness yet. That is the fourth labyrinth, and it waits until maps are safe."
    ],
    gems: [],
    equip: [
      "Lab flasks: life, quicksilver, freeze, bleed.",
      "After the lab, the gems do not change.",
      "Purity of Fire is red and needs level 24. It is a fire-resistance aura. Socket it when fire is the hole in the sheet and you can pay the reservation. It is not required if the gear already caps fire."
    ],
    resist: null,
    passive: "Bone Barrier. Commander of Darkness is not this labyrinth."
  },
  {
    id: "a10-books",
    act: 10,
    title: "Vilenta and the Feeding Trough",
    walk: ["The Control Blocks", "The Feeding Trough"],
    button: "Summon Raging Spirit",
    steps: [
      "Control Blocks. Kill Vilenta. Take the Book of Skill.",
      "The Feeding Trough. An End to Hunger gives the last campaign books. Take them.",
      "Then you are standing in front of Kitava. Do not start the fight until the next card is true.",
      "If a quest offers a body armour, look at the sockets before the base. A five-link or six-link of the wrong base beats the four-link you are wearing. Otherwise keep the life armour you have."
    ],
    gems: [],
    equip: [
      "Count your links. A four-link of the four blue gems is enough to map. A five-link is a gift. A six-link is not a requirement.",
      "Life on the chest if the links are equal.",
      "Movement speed boots into maps."
    ],
    resist: null,
    passive: "Sovereignty should be allocated if the points reached it. Extra points are life."
  },
  {
    id: "a10-kitava",
    act: 10,
    title: "Second Kitava, then 75 on the sheet",
    walk: ["The Feeding Trough"],
    button: "Summon Raging Spirit",
    steps: [
      "This fight applies another 30% penalty to fire, cold, and lightning. It stacks with the Act 5 penalty. The total is minus 60%.",
      "About 135% resistance, before the penalty, lands on 75 after it. You will not see 135 if the sheet is already capping the number. Add the penalty back in your head, or check again after the fight.",
      "Kill Kitava.",
      "Do not open a map until C shows 75 fire, 75 cold, and 75 lightning.",
      "Life around 3000 before white maps, 4000 before yellow maps, 4500 before red maps.",
      "If The Covenant drops, put it in the stash. It adds a life cost equal to the mana cost of your skills. Equip it in maps, when the life flask and your regeneration can pay that."
    ],
    gems: [],
    equip: [
      "Rings, amulet, and belt are where the last resistances come from. Craft them at the bench.",
      "A life flask, a quicksilver, a Heat flask, a Staunching flask, and a Dousing or Grounding flask. Five flasks, all rolled.",
      "Weapon stays +1 to minion skill gems if you have it."
    ],
    resist: {
      title: "Before and after Kitava, Act 10",
      body: "Second penalty is another minus 30%, for minus 60% total. After the fight the sheet must read 75, 75, 75 before you open a map. Press C."
    },
    passive: "Open the Acts 5–10 spec in Path of Building. Bone Barrier and the path through Sovereignty are that spec."
  },
  {
    id: "maps-start",
    act: 11,
    title: "First maps",
    walk: ["Your hideout", "White maps"],
    button: "Summon Raging Spirit",
    steps: [
      "One Breach thread on the Map Device. Breach no longer appears on its own. Use the free Breach threads from the Breach Shaped Region before you spend threads from the stash.",
      "Finish the map. If you die twice, take the thread off or run a lower tier. Do not add a second thread until a tier has been deathless.",
      "The cast does not change. Despair, Flesh Offering, Summon Raging Spirit. Convocation when the spirits fall behind. Stone Golem up.",
      "Greater Unleash replaces Unleash at character level 72. It is blue. It is not required for white maps.",
      "A league boss Fate is worth taking only when that boss already dies quickly.",
      "The Breachlord bloodline on the Allflame profile has no confirmed 3.30 equivalent. The four Necromancer labs in this guide are the ascendancy."
    ],
    gems: [
      { name: "Summon Raging Spirit", color: "blue", note: "With Minion Damage, Unbound Ailments, and Unleash." },
      { name: "Greater Unleash", color: "blue", note: "Level 72. Replaces Unleash. Maps, not the campaign." },
      { name: "Void Manipulation", color: "green", note: "When a green socket exists." },
      { name: "Melee Splash", color: "red", note: "When a red socket exists." }
    ],
    equip: [
      "75 fire, 75 cold, 75 lightning. Life 3000, then 4000, then 4500 as the map colors rise.",
      "Campaign flasks stay until the endgame bases drop.",
      "Brine King and Abberath stay on. Press Y if you have reset them."
    ],
    resist: {
      title: "Before the first map",
      body: "75 fire, 75 cold, 75 lightning, and about 3000 life. One Breach thread. Two deaths and you remove the thread or drop a tier."
    },
    passive: "Gravepact can be allocated now. It is 63 points. Leave the three keystones until the next card's shield is equipped."
  },
  {
    id: "maps-gear",
    act: 11,
    title: "The profile's gear, once maps are safe",
    walk: ["Your hideout"],
    button: "Summon Raging Spirit",
    steps: [
      "These are the items on Shaemora, the level 99 Allflame Necromancer this guide follows. They are upgrades. White maps do not wait for them.",
      "Body: The Covenant. Socketed gems are supported by added chaos damage, and skills gain a life cost equal to their mana cost. The profile's robe has four blue sockets and two white sockets. The six-link is Unbound Ailments, Greater Unleash, Summon Raging Spirit, Minion Damage, Void Manipulation, and Melee Splash.",
      "Shield: Aegis Aurora. It needs level 62. When it is equipped, allocate Glancing Blows, Eldritch Battery, and Mind Over Matter. Glancing Blows doubles attack block and spell block. Blocked hits still deal most of their damage. The shield recovers energy shield when you block, and that recovery is why the keystones are together.",
      "Amulet: Aul's Uprising, which grants Envy. Belt: Darkness Enthroned, once you have two Ghastly Eye jewels with life, a chance for minions to poison, and added chaos damage for minions.",
      "Weapon: a rare Convoking Wand. Priority is +1 to minion skill gems, +1 to spell skill gems, then minion damage and minion speed. Helm, gloves, boots, and rings: life, then resistances. A suppression roll is welcome when it appears.",
      "The profile's spell suppression comes from gear, including The Green Nightmare. That jewel makes cold resistance and all-resistance passives in its radius also grant spell suppression. Socket it when you can see the radius on the tree. Mapping does not require it.",
      "Animate Guardian wears Dying Breath, Leer Cast, Garb of the Ephemeral, Asenath's Gentle Touch, and Windscream. Those items are on the guardian, not on you. A dead guardian can destroy the items it wears, and the 3.30 notes do not say that changed. Socket the gem when replacing them is acceptable. Minion Life and Meat Shield support the guardian.",
      "Raise Spectre is in that same helmet link. The profile does not name the corpse. Raise one only when you have chosen the corpse you intend to keep.",
      "After the passive path in this guide is finished, the profile adds a 12-passive large cluster whose small passives grant minion damage, and a small armour cluster with the notable Enduring Composure. Both wait until maps are comfortable.",
      "Endgame flasks, once the bases exist: a quicksilver with movement speed, a divine life flask that removes bleeding and corrupted blood, a granite flask, a silver flask, and a quartz flask. The profile uses them when the charges fill. Until those bases exist, the campaign flasks stay."
    ],
    gems: [
      { name: "Enlighten", color: "blue", note: "With Generosity and Malevolence, when you have the gem. It is rare. The aura works without it." },
      { name: "Tempest Shield", color: "blue", note: "With the block shield. Cast it. It belongs with the Stone Golem, not in the body." },
      { name: "Vitality", color: "red", note: "A ring socket, when reservation allows." },
      { name: "Purity of Fire", color: "red", note: "When fire resistance still needs the aura." }
    ],
    equip: [
      "Do not equip The Covenant on a life pool that cannot pay the extra cost.",
      "Do not allocate the three keystones before Aegis Aurora is equipped.",
      "Vaal Haste and Frostblink sit on the shield in the profile. Frostblink remains the movement skill."
    ],
    resist: null,
    passive: "Maps spec in Path of Building: Gravepact, Glancing Blows, Eldritch Battery, Mind Over Matter, and Commander of Darkness. Take the keystones only with the shield. Take Commander of Darkness only from the fourth labyrinth."
  },
  {
    id: "maps-hundred",
    act: 11,
    title: "From the 90s to 100",
    walk: ["Maps you have already cleared"],
    button: "Summon Raging Spirit",
    steps: [
      "At 95 and above, dying removes 10% of the experience in that level. From 95, only repeat maps you have finished without a death.",
      "One Breach thread stays the rule until a whole tier has been deathless. A second thread is for that moment.",
      "Life before red maps wants to be 4500 or more. Resistances stay capped. Flasks stay rolled.",
      "The fourth labyrinth is Commander of Darkness: aura speed for you and your allies, more damage, and elemental resistances. Run it when maps already feel safe.",
      "Pillars of Arun gives more experience than it used to. It is a unique map. It is not the plan."
    ],
    gems: [],
    equip: [
      "The six-link on the previous card, when the sockets exist.",
      "The uniques are upgrades. The level comes from maps you can clear.",
      "Brine King stays on. Press Y if you have reset it."
    ],
    resist: {
      title: "From 95",
      body: "Deathless maps you already know. Two deaths means less difficulty: remove a thread or drop a tier."
    },
    passive: "Stop adding atlas difficulty. The next cards are the atlas order."
  },
  {
    id: "atlas-sustain",
    act: 12,
    title: "Map sustain, from the centre",
    walk: ["The Atlas"],
    button: "Summon Raging Spirit",
    steps: [
      "Open the atlas. Allocation starts at the centre and moves outward. You can earn 150 points. The old cap was 138.",
      "This Path of Building does not contain the 3.30 atlas tree. On the in-game tree, take nodes whose text raises map drops, the chance of a connected map, or the tier of maps that drop.",
      "Stop when the next wheel is a league mechanic. Breach is the mechanic, and it comes after the maps are sustaining.",
      "If a node name from an older atlas guide is missing, leave the space empty. Do not invent a replacement.",
      "These keystones were removed: Crop Rotation, Endless Tide, Lucid Dreams, Meticulous Appraiser, Refiner's Bargain, and Synthesised Stability. Delve and Heist clusters were removed."
    ],
    gems: [],
    equip: [
      "Same character as the Maps cards. The atlas does not change your gems.",
      "Complete the map. A map you cannot finish does not get a harder atlas."
    ],
    resist: null,
    passive: "Map sustain first. Then the Breach card."
  },
  {
    id: "atlas-breach",
    act: 12,
    title: "One Breach thread, and the free ones",
    walk: ["The Atlas", "The Breach Shaped Region"],
    button: "Summon Raging Spirit",
    steps: [
      "Scarabs are gone. A thread on the Map Device adds that mechanic. You can use up to eight. Each extra thread also raises the chance of a random extra effect for that mechanic.",
      "The ten threads are Abyss, Bestiary, Betrayal, Blight, Breach, Expedition, Incursion, Legion, Ritual, and Ultimatum. Those ten no longer show up in a map on their own.",
      "Use Breach. One thread.",
      "A fresh atlas starts with one Shaped Region of each thread type. Maps in the Breach region get free Breach threads. Finish that region's objective. The free-thread count for the other maps in the region goes up. Spend those free threads before you spend threads from the stash.",
      "While you have fewer than ten regions, a button at the centre of the atlas regenerates them.",
      "Beyond is not a thread. A Demonic Evocator can appear at the start of a map, and maps have a small natural chance for Beyond. Leave the evocator alone."
    ],
    gems: [],
    equip: [
      "One thread on the device. The region supplies the free ones.",
      "Do the Breach region's objective before you invest in the other nine regions."
    ],
    resist: null,
    passive: "After map sustain, take Breach nodes whose text you have read on the live tree. Thread clusters replaced the old scarab clusters."
  },
  {
    id: "atlas-stop",
    act: 12,
    title: "When to add difficulty, and when to stop",
    walk: ["Maps you have already cleared"],
    button: "Summon Raging Spirit",
    steps: [
      "Two deaths in one map means take a thread off or drop a tier.",
      "A second thread waits until you have cleared a tier without dying.",
      "From level 95, a death removes 10% of the experience of that level. Repeat maps you already finished clean.",
      "Leave the new keystone Phantom Anomalies alone while you are learning the tree. The notes say it makes Atlas Anomalies appear when you complete Shaped Regions, and lets them appear from any quadrant. Read it in game before you allocate it.",
      "Leave Unwavering Vision. It locks you to one thread type, turns most threads you find into gold, and adds threads to maps that already have one.",
      "Secondary clusters were reworked: Essence, Harvest, Mercenaries, Ore Deposits, Rogue Exiles, Shrines, Strongboxes, and Torment. Take one only after sustain and Breach, and only when the node text is a small bonus.",
      "Beyond, Buried Sentinels, Delirium, Mirage, and the Viridian Wildwood only have clusters that raise the chance they appear. Skip those clusters on the way to 100."
    ],
    gems: [],
    equip: [
      "The character's gear rule does not change on this card.",
      "A death is a reason to remove a thread, not a reason to buy a different unique."
    ],
    resist: null,
    passive: "If the live tree and this card disagree, the live tree wins. This card is the order of decisions, not a list of wheel names."
  },
  {
    id: "atlas-points",
    act: 12,
    title: "Where the rest of the points come from",
    walk: ["Maven", "The Searing Exarch", "The Eater of Worlds", "Uber Elder"],
    button: "Summon Raging Spirit",
    steps: [
      "Defeating the Maven, the Searing Exarch, the Eater of Worlds, or any of Maven's six invitations gives 2 atlas points and 2 respec points. Each of those used to give 1 atlas point.",
      "Defeating the Uber Elder gives 4 atlas points and 2 respec points.",
      "Run one of these when that boss already dies quickly. They fill the tree. They are not how you reach the 90s.",
      "Pillars of Arun now grants more experience than it used to. It is a unique map. It is not this route.",
      "After each point, go back to the centre and keep the same order: map sustain, then Breach, then a small secondary bonus you have read. Stop when the next node would add a mechanic you are not already clearing."
    ],
    gems: [],
    equip: [
      "75, 75, 75, and the life floor for the map color you are running.",
      "One Breach thread until the stop card says otherwise.",
      "Commander of Darkness can be taken once these fights are already comfortable. It is a character labyrinth, not an atlas node."
    ],
    resist: null,
    passive: "150 points is the cap. You do not need all of them allocated to reach 100. Unspent points are fine."
  }
];
