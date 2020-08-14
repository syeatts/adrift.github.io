import { r as registerInstance, h } from './index-590b6de4.js';
import './string-builder-cedb30eb.js';

const appHomeCss = ".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}";

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-home' }, h("p", null, "Welcome to Adrift."), h("p", null, "Adrift was conceived as a character-concept generator using preformatted data such as class names, backgrounds and backstories."), h("p", null, "The concept was originally intended for a naval-based game in which characters meet and interact on the high-seas, but we have plans to adapt the input to traditional games as well."), h("p", null, "We also have rules for generating dungeons and ships (and potentially much more) in the works. This is NOT a character generator, but an idea generator for players and DMs to quickly build out concepts."), h("p", null, "You are HIGHLY encouraged NOT to discard any \"wacky\" combinations you encounter. That Lawful Evil half-orc cleric who used to be a scholar but left that life behind to make their living as a common sailor? That might be the most interesting character you ever play! Have fun coming up with the WHY behind our WHAT!"), h("p", null, "Adrift does NOT use or implement any mechanics specific to any licensed property or use any trademarked material as a part of its code. You will not get to bypass buying the books for your RPG system of choice!")));
    }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
