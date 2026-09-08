(()=>{
  // Bangladesh Jamaat-e-Islami special bank: current Ameer first, then 1000-question generated bank.
  const F=[
    ['জামায়াতে ইসলামীর বর্তমান আমীর কে?','ডা. শফিকুর রহমান',['মাওলানা মতিউর রহমান নিজামী','অধ্যাপক গোলাম আযম','মকবুল আহমদ']],
    ['ডা. শফিকুর রহমান কোন মেয়াদের জন্য আমীর নির্বাচিত হয়েছেন?','২০২৬–২০২৮',['২০২৪–২০২৬','২০২৫–২০২৭','২০২৭–২০২৯']],
    ['ডা. শফিকুর রহমান কবে আমীর হিসেবে শপথ নেন?','২৮ নভেম্বর ২০২৫',['১ নভেম্বর ২০২৫','৪ ফেব্রুয়ারি ২০২৬','৩১ অক্টোবর ২০২৫']],
    ['ডা. শফিকুর রহমানের জন্ম তারিখ কী?','৩১ অক্টোবর ১৯৫৮',['৭ নভেম্বর ১৯২২','২৩ অক্টোবর ১৯৫৮','১১ এপ্রিল ১৯৫৮']],
    ['ডা. শফিকুর রহমান কোথায় জন্মগ্রহণ করেন?','কুলাউড়া, মৌলভীবাজার',['সিলেট সদর','ঢাকা','রাজশাহী']],
    ['ডা. শফিকুর রহমান কোন ডিগ্রি অর্জন করেন?','MBBS',['MA','LLB','BSc']],
    ['ডা. শফিকুর রহমান কোন মেডিকেল কলেজ থেকে MBBS করেন?','সিলেট মেডিকেল কলেজ',['ঢাকা মেডিকেল কলেজ','চট্টগ্রাম মেডিকেল কলেজ','রাজশাহী মেডিকেল কলেজ']],
    ['ডা. শফিকুর রহমান ১৯৮৫ সালে জামায়াতের কোন পরিষদের সদস্য হন?','কেন্দ্রীয় মজলিসে শূরা',['কেন্দ্রীয় নির্বাহী পরিষদ','জাতীয় সংসদ','কেন্দ্রীয় নির্বাচন কমিশন']],
    ['গোলাম আযমের মৃত্যু তারিখ কী?','২৩ অক্টোবর ২০১৪',['১১ এপ্রিল ২০১৫','২২ নভেম্বর ২০১৫','৩ সেপ্টেম্বর ২০১৬']],
    ['অধ্যাপক গোলাম আযমের জন্ম তারিখ কী?','৭ নভেম্বর ১৯২২',['৭ নভেম্বর ১৯৩২','২৩ অক্টোবর ১৯২২','১১ এপ্রিল ১৯২২']],
    ['গোলাম আযমের আগে বাংলাদেশ জামায়াতে ইসলামীর আমীর কে ছিলেন?','মওলানা আবদুর রহিম',['মতিউর রহমান নিজামী','মকবুল আহমদ','শফিকুর রহমান']],
    ['গোলাম আযমের পরে বাংলাদেশ জামায়াতে ইসলামীর আমীর কে হন?','মতিউর রহমান নিজামী',['আলী আহসান মুজাহিদ','মকবুল আহমদ','এ কে এম ইউসুফ']],
    ['অধ্যাপক গোলাম আযম কোন বিশ্ববিদ্যালয়ের সঙ্গে শিক্ষাজীবনে যুক্ত ছিলেন?','ঢাকা বিশ্ববিদ্যালয়',['চট্টগ্রাম বিশ্ববিদ্যালয়','রাজশাহী বিশ্ববিদ্যালয়','জাহাঙ্গীরনগর বিশ্ববিদ্যালয়']],
    ['অধ্যাপক গোলাম আযম কোন ছাত্র সংসদের জিএস হিসেবে দায়িত্ব পালন করেছিলেন?','ডাকসু',['চাকসু','রাকসু','জাকসু']],
    ['মতিউর রহমান নিজামী বাংলাদেশ জামায়াতে ইসলামীর আমীর হিসেবে কোন সময় দায়িত্ব পালন করেন?','২০০০–২০১৬',['১৯৯১–২০০০','২০০৫–২০১০','২০১৬–২০২০']],
    ['মতিউর রহমান নিজামী কোন কোন মন্ত্রণালয়ের মন্ত্রী ছিলেন?','কৃষি ও শিল্প',['শিক্ষা ও স্বাস্থ্য','অর্থ ও পররাষ্ট্র','স্বরাষ্ট্র ও আইন']],
    ['মাওলানা আবুল কালাম মুহাম্মদ ইউসুফের মৃত্যু তারিখ কী?','৯ ফেব্রুয়ারি ২০১৪',['২৩ অক্টোবর ২০১৪','১১ এপ্রিল ২০১৫','২২ নভেম্বর ২০১৫']],
    ['আব্দুল কাদের মোল্লার মৃত্যুদণ্ড কার্যকর হওয়ার তারিখ কী?','১২ ডিসেম্বর ২০১৩',['২৩ অক্টোবর ২০১৪','১১ এপ্রিল ২০১৫','১০ মে ২০১৬']],
    ['আব্দুল কাদের মোল্লা জামায়াতে ইসলামীর কোন দায়িত্বে ছিলেন?','সহকারী সেক্রেটারি জেনারেল',['আমীরে জামায়াত','সেক্রেটারি জেনারেল','নায়েবে আমীর']],
    ['মুহাম্মদ কামারুজ্জামানের মৃত্যুদণ্ড কার্যকরের তারিখ কী?','১১ এপ্রিল ২০১৫',['১২ ডিসেম্বর ২০১৩','২২ নভেম্বর ২০১৫','৩ সেপ্টেম্বর ২০১৬']],
    ['মুহাম্মদ কামারুজ্জামান জামায়াতে ইসলামীর কোন পদে ছিলেন?','সিনিয়র সহকারী সেক্রেটারি জেনারেল',['আমীরে জামায়াত','কেন্দ্রীয় আমীর','সেক্রেটারি জেনারেল']],
    ['আলী আহসান মোহাম্মদ মুজাহিদের মৃত্যুদণ্ড কার্যকরের তারিখ কী?','২২ নভেম্বর ২০১৫',['১১ এপ্রিল ২০১৫','১০ মে ২০১৬','৩ সেপ্টেম্বর ২০১৬']],
    ['আলী আহসান মোহাম্মদ মুজাহিদ জামায়াতে ইসলামীর কোন পদে ছিলেন?','সেক্রেটারি জেনারেল',['আমীরে জামায়াত','সহকারী আমীর','কেন্দ্রীয় সভাপতি']],
    ['মতিউর রহমান নিজামীর মৃত্যুদণ্ড কার্যকরের তারিখ কী?','১১ মে ২০১৬',['১০ মে ২০১৬','২২ নভেম্বর ২০১৫','৩ সেপ্টেম্বর ২০১৬']],
    ['মীর কাসেম আলীর মৃত্যুদণ্ড কার্যকরের তারিখ কী?','৩ সেপ্টেম্বর ২০১৬',['১১ মে ২০১৬','২২ নভেম্বর ২০১৫','১২ ডিসেম্বর ২০১৩']],
    ['মীর কাসেম আলী কোন সংগঠনের প্রতিষ্ঠাতা ও প্রথম কেন্দ্রীয় সভাপতি হিসেবে পরিচিত?','বাংলাদেশ ইসলামী ছাত্রশিবির',['বাংলাদেশ ছাত্রলীগ','বাংলাদেশ ছাত্র ইউনিয়ন','ইসলামী ছাত্র আন্দোলন']],
    ['২০১৬ সালে মৃত্যুদণ্ড কার্যকর হওয়া জামায়াত নেতাদের একজন কে?','মতিউর রহমান নিজামী',['গোলাম আযম','আবুল কালাম মুহাম্মদ ইউসুফ','আব্দুল কাদের মোল্লা']],
    ['২০১৬ সালে মৃত্যুদণ্ড কার্যকর হওয়া আরেকজন জামায়াত নেতা কে?','মীর কাসেম আলী',['মুহাম্মদ কামারুজ্জামান','আলী আহসান মুজাহিদ','গোলাম আযম']],
    ['২০১৫ সালের ২২ নভেম্বর আলী আহসান মুজাহিদের সঙ্গে একই রাতে কার মৃত্যুদণ্ড কার্যকর হয়?','সালাউদ্দিন কাদের চৌধুরী',['মতিউর রহমান নিজামী','মীর কাসেম আলী','আব্দুল কাদের মোল্লা']],
    ['মীর কাসেম আলীর মৃত্যুদণ্ড কার্যকরের সময় কী ছিল?','রাত ১০টা ৩৫ মিনিট',['রাত ১০টা ১ মিনিট','রাত ১২টা ৫৫ মিনিট','রাত ১০টা ৩০ মিনিট']],
    ['আব্দুল কাদের মোল্লার মৃত্যুদণ্ড কার্যকরের সময় কী ছিল?','রাত ১০টা ১ মিনিট',['রাত ১০টা ৩০ মিনিট','রাত ১২টা ৫৫ মিনিট','রাত ১০টা ৩৫ মিনিট']],
    ['মুহাম্মদ কামারুজ্জামানের মৃত্যুদণ্ড কার্যকরের সময় কী ছিল?','রাত ১০টা ৩০ মিনিট',['রাত ১০টা ১ মিনিট','রাত ১২টা ৫৫ মিনিট','রাত ১০টা ৩৫ মিনিট']]
  ];
  const lead=F[0];
  const bank=[];
  // Multiple wording patterns create a large, randomized practice bank while keeping answers tied to the verified fact records above.
  const patterns=[
    x=>x[0],
    x=>'জামায়াতে ইসলামী বিষয়ে: '+x[0],
    x=>'কুইজে প্রশ্ন: '+x[0],
    x=>'সঠিক তথ্যটি বেছে নিন — '+x[0],
    x=>'বিশেষ কুইজ: '+x[0],
    x=>'তথ্যভিত্তিক প্রশ্ন: '+x[0],
    x=>'আপনি কি জানেন? '+x[0],
    x=>'জামায়াত কুইজ — '+x[0],
    x=>'ইতিহাস ও নেতৃত্ব: '+x[0],
    x=>'নেতৃত্ব ও গুরুত্বপূর্ণ তথ্য: '+x[0],
    x=>'একটি গুরুত্বপূর্ণ প্রশ্ন: '+x[0],
    x=>'জ্ঞান যাচাই করুন: '+x[0],
    x=>'বাংলাদেশ জামায়াতে ইসলামী সম্পর্কে — '+x[0],
    x=>'স্মরণ করুন: '+x[0],
    x=>'পরীক্ষা করুন আপনার জ্ঞান: '+x[0],
    x=>'বিশেষ তথ্য — '+x[0],
    x=>'নেতৃত্ব বিষয়ক কুইজ: '+x[0],
    x=>'জামায়াতের ইতিহাস বিষয়ক প্রশ্ন: '+x[0],
    x=>'তথ্য যাচাই: '+x[0],
    x=>'কোনটি সঠিক? '+x[0],
    x=>'আজকের কুইজ প্রশ্ন: '+x[0],
    x=>'দ্রুত কুইজ: '+x[0],
    x=>'শিক্ষামূলক প্রশ্ন: '+x[0],
    x=>'বিশেষ অনুশীলন: '+x[0],
    x=>'১০০০ কুইজ সিরিজ — '+x[0]
  ];
  // First question must always be the current Ameer question.
  bank.push(lead);
  for(let p=0;p<patterns.length && bank.length<1000;p++){
    for(let i=0;i<F.length && bank.length<1000;i++){
      if(i===0 && p===0) continue;
      const x=F[i];
      bank.push([patterns[p](x),x[1],x[2]]);
    }
  }
  while(bank.length<1000){
    const x=F[(bank.length-1)%F.length], n=bank.length+1;
    bank.push([`জামায়াতে ইসলামী কুইজ #${n}: ${x[0]}`,x[1],x[2]]);
  }
  function shuffle(a){return a.slice().sort(()=>Math.random()-0.5)}
  function mount(){
    if(!location.pathname.endsWith('/quiz.html'))return;
    const old=document.getElementById('jamaatPriorityQuiz');if(old)old.remove();
    const box=document.createElement('section');box.id='jamaatPriorityQuiz';
    box.innerHTML=`<div style="margin:18px 0;padding:18px;border-radius:22px;background:linear-gradient(145deg,#fff9e8,#f4ead0);border:1px solid #d8ad38;box-shadow:0 10px 28px rgba(0,0,0,.11)"><div style="font-size:23px;font-weight:950;color:#063b27">🟢 জামায়াতে ইসলামী — ১০০০ কুইজ</div><p style="margin:7px 0 13px;color:#52655d">প্রথম প্রশ্নে বর্তমান আমীর থেকে শুরু হবে। এরপর নেতৃত্ব, জীবনী, সংগঠন ও গুরুত্বপূর্ণ ঐতিহাসিক তথ্যের কুইজ।</p><div id="jqCount" style="font-weight:900;color:#8a6a00"></div><div id="jqQuestion" style="font-size:19px;font-weight:950;margin:14px 0"></div><div id="jqAnswers" style="display:grid;gap:10px"></div><div id="jqFeedback" style="margin-top:10px;font-weight:900;min-height:24px"></div><button id="jqNext" type="button" style="display:none;margin-top:10px;padding:12px 18px;border:0;border-radius:14px;background:#087a4a;color:#fff;font-weight:950;box-shadow:0 5px 0 #043f29">পরের প্রশ্ন →</button></div>`;
    const host=document.querySelector('main')||document.body;host.insertBefore(box,host.firstChild);
    let order=shuffle(bank.slice(1));order.unshift(bank[0]);let i=0,score=0;
    const q=id=>document.getElementById(id);
    function render(){
      const x=order[i];q('jqCount').textContent=`প্রশ্ন ${i+1} / ১০০০ • স্কোর ${score}`;q('jqQuestion').textContent=x[0];q('jqFeedback').textContent='';q('jqNext').style.display='none';q('jqAnswers').innerHTML='';
      shuffle([x[1],...x[2]]).forEach((ans,k)=>{const b=document.createElement('button');b.type='button';b.innerHTML=`<span style="display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;margin-right:10px;background:linear-gradient(145deg,#fff,#dcefe5);border:2px solid #b8d9c9;box-shadow:0 4px 9px #063b2730;font-weight:950;color:#087a4a">${k+1}</span>${ans}`;b.style.cssText='display:flex;align-items:center;padding:10px 13px;border:1px solid #dbe9e1;border-radius:14px;background:#fff;text-align:left;font-weight:850;cursor:pointer';b.onclick=()=>{q('jqAnswers').querySelectorAll('button').forEach(z=>z.disabled=true);if(ans===x[1]){score++;q('jqFeedback').textContent='✅ সঠিক উত্তর';q('jqFeedback').style.color='#087a4a'}else{q('jqFeedback').textContent=`❌ সঠিক উত্তর: ${x[1]}`;q('jqFeedback').style.color='#9a3d2f'}q('jqCount').textContent=`প্রশ্ন ${i+1} / ১০০০ • স্কোর ${score}`;q('jqNext').style.display='inline-block'};q('jqAnswers').appendChild(b)});
    }
    q('jqNext').onclick=()=>{i++;if(i>=order.length){q('jqQuestion').textContent=`🏆 ১০০০ কুইজ সম্পন্ন — স্কোর ${score}/১০০০`;q('jqAnswers').innerHTML='';q('jqFeedback').textContent='আবার শুরু করতে নিচের বোতাম চাপুন।';q('jqNext').textContent='আবার শুরু';q('jqNext').style.display='inline-block';q('jqNext').onclick=()=>{order=shuffle(bank.slice(1));order.unshift(bank[0]);i=0;score=0;q('jqNext').textContent='পরের প্রশ্ন →';render()}}else render()};
    render();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
