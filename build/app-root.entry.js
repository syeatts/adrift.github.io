import { r as registerInstance, h } from './core-ed645cd6.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("header", null, h("h1", null, "Adrift")), h("main", null, h("stencil-route-link", { url: '/' }, h("button", null, "Home")), h("stencil-route-link", { url: '/characters' }, h("button", null, "Generate characters")), h("stencil-route-link", { url: '/ships' }, h("button", null, "Generate Ships")), h("stencil-route-link", { url: '/dungeons' }, h("button", null, "Generate Dungeons")), h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'app-home', exact: true }), h("stencil-route", { url: '/characters', component: 'app-characters' }), h("stencil-route", { url: '/ships', component: 'app-ship' }), h("stencil-route", { url: '/dungeons', component: 'app-dungeons' }))))));
    }
    static get style() { return "header {\n  background: #5851ff;\n  color: white;\n  height: 56px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nh1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n}"; }
};

export { AppRoot as app_root };
