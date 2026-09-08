(function(){
  const adhkar=['সুবহানাল্লাহ','আলহামদুলিল্লাহ','আল্লাহু আকবার','লা ইলাহা ইল্লাল্লাহ','আস্তাগফিরুল্লাহ','দরুদ শরীফ'];
  const targets=[33,100,300,500,1000];
  function completionAlert(){
    try{if('vibrate' in navigator)navigator.vibrate([180,100,180,100,300]);}catch(e){}
    try{const AC=window.AudioContext||window.webkitAudioContext;if(AC){const c=new AC(),o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.setValueAtTime(880,c.currentTime);o.frequency.setValueAtTime(1175,c.currentTime+.12);g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.22,c.currentTime+.02);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.55);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.6);}}catch(e){}
  }
  function init(){
    if(document.getElementById('sohochor-zikr-counter'))return;
    const box=document.createElement('section');box.id='sohochor-zikr-counter';box.innerHTML='<div class="sc-z-title">🤲 তসবীহ / যিকির</div><select id="sc-zikr">'+adhkar.map(x=>'<option>'+x+'</option>').join('')+'</select><select id="sc-target">'+targets.map(x=>'<option value="'+x+'">'+x+' বার</option>').join('')+'<option value="custom">নিজের সংখ্যা</option></select><input id="sc-custom" type="number" min="1" max="100000" placeholder="নিজের সংখ্যা" hidden><div class="sc-z-count" id="sc-count">0</div><button id="sc-add" type="button">+ ১</button><button id="sc-reset" type="button">রিসেট</button><div id="sc-status">Target: 33</div></section>';
    const anchor=document.querySelector('.hero')||document.body.firstElementChild;anchor.parentNode.insertBefore(box,anchor.nextSibling);
    const zik=document.getElementById('sc-zikr'),ts=document.getElementById('sc-target'),custom=document.getElementById('sc-custom'),count=document.getElementById('sc-count'),add=document.getElementById('sc-add'),reset=document.getElementById('sc-reset'),status=document.getElementById('sc-status');let n=0;
    function target(){return ts.value==='custom'?Math.min(100000,Math.max(1,Number(custom.value)||1)):Number(ts.value)}
    function refresh(){status.textContent='Target: '+target()+' | '+zik.value;if(n>=target()){n=target();add.disabled=true;status.textContent='Target সম্পন্ন ✅';}else add.disabled=false;count.textContent=n}
    ts.onchange=function(){custom.hidden=ts.value!=='custom';n=0;refresh()};custom.oninput=function(){n=0;refresh()};zik.onchange=function(){n=0;refresh()};reset.onclick=function(){n=0;refresh()};add.onclick=function(){const t=target();if(n<t){n++;if(n===t){completionAlert();}refresh()}else{n=t;refresh()}};refresh();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();