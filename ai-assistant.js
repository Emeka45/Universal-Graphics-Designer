(()=>{"use strict";
const $=s=>document.querySelector(s);
const dialog=$("#aiAssistantDialog"),results=$("#aiResults"),prompt=$("#aiPrompt"),format=$("#aiFormat"),theme=$("#aiTheme");
if(!dialog||!results)return;
const palettes={violet:["#17142e","#7c5cff","#f5f1ff","#ffca6a"],ocean:["#071e2b","#19b6a4","#e9fbff","#ffcc70"],sunset:["#35152f","#ff6b5e","#fff0dc","#ffbd59"],mono:["#111318","#e9edf2","#ffffff","#858b96"],forest:["#112a22","#5bbf83","#effcf4","#e7bd68"],gold:["#191713","#c7a45b","#fff7df","#e5c779"]};
function show(){if(typeof dialog.showModal==="function")dialog.showModal();else dialog.setAttribute("open","");}
function close(){if(typeof dialog.close==="function")dialog.close();else dialog.removeAttribute("open");}
function card(level,title,detail){const el=document.createElement("article");el.className="ai-result-card";el.dataset.level=level;const h=document.createElement("h3");h.textContent=title;const p=document.createElement("p");p.textContent=detail;el.append(h,p);return el;}
function renderTips(tips){results.replaceChildren();tips.forEach(t=>results.appendChild(card(t.level,t.title,t.detail)));}
$("#aiAssistantBtn")?.addEventListener("click",show);$("#aiClose")?.addEventListener("click",close);
dialog.addEventListener("click",e=>{if(e.target===dialog)close()});
$("#aiGenerate")?.addEventListener("click",()=>{const api=window.UGDStudio;if(!api||!api.createPromptDesign){renderTips([{level:"warn",title:"Assistant is loading",detail:"Refresh the editor and try again."}]);return}const answer=api.createPromptDesign({prompt:prompt.value,format:format.value,theme:theme.value});if(!answer.ok){renderTips([{level:"warn",title:"Tell me what to create",detail:answer.message}]);return}renderTips([{level:"good",title:"Your first draft is ready",detail:answer.message+" Canvas: "+answer.width+" × "+answer.height+"."},{level:"info",title:"Make it yours",detail:"Edit each text layer, upload your own image, and adjust spacing and colours before exporting."}]);});
$("#aiAnalyse")?.addEventListener("click",()=>{const api=window.UGDStudio;renderTips(api&&api.analyzeDesign?api.analyzeDesign():[{level:"warn",title:"Assistant is loading",detail:"Refresh and try again."}]);});
$("#aiPalette")?.addEventListener("click",()=>{const api=window.UGDStudio;const ok=api&&api.applyPalette&&api.applyPalette(palettes[theme.value]||palettes.violet);renderTips([{level:ok?"good":"warn",title:ok?"Colour mood applied":"Could not apply the palette",detail:ok?"The selected objects were recoloured; if nothing was selected, the palette was applied across editable objects. Undo is available.":"Try again after the editor has finished loading."}]);});
prompt.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="Enter")$("#aiGenerate").click()});
})();