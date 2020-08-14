import { r as registerInstance, h } from './index-590b6de4.js';

const alignments = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil"
];
const race = [
    "human",
    "elf",
    "gnome",
    "dwarf",
    "halfling",
    "half-elf",
    "half-orc",
    "tiefling",
    "dragonborn"
];
const charClass = [
    "barbarian",
    "bard",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard"
];
const racialMods = {
    elfType: [
        "high",
        "wood",
        "dark"
    ],
    gnomeType: [
        "rock",
        "forest",
        "deep"
    ],
    dwarfType: [
        "mountain",
        "gray (duergar)",
        "hill"
    ],
    hobbitType: [
        "stout",
        "lightfoot"
    ]
};
const hue = [
    "red",
    "blue",
    "green",
    "white",
    "black",
    "gold",
    "silver",
    "brass",
    "bronze",
    "copper"
];

const exotic = [
    "firbolg",
    "genasi",
    "goliath"
];
const aasimar = [
    "protector aasimar",
    "scourge aasimar",
    "fallen aasimar"
];
const element = [
    "air",
    "fire",
    "earth",
    "water"
];

const getRandomNum = (max) => {
    const min = Math.ceil(0);
    const flooredMax = Math.floor(max);
    const randomized = Math.floor(Math.random() * (flooredMax - min + 1)) + min;
    return randomized;
};

const officer = [
    "the first mate",
    "the bosun",
    "the navigator (quartermaster)",
    "the ship’s doctor (surgeon)",
    "the cook"
];
const route = [
    "returning home",
    "embarking on a pilgrimage",
    "touring the world for pleasure",
    "on the way to meet someone",
    "leaving to start a new life",
    "exiled from their homeland"
];
const job = [
    () => "They had signed on as an average sailor, perhaps to learn the trade",
    () => `They were ${officer[getRandomNum(officer.length - 1)]}`,
    () => "They were there to protect the ship in some capacity - as a marine, perhaps",
    () => "Actually, they were the captain of this vessel"
];
const power = [
    "a kingdom or nation",
    "a church/cult",
    "a dangerous spirit",
    "an aristocratic family",
    "a ruthless syndicate",
    "an otherworldly presence"
];
const background = [
    () => "an Acolyte of a powerful deity",
    () => "a Charlatan who preyed upon the confidence of the gullible",
    () => "a hardened Criminal",
    () => "a popular Entertainer",
    () => "attached to the court of a royal house (Courtier)",
    () => "a watchman in a large city",
    () => "a finder of… ‘lost’ persons (Bounty Hunter)",
    () => "an agent of a political faction",
    () => "on a long journey, far from their native land (Far Traveller)",
    () => "an artisan (or merchant) and member in good standing of a guild",
    () => "the hero of the people in a small, rural village",
    () => "a seeker after wisdom, who lived apart from others (Hermit)",
    () => "the Inheritor of a mysterious object of power",
    () => "a Mercenary - a veteran of several campaigns",
    () => "a member of the nobility",
    () => "a knight who belonged to a brotherhood",
    () => "a wanderer who shunned civilization (Outlander)",
    () => "a scholar of esoteric subjects (Sage)",
    () => "a Sailor - or a pirate, depending on how one defines one’s terms",
    () => `a professional Soldier, in the army of a ${power[getRandomNum(power.length - 1)]}`,
    () => "a street-dwelling Urchin, who struggled to survive urban life"
];
const ward = [
    "a spoiled young aristocrat",
    "a religious figure",
    "a wealthy merchant",
    "a scholar weighed down with terrible knowledge",
    "someone with a mysterious object of power",
    "someone wrongfully accused of a crime"
];
const durance = [
    "wrongfully convicted of another's crime",
    "having violated a serious taboo of their home culture",
    "put in chains for outstanding debts",
    "restrained for the safety of others",
    "unrepentant of their crimes",
    "sold into bondage",
    "full of regrets for a crime of passion",
    "whose beliefs angered the rulers of a kingdom or nation"
];
const task = [
    "steal a mysterious object of power",
    "assassinate someone on board",
    "sabotage the ship",
    "rescue a prisoner on board",
    "conduct surveillance on the ship and crew",
    "take control of the ship for their masters"
];
const role = [
    () => `a passenger, ${route[getRandomNum(route.length - 1)]}`,
    () => `a member of the crew. ${job[getRandomNum(job.length - 1)]()}`,
    () => `a stowaway, fleeing the agents of ${power[getRandomNum(power.length - 1)]}`,
    () => `someone's protector, defending ${ward[getRandomNum(ward.length - 1)]} against the agents of ${power[getRandomNum(power.length - 1)]}`,
    () => `a prisoner,${durance[getRandomNum(durance.length - 1)]}`,
    () => `an agent of  ${power[getRandomNum(power.length - 1)]}, on a mission to  ${task[getRandomNum(task.length - 1)]}`,
];

const charactersCss = ".app-characters{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}";

const { elfType, gnomeType, dwarfType, hobbitType } = racialMods;
const AppCharacters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.charArray = [];
        this.buildAasimar = () => {
            return aasimar[getRandomNum(aasimar.length - 1)];
        };
        this.buildExotic = () => {
            const index = getRandomNum(exotic.length);
            if (index === exotic.length) {
                return this.buildAasimar();
            }
            if (exotic[index] === 'genasi') {
                return `${element[getRandomNum(element.length - 1)]} ${exotic[index]}`;
            }
            return exotic[index];
        };
        this.buildElf = () => `${elfType[getRandomNum(elfType.length - 1)]} elf`;
        this.buildGnome = () => `${gnomeType[getRandomNum(gnomeType.length - 1)]} gnome`;
        this.buildDwarf = () => `${dwarfType[getRandomNum(dwarfType.length - 1)]} dwarf`;
        this.buildHalfling = () => `${hobbitType[getRandomNum(hobbitType.length - 1)]} halfling`;
        this.buildDragonborn = () => `${hue[getRandomNum(hue.length - 1)]} dragonborn`;
        this.comboMap = {
            elf: this.buildElf,
            gnome: this.buildGnome,
            dwarf: this.buildDwarf,
            halfling: this.buildHalfling,
            dragonborn: this.buildDragonborn
        };
        this.buildRace = () => {
            const index = getRandomNum(race.length);
            if (index === race.length) {
                return this.buildExotic();
            }
            const comboRaces = Object.keys(this.comboMap);
            if (comboRaces.includes(race[index])) {
                return this.comboMap[race[index]]();
            }
            return race[index];
        };
        this.buildRole = () => role[getRandomNum(role.length - 1)]();
        this.buildCharacter = () => `This person is a ${alignments[getRandomNum(alignments.length - 1)]} ${this.buildRace()} ${charClass[getRandomNum(charClass.length - 1)]}.
    In their previous life, they were ${background[getRandomNum(background.length - 1)]()}.
    They came to the ship as ${this.buildRole()}`;
        this.addChar = () => this.charArray = [this.buildCharacter(), ...this.charArray];
    }
    render() {
        return (h("div", { class: 'app-characters' }, h("p", null, "Welcome to Characters."), h("button", { onClick: () => this.addChar() }, "Add Character"), this.charArray.map(current => h("p", null, current))));
    }
};
AppCharacters.style = charactersCss;

export { AppCharacters as app_characters };
