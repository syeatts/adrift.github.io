import { r as registerInstance, h } from './index-590b6de4.js';

const appShipCss = ".app-ship{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}";

const AppShip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-ship' }, h("p", null, "Welcome to Ships. (Coming Soon)")));
    }
};
AppShip.style = appShipCss;

export { AppShip as app_ship };
