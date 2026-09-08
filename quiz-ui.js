(()=>{
const boot=()=>{
 if(!document.getElementById('question')||!document.getElementById('answers')) return setTimeout(boot,120);
 if(document.getElementById('sohochor-quiz-ui')) return;
 const s=document.createElement('style');s.id='sohochor-quiz-ui';s.textContent=`body{background:radial-gradient(circle at 10% 0%,#e8f7ef 0,#f8fcfa 32%,#fff 70%)!important}.top{background:linear-gradient(135deg,#032d1e,#087a4a 62%,#0b9a5e)!important}.brand{letter-spacing:.2px}.hero{position:relative;padding:30px 12px 24px;overflow:hidden}.hero:before{content:'✦';position:absolute;font-size:130px;opacity:.06;right:3%;top:-38px;color:#d8ad38}.hero .icon{display:inline-grid;place-items:center;width:88px;height:88px;border-radius:28px;background:linear-gradient(145deg,#fff,#dcefe5);box-shadow:inset 3px 3px 7px #fff,inset -4px -5px 9px #0002,0 12px 25px #063b2730;transform:rotate(-3deg)}.hero h1{font-size:34px;letter-spacing:-.5px;text-shadow:0 2px 0 #fff}.hero p{max-width:560px;margin:8px auto}.panel{border:1px solid #cfe4d9!important;border-radius:28px!important;padding:18px!important;box-shadow:0 20px 45px #063b2715,inset 0 1px 0 #fff!important}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.pill{padding:10px 8px;text-align:center;border:1px solid #d6e9df;box-shadow:0 5px 12px #063b2710;background:linear-gradient(145deg,#fff,#edf7f2)}.filters{padding:8px 0 13px;border-bottom:1px solid #e5eee9;display:flex;gap:8px;flex-wrap:wrap}.filter{transition:.18s!important;position:relative}.filter.active{box-shadow:0 5px 12px #087a4a35;transform:translateY(-2px)}.filter.active:after{content:'✓';display:inline-grid;place-items:center;width:18px;height:18px;margin-left:6px;border-radius:50%;background:#fff;color:#087a4a;font-size:11px;font-weight:950}.filter-jamaat{background:linear-gradient(145deg,#fff7dc,#f3e4a8)!important;border-color:#d8ad38!important;color:#6b5208!important}.filter-jamaat.active{background:linear-gradient(145deg,#d8ad38,#a97d0d)!important;color:#fff!important}.filter-jamaat.active:after{color:#a97d0d}.selection-label{margin:10px 0 0;text-align:center;font-size:13px;font-weight:950;color:#075d3b}.meta{margin-top:15px;align-items:center}.progress{height:11px;box-shadow:inset 0 2px 4px #0001}.bar{box-shadow:0 0 10px #d8ad3860}.q{background:linear-gradient(145deg,#fafffc,#edf8f2);border:1px solid #d5e9de;border-radius:20px;padding:18px;box-shadow:inset 2px 2px 5px #fff,0 9px 20px #063b2710;min-height:90px}.answers{gap:11px}.answer{position:relative;display:flex!important;align-items:center;min-height:58px;padding:12px 16px 12px 62px!important;transition:transform .15s,box-shadow .15s,border-color .15s!important}.answer:before{content:'1';position:absolute;left:15px;top:50%;transform:translateY(-50%);display:grid;place-items:center;width:34px;height:34px;border-radius:50%;font-size:15px;font-weight:950;color:#087a4a;background:linear-gradient(145deg,#fff,#dcefe5);border:2px solid #b8d9c9;box-shadow:inset 2px 2px 4px #fff,0 4px 9px #063b2730}.answer:nth-child(2):before{content:'2'}.answer:nth-child(3):before{content:'3'}.answer:nth-child(4):before{content:'4'}.answer.correct:before{content:'✓'!important;background:linear-gradient(145deg,#dff7e9,#bfe8d0);color:#075d3b;border-color:#8dccaa}.answer.wrong:before{content:'×'!important;background:linear-gradient(145deg,#fff0f0,#ffdada);color:#b33;border-color:#efaaaa}.answer:hover{transform:translateY(-3px)!important;box-shadow:0 9px 18px #063b2714}.answer:hover:before{transform:translateY(-50%) scale(1.06)}.feedback{border-radius:12px;padding:8px 10px}.next,.restart{box-shadow:0 7px 0 #043f29,0 13px 22px #063b2730!important;transition:.15s!important}.next:active,.restart:active{transform:translateY(4px)}.result{padding:18px}.result .score{font-size:62px;text-shadow:0 3px 0 #d9eee3}.result:before{content:'🏆';display:block;font-size:50px}.quiz-timer{display:flex;align-items:center;justify-content:center;gap:7px;margin:10px 0 2px;font-weight:950;color:#075d3b}.quiz-timer.warn{color:#c44}.quiz-mode{display:inline-block;margin:5px auto 12px;padding:6px 11px;border-radius:999px;background:#fff7dc;border:1px solid #efd98d;color:#795d08;font-size:12px;font-weight:950}@media(max-width:520px){.stats{grid-template-columns:1fr 1fr}.stats .pill:last-child{grid-column:1/-1}.hero h1{font-size:29px}.hero .icon{width:76px;height:76px}.panel{border-radius:22px!important}.q{font-size:18px;padding:15px}.answer{min-height:54px;padding-left:58px!important}.answer:before{width:32px;height:32px;left:13px}}`;
 document.head.appendChild(s);
 const stats=document.querySelector('.stats');if(stats&&!document.querySelector('.quiz-mode')){const m=document.createElement('div');m.className='quiz-mode';m.textContent='⭐ বিশেষ কুইজ • প্রতিটি প্রশ্নে ১০ সেকেন্ড';stats.after(m)}
 const filters=document.getElementById('filters');
 if(filters){
   let label=document.querySelector('.selection-label');
   if(!label){label=document.createElement('div');label.className='selection-label';filters.after(label)}
   const buttons=[...filters.querySelectorAll('.filter')];
   const select=(btn,save=true)=>{
     buttons.forEach(x=>x.classList.toggle('active',x===btn));
     label.textContent='🎯 নির্বাচিত বিভাগ: '+(btn?.textContent?.trim()||'সব');
     if(save)try{localStorage.setItem('sohochorQuizCategory',btn?.dataset.cat||'all')}catch(e){}
   };
   buttons.forEach(btn=>{
     if(btn.dataset.sohochorSelectionBound)return;
     btn.dataset.sohochorSelectionBound='1';
     btn.addEventListener('click',()=>select(btn));
   });
   if(!filters.querySelector('.filter-jamaat')){
     const b=document.createElement('button');b.className='filter filter-jamaat';b.type='button';b.dataset.cat='জামায়াতে ইসলামী';b.textContent='🟢 জামায়াতে ইসলামী';
     b.addEventListener('click',()=>{
       select(b);
       const target=[...document.querySelectorAll('section,div,article')].find(el=>/জামায়াতে ইসলামী/.test(el.textContent||'')&&el!==filters&&el.querySelectorAll('button').length>2);
       if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
     });
     filters.appendChild(b);buttons.push(b)
   }
   let saved='all';try{saved=localStorage.getItem('sohochorQuizCategory')||'all'}catch(e){}
   const savedBtn=[...filters.querySelectorAll('.filter')].find(x=>x.dataset.cat===saved)||filters.querySelector('[data-cat="all"]');
   if(savedBtn)select(savedBtn,false);
 }
 let timerEl=document.querySelector('.quiz-timer');if(!timerEl){timerEl=document.createElement('div');timerEl.className='quiz-timer';timerEl.textContent='⏱️ সময়: ১০';document.getElementById('bar')?.parentElement?.after(timerEl)}
 let t=10,interval;const restartTimer=()=>{clearInterval(interval);t=10;timerEl.textContent='⏱️ সময়: ১০';timerEl.classList.remove('warn');interval=setInterval(()=>{t--;timerEl.textContent='⏱️ সময়: '+t;if(t<=3)timerEl.classList.add('warn');if(t<=0){clearInterval(interval);document.querySelector('.next:not(.hidden)')?.click()}},1000)};
 const obs=new MutationObserver(()=>{const q=document.getElementById('question')?.textContent?.trim();if(q)restartTimer()});obs.observe(document.getElementById('question'),{childList:true,subtree:true,characterData:true});restartTimer();
};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();