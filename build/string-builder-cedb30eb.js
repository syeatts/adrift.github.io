import { r as registerInstance, h, g as getElement } from './index-590b6de4.js';

const stringBuilderCss = "";

const StringBuilder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bodyStr = 'body';
        this.suffixStr = 'suffix';
        this.selectOpts = ["input"];
        this.buildString = (e) => {
            console.log(e);
            this.mainString = this.bodyStr + this.suffixStr;
            console.log(this.mainString);
        };
    }
    appendInput() {
        return '<p><input type="text"></input></p>';
    }
    async componentDidRender() {
        this.buildString(undefined);
        // await this.selectBox.getSelection();
        // console.log(`${this.main.innerHTML}${this.appendInput()}`);
        // this.main.innerHTML = `${this.main.innerHTML}${this.appendInput()}`;
    }
    render() {
        return (h("div", { class: 'string-builder', ref: (el) => this.main = el }, h("p", null, this.mainString, " awsdf"), h("p", null, h("label", null, `Body: `, h("input", { type: "text", id: "body", name: "body", value: this.bodyStr, onInput: (e) => console.log(e) }))), h("p", null, h("label", null, `Suffix: `, h("input", { type: "text", id: "suf", name: "suf", value: this.suffixStr, onInput: (e) => this.buildString(e) })))));
    }
    get el() { return getElement(this); }
};
StringBuilder.style = stringBuilderCss;

export { StringBuilder as S };
