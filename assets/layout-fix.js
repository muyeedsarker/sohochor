/* SOHOCHOR layout safety v1 */
(function(){'use strict';
if(window.__SOHOCHOR_LAYOUT_FIX_V1__)return;window.__SOHOCHOR_LAYOUT_FIX_V1__=true;
function fix(){
 const s=document.getElementById('sohochor-layout-safety')||document.createElement('style');
 s.id='sohochor-layout-safety';
 s.textContent='html,body{width:100%;max-width:100%;overflow-x:hidden!important}body{margin-left:0!important;margin-right:0!important}.top,.nav,.wrap,.footer{max-width:100%;box-sizing:border-box}.nav{width:100%;}.hero,.section{max-width:100%;box-sizing:border-box}@media(max-width:850px){.nav{padding-left:12px!important;padding-right:12px!important;gap:8px!important}.nav-actions{margin-left:auto!important;gap:6px!important;min-width:0}.nav-actions>*{flex:0 0 auto}.brand{min-width:0}.brand strong{white-space:nowrap}.wrap{width:100%;overflow:hidden}.hero{width:100%;margin-left:0!important;margin-right:0!important}.cards,.feature-row{width:100%;min-width:0}}';
 if(!s.parentNode)document.head.appendChild(s);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix,{once:true});else fix();
new MutationObserver(fix).observe(document.documentElement,{childList:true,subtree:true});
})();
