(function(){
  const adhkar=['সুবহানাল্লাহ','আলহামদুলিল্লাহ','আল্লাহু আকবার','লা ইলাহা ইল্লাল্লাহ','আস্তাগফিরুল্লাহ','দরুদ শরীফ'];
  const targets=[33,100,300,500,1000];
  function init(){
    if(document.getElementById('sohochor-zikr-counter'))return;
    const box=document.createElement('section');box.id='sohochor-zikr-counter';box.innerHTML='<div class="sc-z-title">🤲 তসবীহ / যিকির</div><select id="sc-zikr" aria-label="যিকির নির্বাচন">'+adhkar.map(x=>'<option>'+x+'</option>').join('')+'</select><select id="sc-target" aria-label="লক্ষ্য নির্বাচন">'+targets.map(x=>'<option value="'+x+'">'+x+' বার</option>').join('')+'<option value="custom">নিজের সংখ্যা</option></select><input id="sc-custom" type="number" min="1" max="100000" placeholder="নিজের সংখ্যা" hidden><div class="sc-z-count" id="sc-count">0</div><button id="sc-add" type="button">+ ১</button><button id="sc-reset" type="button">রিসেট</button><div id="sc-status">Target: 33</div></div>';
    const anchor=document.querySelector('.hero')||document.body.firstElementChild;if(anchor&&anchor.parentNode)anchor.parentNode.insertBefore(box,anchor.nextSibling);else document.body.prepend(box);
    const zik=document.getElementById('sc-zikr'),ts=document.getElementById('sc-target'),custom=document.getElementById('sc-custom'),count=document.getElementById('sc-count'),add=document.getElementById('sc-add'),reset=document.getElementById('sc-reset'),status=document.getElementById('sc-status');let n=0;
    function target(){return ts.value==='custom'?Math.max(1,Number(custom.value)||1):Number(ts.value)}
    function completeSignal(){try{const ctx=new (window.AudioContext||window.webkitAudioContext)(),o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=880;g.gain.setValueAtTime(.18,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.45);o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.45)}catch(e){}try{if('vibrate' in navigator)navigator.vibrate([180,100,180])}catch(e){}}
    function refresh(){const t=target();status.textContent='Target: '+t+' | '+zik.value;if(n>=t){n=t;add.disabled=true;status.textContent='Target সম্পন্ন ✅';}else add.disabled=false;count.textContent=n}
    ts.onchange=function(){custom.hidden=ts.value!=='custom';n=0;refresh()};custom.oninput=function(){n=0;refresh()};zik.onchange=function(){n=0;refresh()};reset.onclick=function(){n=0;refresh()};add.onclick=function(){const t=target();if(n<t){n++;if(n===t)completeSignal();refresh()}else refresh()};refresh();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();