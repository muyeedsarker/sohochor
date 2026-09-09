/* SOHOCHOR locale-loader v10 patch helper */
(function(){
  function load3(){
    if(window.SOHOCHOR_PAGE_TRANSLATIONS_3) document.dispatchEvent(new Event('sohochor:i18n-pages3-ready'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',load3,{once:true}); else load3();
})();
