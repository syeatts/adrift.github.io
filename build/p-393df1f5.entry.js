import{r as e,h as t,g as a}from"./p-903d2bca.js";const r=["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil"],o=["human","elf","gnome","dwarf","halfling","half-elf","half-orc","tiefling","dragonborn"],s=["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"],i={elfType:["high","wood","dark"],gnomeType:["rock","forest","deep"],dwarfType:["mountain","gray (duergar)","hill"],halflingType:["stout","lightfoot"],dragonbornType:["red","blue","green","white","black","gold","silver","brass","bronze","copper"]},n=e=>{const t=Math.ceil(0),a=Math.floor(e);return Math.floor(Math.random()*(a-t+1))+t},h=["firbolg","genasi","goliath"],l=["protector aasimar","scourge aasimar","fallen aasimar"],c=["air","fire","earth","water"],d=e=>{if("random"===e){const e=n(h.length);return e===h.length?p():"genasi"===h[e]?`${c[n(c.length-1)]} ${h[e]}`:h[e]}return"genasi"===e?`${c[n(c.length-1)]} ${e}`:e},p=()=>l[n(l.length-1)],u={Soldier:"soldier-background-type","ward-power":"ward-power",ward:"ward",route:"route","stowaway-power":"stowaway-power",durance:"durance",task:"task",officer:"officer",job:"job","agent-power":"agent-power"},w={job:"Ship's Crew: ",officer:"Officer Jobs: ",route:"Passenger Route: ","stowaway-power":"Stowaway Power: ",ward:"Ward: ","ward-power":"Ward Power: ",durance:"Prisoner durance: ","agent-power":"Agent Power: ",task:"Agent Task: "},g=["the first mate","the bosun","the navigator (quartermaster)","the ship’s doctor (surgeon)","the cook"],f=["returning home","embarking on a pilgrimage","touring the world for pleasure","on the way to meet someone","leaving to start a new life","exiled from their homeland"],b=[()=>"They had signed on as an average sailor, perhaps to learn the trade",()=>"They were #officer#",()=>"They were there to protect the ship in some capacity - as a marine, perhaps",()=>"Actually, they were the captain of this vessel"],m=["a kingdom or nation","a church/cult","a dangerous spirit","an aristocratic family","a ruthless syndicate","an otherworldly presence"],y=[()=>"an Acolyte of a powerful deity",()=>"a Charlatan who preyed upon the confidence of the gullible",()=>"a hardened Criminal",()=>"a popular Entertainer",()=>"attached to the court of a royal house (Courtier)",()=>"a watchman in a large city",()=>"a finder of… ‘lost’ persons (Bounty Hunter)",()=>"an agent of a political faction",()=>"on a long journey, far from their native land (Far Traveller)",()=>"an artisan (or merchant) and member in good standing of a guild",()=>"the hero of the people in a small, rural village",()=>"a seeker after wisdom, who lived apart from others (Hermit)",()=>"the Inheritor of a mysterious object of power",()=>"a Mercenary - a veteran of several campaigns",()=>"a member of the nobility",()=>"a knight who belonged to a brotherhood",()=>"a wanderer who shunned civilization (Outlander)",()=>"a scholar of esoteric subjects (Sage)",()=>"a Sailor - or a pirate, depending on how one defines one’s terms",()=>"a professional Soldier, in the army of #power#",()=>"a street-dwelling Urchin, who struggled to survive urban life"],x=["a spoiled young aristocrat","a religious figure","a wealthy merchant","a scholar weighed down with terrible knowledge","someone with a mysterious object of power","someone wrongfully accused of a crime"],k=["wrongfully convicted of another's crime","having violated a serious taboo of their home culture","put in chains for outstanding debts","restrained for the safety of others","unrepentant of their crimes","sold into bondage","full of regrets for a crime of passion","whose beliefs angered the rulers of a kingdom or nation"],v=["steal a mysterious object of power","assassinate someone on board","sabotage the ship","rescue a prisoner on board","conduct surveillance on the ship and crew","take control of the ship for their masters"],$=[()=>"a passenger, #route#",()=>"a member of the crew. #job#",()=>"a stowaway, fleeing the agents of #stowaway-power#",()=>"someone's protector, defending #ward# against the agents of #ward-power#",()=>"a prisoner, #durance#",()=>"an agent of #agent-power# on a mission to #task#."],T=class{constructor(t){e(this,t),this.charArray=[],this.comboRaces=["elf","gnome","dwarf","halfling","dragonborn"],this.power=m,this.job=b,this.officer=g,this.route=f,this.ward=x,this.durance=k,this.task=v,this.numberToGenerate=1,this.buildCharacter=async()=>`This person is a\n    ${await this.buildAlignments()}\n    ${await this.buildRace()}\n    ${await this.buildClass()}.\n    In their previous life, they were ${await this.buildBackground()}.\n    They came to the ship as ${await this.buildRole()}`,this.buildRace=async()=>{const e=await this.getSelectBox("exotic").getSelection();return"random"!==e?d(e):this.getSelectBox("race").getSelection().then(async t=>{if("random"===t){const t=n(o.length);return t===o.length?d(e):this.getComboRace(o[t])}return this.getComboRace(t)})},this.getComboRace=async e=>{const t=i[e+"Type"];return this.getSelectBox(e+"-type")&&this.comboRaces.includes(e)?`${await this.randomOrFixed(this.getSelectBox(e+"-type").getSelection(),t)} ${e}`:this.comboRaces.includes(e)?`${t[n(t.length-1)]} ${e}`:e},this.addChar=async e=>{e>0&&(this.charArray=[await this.buildCharacter(),...this.charArray],this.addChar(e-1))},this.buildRole=()=>this.randomOrFixedFunction(this.getSelectBox("role").getSelection(),$),this.buildOfficer=()=>this.randomOrFixed(this.getSelectBox("officer").getSelection(),g),this.buildAlignments=()=>this.randomOrFixed(this.getSelectBox("alignment").getSelection(),r),this.buildClass=()=>this.randomOrFixed(this.getSelectBox("char-class").getSelection(),s),this.buildBackground=()=>this.randomOrFixedFunction(this.getSelectBox("background").getSelection(),y),this.getSelectBox=e=>this.el.shadowRoot.getElementById(e),this.randomOrFixed=(e,t)=>e.then(e=>"random"===e?t[n(t.length-1)]:e),this.randomOrFixedFunction=(e,t)=>e.then(async e=>"random"===e?this.completeTrait(t[n(t.length-1)]()):await this.completeTrait(e)),this.completeTrait=async e=>{const t=e.match(/(?! )(?<=#).*?(?=#)(?<! )/g),a=Object.keys(u).filter(t=>e.includes(t)).reverse(),r=await Promise.all(a.map(e=>{var t;return u[e]?(null===(t=this.getSelectBox(u[e]))||void 0===t?void 0:t.getSelection())||"random":void 0})),o=t?t.reduce((e,t,a)=>e.replace(`#${t}#`,""+r[a]=="random"?""+this.getStringOrFunction(t):r[a]),e):e;return o.match(/(?! )(?<=#).*?(?=#)(?<! )/g)?await this.completeTrait(o):o},this.getStringOrFunction=e=>{const t="agent-power"===e||"stowaway-power"===e||"ward-power"===e?"power":e,a=this[t][n(this[t].length-1)];return"string"!=typeof a?a():a},this.appendRacialModifiers=async e=>{const t=this.el.shadowRoot.querySelector("#elf-type, #gnome-type, #dwarf-type, #halfling-type, #dragonborn-type");t&&t.parentNode.removeChild(t);const a=e.currentTarget,r=document.createElement("select-box"),o=await this.getSelectBox("race").getSelection();var s;this.comboRaces.includes(o)&&("random"!==o&&(r.id=o+"-type",r.selectOpts=i[o+"Type"],r.selectId=`${s=o,`${s.charAt(0).toUpperCase()}${s.slice(1)}`} ${"dragonborn"===o?"Hue: ":"Sub-race: "}`),a.after(r))},this.appendSoldierModifier=async(e,t,a,r,o)=>{const s=this.el.shadowRoot.querySelector(t);s&&s.parentNode.removeChild(s);const i=e.currentTarget,n=document.createElement("select-box");(await this.getSelectBox(a).getSelection()).includes("#power#")&&(n.id=""+t.substring(1),n.selectOpts=r,n.selectId=o,i.after(n))},this.appendRoleModifier=async(e,t)=>{const a=e.currentTarget,r=(await this.getSelectBox(t).getSelection()).match(/(?! )(?<=#).*?(?=#)(?<! )/g);if("role"===t){const e=this.el.shadowRoot.querySelectorAll("#job, #officer, #route, #stowaway-power, #ward, #ward-power, #durance, #agent-power, #task");Array.from(e).forEach(e=>{e&&e.id!==t&&e.parentNode.removeChild(e)})}r&&r.reverse().forEach(e=>{const t=document.createElement("select-box");t.id=u[e],t.selectOpts=e.includes("power")?this.power:this[e],t.selectId=w[e],t.oninput=t=>this.appendRoleModifier(t,e),a.after(t)})}}render(){return t("div",{class:"app-characters"},t("p",null,"Welcome to Characters."),t("p",null,"Options"),t("label",{htmlFor:"generate"},"# to Generate: "),t("input",{id:"generate",type:"number",value:this.numberToGenerate,onInput:e=>this.numberToGenerate=+e.target.value}),t("select-box",{id:"alignment",selectOpts:r,selectId:"Alignment: "}),t("select-box",{id:"race",onInput:e=>this.appendRacialModifiers(e),selectOpts:o,selectId:"Race: "}),t("select-box",{id:"exotic",selectOpts:[...h,...l],selectId:"Exotic Races: "}),t("select-box",{id:"char-class",selectOpts:s,selectId:"Class: "}),t("select-box",{id:"background",onInput:e=>this.appendSoldierModifier(e,"#soldier-background-type","background",this.power,"Soldier Background Power: "),selectOpts:y,selectId:"Background: "}),t("select-box",{id:"role",onInput:e=>this.appendRoleModifier(e,"role"),selectOpts:$,selectId:"Role: "}),t("button",{onClick:()=>this.addChar(this.numberToGenerate)},"Add Character"),this.charArray.map(e=>t("p",null,e)))}get el(){return a(this)}};T.style=".app-characters{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}";export{T as app_characters}