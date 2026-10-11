(()=>{"use strict";
const $=s=>document.querySelector(s);
function addButton(parent,label,action,title){const b=document.createElement("button");b.className="mini-btn pro-tool-btn";b.textContent=label;b.title=title||label;b.addEventListener("click",action);parent.appendChild(b);return b}
function init(){const bar=document.querySelector(".workspace-bar");if(!bar||document.querySelector("#proTools"))return;const wrap=document.createElement("div");wrap.id="proTools";wrap.className="pro-tools";const label=document.createElement("span");label.className="pro-tools-label";label.textContent="Precision";wrap.appendChild(label);
const canvasWrap=$("#canvasWrap");let grid=false,safe=false,rulers=false;
const gridLayer=document.createElement("div");gridLayer.className="precision-grid";gridLayer.setAttribute("aria-hidden","true");canvasWrap?.appendChild(gridLayer);
const safeLayer=document.createElement("div");safeLayer.className="safe-area";safeLayer.setAttribute("aria-hidden","true");canvasWrap?.appendChild(safeLayer);
const rulerX=document.createElement("div"),rulerY=document.createElement("div");rulerX.className="ruler ruler-x";rulerY.className="ruler ruler-y";canvasWrap?.append(rulerX,rulerY);
addButton(wrap,"Grid",()=>{grid=!grid;gridLayer.classList.toggle("show",grid)},"Toggle design grid");
addButton(wrap,"Safe",()=>{safe=!safe;safeLayer.classList.toggle("show",safe)},"Toggle safe-area guides");
addButton(wrap,"Rulers",()=>{rulers=!rulers;rulerX.classList.toggle("show",rulers);rulerY.classList.toggle("show",rulers)},"Toggle rulers");
addButton(wrap,"Center",()=>document.querySelector("#centerSelected")?.click(),"Center selected object");
addButton(wrap,"Align",()=>document.querySelector("#alignCenter")?.click(),"Align selected objects to center");
bar.insertBefore(wrap,bar.querySelector(".status"));
window.addEventListener("resize",()=>{if(grid||safe||rulers)requestAnimationFrame(()=>{})});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
