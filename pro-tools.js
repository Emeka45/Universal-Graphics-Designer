(()=>{"use strict";
const $=s=>document.querySelector(s);
function addButton(parent,label,action,title){const b=document.createElement("button");b.className="mini-btn pro-tool-btn";b.textContent=label;b.title=title||label;b.addEventListener("click",action);parent.appendChild(b);return b}
function prop(name){return document.querySelector('#properties [data-p="'+name+'"]')}
function setProp(name,value){const el=prop(name);if(!el)return false;el.value=String(value);el.dispatchEvent(new Event("change",{bubbles:true}));return true}
function applyTextPreset(p){if(!prop("fontFamily")){alert("Select a text object first.");return}setProp("fontFamily",p.font);setProp("fontSize",p.size);setProp("weight",p.weight);setProp("lineHeight",p.line);setProp("letterSpacing",p.spacing);}
function luminance(hex){const h=String(hex||"").replace("#","");if(!/^[0-9a-f]{6}$/i.test(h))return 0;const c=[0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.03928?v/12.92:((v+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function contrast(a,b){const l1=luminance(a),l2=luminance(b);return (Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05)}
function contrastTool(){const fill=prop("fill");if(!fill||fill.type!=="color"){alert("Select a text object with a text color first.");return}const bg=$("#bgColor")?.value||"#ffffff";const ratio=contrast(fill.value,bg);alert("Text contrast: "+ratio.toFixed(2)+":1\nAgainst canvas background: "+bg+"\nWCAG AA normal text: "+(ratio>=4.5?"Pass":"Needs improvement")+"\nWCAG AAA normal text: "+(ratio>=7?"Pass":"Needs improvement"));}
function init(){const bar=document.querySelector(".workspace-bar");if(!bar||document.querySelector("#proTools"))return;const wrap=document.createElement("div");wrap.id="proTools";wrap.className="pro-tools";const label=document.createElement("span");label.className="pro-tools-label";label.textContent="Precision";wrap.appendChild(label);
const canvasWrap=$("#canvasWrap");let grid=false,safe=false,rulers=false;
const gridLayer=document.createElement("div");gridLayer.className="precision-grid";gridLayer.setAttribute("aria-hidden","true");canvasWrap?.appendChild(gridLayer);
const safeLayer=document.createElement("div");safeLayer.className="safe-area";safeLayer.setAttribute("aria-hidden","true");canvasWrap?.appendChild(safeLayer);
const rulerX=document.createElement("div"),rulerY=document.createElement("div");rulerX.className="ruler ruler-x";rulerY.className="ruler ruler-y";canvasWrap?.append(rulerX,rulerY);
addButton(wrap,"Grid",()=>{grid=!grid;gridLayer.classList.toggle("show",grid)},"Toggle design grid");
addButton(wrap,"Safe",()=>{safe=!safe;safeLayer.classList.toggle("show",safe)},"Toggle safe-area guides");
addButton(wrap,"Rulers",()=>{rulers=!rulers;rulerX.classList.toggle("show",rulers);rulerY.classList.toggle("show",rulers)},"Toggle rulers");
addButton(wrap,"Center",()=>$("#centerSelected")?.click(),"Center selected object");
addButton(wrap,"Align",()=>$("#alignCenter")?.click(),"Align selected objects to center");
const type=addButton(wrap,"Type",()=>{const menu=document.querySelector("#typePresets");menu?.classList.toggle("show")},"Typography presets");type.classList.add("pro-menu-trigger");
const menu=document.createElement("div");menu.id="typePresets";menu.className="pro-menu";
[{n:"Display",font:"Georgia",size:96,weight:900,line:1.02,spacing:-2},{n:"Headline",font:"Arial",size:72,weight:750,line:1.08,spacing:-1},{n:"Clean",font:"system-ui",size:56,weight:600,line:1.2,spacing:0},{n:"Caption",font:"Verdana",size:32,weight:400,line:1.3,spacing:.5},{n:"Impact",font:"Trebuchet MS",size:78,weight:900,line:1,spacing:-1.5}].forEach(p=>{const b=document.createElement("button");b.className="mini-btn";b.textContent=p.n;b.onclick=()=>{applyTextPreset(p);menu.classList.remove("show")};menu.appendChild(b)});
const contrastBtn=addButton(wrap,"Contrast",contrastTool,"Check selected text color against canvas background");
bar.insertBefore(wrap,bar.querySelector(".status"));bar.appendChild(menu);
window.addEventListener("resize",()=>{if(grid||safe||rulers)requestAnimationFrame(()=>{})});
document.addEventListener("click",e=>{if(!wrap.contains(e.target))menu.classList.remove("show")});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
