(function(){
  function init(){
    document.querySelectorAll('[data-target],[data-target-input]').forEach(function(el){
      var target=Number(el.getAttribute('data-target')||el.dataset.targetInput);
      if(!Number.isFinite(target)) return;
      var input=el.matches('input,textarea')?el:el.querySelector('input,textarea');
      if(!input) return;
      input.addEventListener('input',function(){
        var v=Number(input.value);
        if(Number.isFinite(v)&&v>target){
          input.value=String(target);
          try{var a=new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=');a.play().catch(function(){});}catch(e){}
          input.dispatchEvent(new Event('change',{bubbles:true}));
        }
      });
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();