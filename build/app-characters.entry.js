import { r as registerInstance, h } from './core-ed645cd6.js';

const AppCharacters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.getRandomNum = (max) => {
            const min = Math.ceil(0);
            const flooredMax = Math.floor(max);
            return Math.floor(Math.random() * (flooredMax - min + 1)) + min;
        };
        this.charArray = [];
        this.alignment = [
            "Lawful Good",
            "Neutral Good",
            "Chaotic Good",
            "Lawful Neutral",
            "True Neutral",
            "Chaotic Neutral",
            "Lawful Evil",
            "Neutral Evil"
        ];
        this.race = [
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
        this.elfType = [
            "high",
            "wood",
            "dark"
        ];
        this.gnomeType = [
            "rock",
            "forest",
            "deep"
        ];
        this.dwarfType = [
            "mountain",
            "gray (duergar)",
            "hill"
        ];
        this.hobbitType = [
            "stout",
            "lightfoot"
        ];
        this.hue = [
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
        this.exotic = [
            "firbolg",
            "genasi",
            "goliath"
        ];
        this.aasimar = [
            "protector aasimar",
            "scourge aasimar",
            "fallen aasimar"
        ];
        this.element = [
            "air",
            "fire",
            "earth",
            "water"
        ];
        this.class = [
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
        this.power = [
            "a kingdom or nation",
            "a church/cult",
            "a dangerous spirit",
            "an aristocratic family",
            "a ruthless syndicate",
            "an otherworldly presence"
        ];
        this.background = [
            "an Acolyte of a powerful deity",
            "a Charlatan who preyed upon the confidence of the gullible",
            "a hardened Criminal",
            "a popular Entertainer",
            "attached to the court of a royal house (Courtier)",
            "a watchman in a large city",
            "a finder of… ‘lost’ persons (Bounty Hunter)",
            "an agent of a political faction",
            "on a long journey, far from their native land (Far Traveller)",
            "an artisan (or merchant) and member in good standing of a guild",
            "the hero of the people in a small, rural village",
            "a seeker after wisdom, who lived apart from others (Hermit)",
            "the Inheritor of a mysterious object of power",
            "a Mercenary - a veteran of several campaigns",
            "a member of the nobility",
            "a knight who belonged to a brotherhood",
            "a wanderer who shunned civilization (Outlander)",
            "a scholar of esoteric subjects (Sage)",
            "a Sailor - or a pirate, depending on how one defines one’s terms",
            `a professional Soldier, in the army of a ${this.power[this.getRandomNum(this.power.length - 1)]}`,
            "a street-dwelling Urchin, who struggled to survive urban life"
        ];
        this.route = [
            "returning home",
            "embarking on a pilgrimage",
            "touring the world for pleasure",
            "on the way to meet someone",
            "leaving to start a new life",
            "exiled from their homeland"
        ];
        this.officer = [
            "the first mate",
            "the bosun",
            "the navigator (quartermaster)",
            "the ship’s doctor (surgeon)",
            "the cook"
        ];
        this.job = [
            "They had signed on as an average sailor, perhaps to learn the trade",
            `They were ${this.officer[this.getRandomNum(this.officer.length - 1)]}`,
            "They were there to protect the ship in some capacity - as a marine, perhaps",
            "Actually, they were the captain of this vessel"
        ];
        this.ward = [
            "a spoiled young aristocrat",
            "a religious figure",
            "a wealthy merchant",
            "a scholar weighed down with terrible knowledge",
            "someone with a mysterious object of power",
            "someone wrongfully accused of a crime"
        ];
        this.durance = [
            "wrongfully convicted of another's crime",
            "having violated a serious taboo of their home culture",
            "put in chains for outstanding debts",
            "restrained for the safety of others",
            "unrepentant of their crimes",
            "sold into bondage",
            "full of regrets for a crime of passion",
            "whose beliefs angered the rulers of a kingdom or nation"
        ];
        this.task = [
            "steal a mysterious object of power",
            "assassinate someone on board",
            "sabotage the ship",
            "rescue a prisoner on board",
            "conduct surveillance on the ship and crew",
            "take control of the ship for their masters"
        ];
        this.role = [
            `a passenger, ${this.route[this.getRandomNum(this.route.length - 1)]}`,
            `a member of the crew. ${this.job[this.getRandomNum(this.job.length - 1)]}`,
            `a stowaway, fleeing the agents of ${this.power[this.getRandomNum(this.power.length - 1)]}`,
            `someone's protector, defending ${this.ward[this.getRandomNum(this.ward.length - 1)]} against the agents of ${this.power[this.getRandomNum(this.power.length - 1)]}`,
            `a prisoner,${this.durance[this.getRandomNum(this.durance.length - 1)]}`,
            `an agent of  ${this.power[this.getRandomNum(this.power.length - 1)]}, on a mission to  ${this.task[this.getRandomNum(this.task.length - 1)]}`,
        ];
        this.buildAasimar = () => {
            return this.aasimar[this.getRandomNum(this.aasimar.length - 1)];
        };
        this.buildExotic = () => {
            const index = this.getRandomNum(this.exotic.length);
            if (index === this.exotic.length) {
                return this.buildAasimar();
            }
            if (this.exotic[index] === 'genasi') {
                return `${this.element[this.getRandomNum(this.element.length - 1)]} ${this.exotic[index]}`;
            }
            return this.exotic[index];
        };
        this.getElf = () => `${this.elfType[this.getRandomNum(this.elfType.length - 1)]} elf`;
        this.getGnome = () => `${this.gnomeType[this.getRandomNum(this.gnomeType.length - 1)]} gnome`;
        this.getDwarf = () => `${this.dwarfType[this.getRandomNum(this.dwarfType.length - 1)]} dwarf`;
        this.getHalfling = () => `${this.hobbitType[this.getRandomNum(this.hobbitType.length - 1)]} halfling`;
        this.getDragonborn = () => `${this.hue[this.getRandomNum(this.hue.length - 1)]} dragonborn`;
        this.comboMap = {
            elf: this.getElf,
            gnome: this.getGnome,
            dwarf: this.getDwarf,
            halfling: this.getHalfling,
            dragonborn: this.getDragonborn
        };
        this.buildRace = () => {
            const index = this.getRandomNum(this.race.length);
            if (index === this.race.length) {
                return this.buildExotic();
            }
            const comboRaces = Object.keys(this.comboMap);
            if (comboRaces.includes(this.race[index])) {
                return this.comboMap[this.race[index]]();
            }
            return this.race[index];
        };
        this.buildRole = () => this.role[this.getRandomNum(this.role.length - 1)];
        this.buildCharacter = () => `This person is a ${this.alignment[this.getRandomNum(this.alignment.length - 1)]} ${this.buildRace()} ${this.class[this.getRandomNum(this.class.length - 1)]}.
    In their previous life, they were ${this.background[this.getRandomNum(this.background.length - 1)]}.
    They came to the ship as ${this.buildRole()}`;
        this.addChar = () => this.charArray = [this.buildCharacter(), ...this.charArray];
    }
    render() {
        return (h("div", { class: 'app-characters' }, h("p", null, "Welcome to Characters."), h("button", { onClick: () => this.addChar() }, "Add Character"), this.charArray.map(current => h("p", null, current))));
    }
    static get style() { return ".app-characters {\n  padding: 10px;\n}\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n  \nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}"; }
};

export { AppCharacters as app_characters };
