var __awaiter=this&&this.__awaiter||function(e,r,t,n){function o(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{u(n.next(e))}catch(r){a(r)}}function s(e){try{u(n["throw"](e))}catch(r){a(r)}}function u(e){e.done?t(e.value):o(e.value).then(i,s)}u((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(r){return u([e,r])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:t.label++;return{value:i[1],done:false};case 5:t.label++;o=i[1];i=[0];continue;case 7:i=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){t.label=i[1];break}if(i[0]===6&&t.label<a[1]){t.label=a[1];a=i;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(i);break}if(a[2])t.ops.pop();t.trys.pop();continue}i=r.call(e,t)}catch(s){i=[6,s];o=0}finally{n=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),o=0,r=0;r<t;r++)for(var a=arguments[r],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n};System.register(["./p-f5649016.system.js"],(function(e){"use strict";var r,t,n;return{setters:[function(e){r=e.r;t=e.h;n=e.g}],execute:function(){var o=["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil"];var a=["human","elf","gnome","dwarf","halfling","half-elf","half-orc","tiefling","dragonborn"];var i=["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"];var s={elfType:["high","wood","dark"],gnomeType:["rock","forest","deep"],dwarfType:["mountain","gray (duergar)","hill"],halflingType:["stout","lightfoot"],dragonbornType:["red","blue","green","white","black","gold","silver","brass","bronze","copper"]};var u=function(e){var r=Math.ceil(0);var t=Math.floor(e);var n=Math.floor(Math.random()*(t-r+1))+r;return n};var c=function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)};var l=["firbolg","genasi","goliath"];var f=["protector aasimar","scourge aasimar","fallen aasimar"];var h=["air","fire","earth","water"];var d=function(e){if(e==="random"){var r=u(l.length);if(r===l.length){return p()}if(l[r]==="genasi"){return h[u(h.length-1)]+" "+l[r]}return l[r]}else if(e==="genasi"){return h[u(h.length-1)]+" "+e}return e};var p=function(){return f[u(f.length-1)]};var g={Soldier:"soldier-background-type","ward-power":"ward-power",ward:"ward",route:"route","stowaway-power":"stowaway-power",durance:"durance",task:"task",officer:"officer",job:"job","agent-power":"agent-power"};var w={job:"Ship's Crew: ",officer:"Officer Jobs: ",route:"Passenger Route: ","stowaway-power":"Stowaway Power: ",ward:"Ward: ","ward-power":"Ward Power: ",durance:"Prisoner durance: ","agent-power":"Agent Power: ",task:"Agent Task: "};var b=["the first mate","the bosun","the navigator (quartermaster)","the ship’s doctor (surgeon)","the cook"];var m=["returning home","embarking on a pilgrimage","touring the world for pleasure","on the way to meet someone","leaving to start a new life","exiled from their homeland"];var v=[function(){return"They had signed on as an average sailor, perhaps to learn the trade"},function(){return"They were #officer#"},function(){return"They were there to protect the ship in some capacity - as a marine, perhaps"},function(){return"Actually, they were the captain of this vessel"}];var y=["a kingdom or nation","a church/cult","a dangerous spirit","an aristocratic family","a ruthless syndicate","an otherworldly presence"];var x=[function(){return"an Acolyte of a powerful deity"},function(){return"a Charlatan who preyed upon the confidence of the gullible"},function(){return"a hardened Criminal"},function(){return"a popular Entertainer"},function(){return"attached to the court of a royal house (Courtier)"},function(){return"a watchman in a large city"},function(){return"a finder of… ‘lost’ persons (Bounty Hunter)"},function(){return"an agent of a political faction"},function(){return"on a long journey, far from their native land (Far Traveller)"},function(){return"an artisan (or merchant) and member in good standing of a guild"},function(){return"the hero of the people in a small, rural village"},function(){return"a seeker after wisdom, who lived apart from others (Hermit)"},function(){return"the Inheritor of a mysterious object of power"},function(){return"a Mercenary - a veteran of several campaigns"},function(){return"a member of the nobility"},function(){return"a knight who belonged to a brotherhood"},function(){return"a wanderer who shunned civilization (Outlander)"},function(){return"a scholar of esoteric subjects (Sage)"},function(){return"a Sailor - or a pirate, depending on how one defines one’s terms"},function(){return"a professional Soldier, in the army of #power#"},function(){return"a street-dwelling Urchin, who struggled to survive urban life"}];var _=["a spoiled young aristocrat","a religious figure","a wealthy merchant","a scholar weighed down with terrible knowledge","someone with a mysterious object of power","someone wrongfully accused of a crime"];var S=["wrongfully convicted of another's crime","having violated a serious taboo of their home culture","put in chains for outstanding debts","restrained for the safety of others","unrepentant of their crimes","sold into bondage","full of regrets for a crime of passion","whose beliefs angered the rulers of a kingdom or nation"];var k=["steal a mysterious object of power","assassinate someone on board","sabotage the ship","rescue a prisoner on board","conduct surveillance on the ship and crew","take control of the ship for their masters"];var T=[function(){return"a passenger, #route#"},function(){return"a member of the crew. #job#"},function(){return"a stowaway, fleeing the agents of #stowaway-power#"},function(){return"someone's protector, defending #ward# against the agents of #ward-power#"},function(){return"a prisoner, #durance#"},function(){return"an agent of #agent-power# on a mission to #task#."}];var O=".app-characters{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}";var C=e("app_characters",function(){function e(e){var t=this;r(this,e);this.charArray=[];this.comboRaces=["elf","gnome","dwarf","halfling","dragonborn"];this.power=y;this.job=v;this.officer=b;this.route=m;this.ward=_;this.durance=S;this.task=k;this.numberToGenerate=1;this.buildCharacter=function(){return __awaiter(t,void 0,void 0,(function(){var e,r,t,n,o;return __generator(this,(function(a){switch(a.label){case 0:e="This person is a\n    ";return[4,this.buildAlignments()];case 1:r=e+a.sent()+"\n    ";return[4,this.buildRace()];case 2:t=r+a.sent()+"\n    ";return[4,this.buildClass()];case 3:n=t+a.sent()+".\n    In their previous life, they were ";return[4,this.buildBackground()];case 4:o=n+a.sent()+".\n    They came to the ship as ";return[4,this.buildRole()];case 5:return[2,o+a.sent()]}}))}))};this.buildRace=function(){return __awaiter(t,void 0,void 0,(function(){var e,r;var t=this;return __generator(this,(function(n){switch(n.label){case 0:return[4,this.getSelectBox("exotic").getSelection()];case 1:e=n.sent();if(e!=="random"){return[2,d(e)]}r=this.getSelectBox("race").getSelection();return[2,r.then((function(r){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(n){if(r==="random"){t=u(a.length);if(t===a.length){return[2,d(e)]}else{return[2,this.getComboRace(a[t])]}}return[2,this.getComboRace(r)]}))}))}))]}}))}))};this.getComboRace=function(e){return __awaiter(t,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){switch(n.label){case 0:r=s[e+"Type"];t=this.getSelectBox(e+"-type");if(!(t&&this.comboRaces.includes(e)))return[3,2];return[4,this.randomOrFixed(this.getSelectBox(e+"-type").getSelection(),r)];case 1:return[2,n.sent()+" "+e];case 2:if(this.comboRaces.includes(e)){return[2,r[u(r.length-1)]+" "+e]}n.label=3;case 3:return[2,e]}}))}))};this.addChar=function(e){return __awaiter(t,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:if(!(e>0))return[3,2];r=this;return[4,this.buildCharacter()];case 1:r.charArray=__spreadArrays.apply(void 0,[[t.sent()],this.charArray]);this.addChar(e-1);t.label=2;case 2:return[2]}}))}))};this.buildRole=function(){return t.randomOrFixedFunction(t.getSelectBox("role").getSelection(),T)};this.buildOfficer=function(){return t.randomOrFixed(t.getSelectBox("officer").getSelection(),b)};this.buildAlignments=function(){return t.randomOrFixed(t.getSelectBox("alignment").getSelection(),o)};this.buildClass=function(){return t.randomOrFixed(t.getSelectBox("char-class").getSelection(),i)};this.buildBackground=function(){return t.randomOrFixedFunction(t.getSelectBox("background").getSelection(),x)};this.getSelectBox=function(e){return t.el.shadowRoot.getElementById(e)};this.randomOrFixed=function(e,r){return e.then((function(e){return e==="random"?r[u(r.length-1)]:e}))};this.randomOrFixedFunction=function(e,r){return e.then((function(e){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:if(!(e==="random"))return[3,1];t=this.completeTrait(r[u(r.length-1)]());return[3,3];case 1:return[4,this.completeTrait(e)];case 2:t=n.sent();n.label=3;case 3:return[2,t]}}))}))}))};this.completeTrait=function(e){return __awaiter(t,void 0,void 0,(function(){var r,t,n,o;var a=this;return __generator(this,(function(i){switch(i.label){case 0:r=e.match(/(?! )(?<=#).*?(?=#)(?<! )/g);t=Object.keys(g).filter((function(r){return e.includes(r)})).reverse();return[4,Promise.all(t.map((function(e){var r;return g[e]?((r=a.getSelectBox(g[e]))===null||r===void 0?void 0:r.getSelection())||"random":undefined})))];case 1:n=i.sent();o=r?r.reduce((function(e,r,t){return e.replace("#"+r+"#",""+n[t]==="random"?""+a.getStringOrFunction(r):n[t])}),e):e;if(!o.match(/(?! )(?<=#).*?(?=#)(?<! )/g))return[3,3];return[4,this.completeTrait(o)];case 2:return[2,i.sent()];case 3:return[2,o]}}))}))};this.getStringOrFunction=function(e){var r=e==="agent-power"||e==="stowaway-power"||e==="ward-power"?"power":e;var n=t[r][u(t[r].length-1)];if(typeof n!=="string"){return n()}return n};this.appendRacialModifiers=function(e){return __awaiter(t,void 0,void 0,(function(){var r,t,n,o;return __generator(this,(function(a){switch(a.label){case 0:r=this.el.shadowRoot.querySelector("#elf-type, #gnome-type, #dwarf-type, #halfling-type, #dragonborn-type");r?r.parentNode.removeChild(r):"";t=e.currentTarget;n=document.createElement("select-box");return[4,this.getSelectBox("race").getSelection()];case 1:o=a.sent();if(this.comboRaces.includes(o)){if(o!=="random"){n.id=o+"-type";n.selectOpts=s[o+"Type"];n.selectId=c(o)+" "+(o==="dragonborn"?"Hue: ":"Sub-race: ")}t.after(n)}return[2]}}))}))};this.appendSoldierModifier=function(e,r,n,o,a){return __awaiter(t,void 0,void 0,(function(){var t,i,s,u;return __generator(this,(function(c){switch(c.label){case 0:t=this.el.shadowRoot.querySelector(r);t?t.parentNode.removeChild(t):"";i=e.currentTarget;s=document.createElement("select-box");return[4,this.getSelectBox(n).getSelection()];case 1:u=c.sent();if(u.includes("#power#")){s.id=""+r.substring(1);s.selectOpts=o;s.selectId=a;i.after(s)}return[2]}}))}))};this.appendRoleModifier=function(e,r){return __awaiter(t,void 0,void 0,(function(){var t,n,o,a;var i=this;return __generator(this,(function(s){switch(s.label){case 0:t=e.currentTarget;return[4,this.getSelectBox(r).getSelection()];case 1:n=s.sent();o=n.match(/(?! )(?<=#).*?(?=#)(?<! )/g);if(r==="role"){a=this.el.shadowRoot.querySelectorAll("#job, #officer, #route, #stowaway-power, #ward, #ward-power, #durance, #agent-power, #task");Array.from(a).forEach((function(e){if(e&&e.id!==r){e.parentNode.removeChild(e)}}))}if(o){o.reverse().forEach((function(e){var r=document.createElement("select-box");r.id=g[e];r.selectOpts=e.includes("power")?i.power:i[e];r.selectId=w[e];r.oninput=function(r){return i.appendRoleModifier(r,e)};t.after(r)}))}return[2]}}))}))}}e.prototype.render=function(){var e=this;return t("div",{class:"app-characters"},t("p",null,"Welcome to Characters."),t("p",null,"Options"),t("label",{htmlFor:"generate"},"# to Generate: "),t("input",{id:"generate",type:"number",value:this.numberToGenerate,onInput:function(r){return e.numberToGenerate=+r.target.value}}),t("select-box",{id:"alignment",selectOpts:o,selectId:"Alignment: "}),t("select-box",{id:"race",onInput:function(r){return e.appendRacialModifiers(r)},selectOpts:a,selectId:"Race: "}),t("select-box",{id:"exotic",selectOpts:__spreadArrays(l,f),selectId:"Exotic Races: "}),t("select-box",{id:"char-class",selectOpts:i,selectId:"Class: "}),t("select-box",{id:"background",onInput:function(r){return e.appendSoldierModifier(r,"#soldier-background-type","background",e.power,"Soldier Background Power: ")},selectOpts:x,selectId:"Background: "}),t("select-box",{id:"role",onInput:function(r){return e.appendRoleModifier(r,"role")},selectOpts:T,selectId:"Role: "}),t("button",{onClick:function(){return e.addChar(e.numberToGenerate)}},"Add Character"),this.charArray.map((function(e){return t("p",null,e)})))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());C.style=O}}}));