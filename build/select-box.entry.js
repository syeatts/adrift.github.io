import { r as registerInstance, h, g as getElement } from './index-590b6de4.js';

const selectBoxCss = "";

const SelectBox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async getSelection() {
        return this.select.value;
    }
    render() {
        return (h("div", { class: 'string-builder' }, h("select", { ref: (el) => this.select = el }, this.selectOpts.map(curr => h("option", { value: curr }, curr)))));
    }
    get el() { return getElement(this); }
};
SelectBox.style = selectBoxCss;

export { SelectBox as select_box };
