import { r as registerInstance, h } from './index-590b6de4.js';

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("header", null, h("h1", null, "Adrift")), h("main", null, h("stencil-route-link", { url: '/' }, h("button", null, "Home")), h("stencil-route-link", { url: '/characters' }, h("button", null, "Generate characters")), h("stencil-route-link", { url: '/ships' }, h("button", null, "Generate Ships")), h("stencil-route-link", { url: '/dungeons' }, h("button", null, "Generate Dungeons")), h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'app-home', exact: true }), h("stencil-route", { url: '/characters', component: 'app-characters' }), h("stencil-route", { url: '/ships', component: 'app-ship' }), h("stencil-route", { url: '/dungeons', component: 'app-dungeons' }))))));
    }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
