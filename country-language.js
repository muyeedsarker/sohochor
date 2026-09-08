/* SOHOCHOR Country + Language — functional selector */
(function(){
  const countries=[['ALL','🌍 All Countries'],['BD','🇧🇩 Bangladesh'],['SA','🇸🇦 Saudi Arabia'],['AE','🇦🇪 UAE'],['QA','🇶🇦 Qatar'],['KW','🇰🇼 Kuwait'],['OM','🇴🇲 Oman'],['MY','🇲🇾 Malaysia'],['SG','🇸🇬 Singapore'],['GB','🇬🇧 United Kingdom'],['US','🇺🇸 United States'],['CA','🇨🇦 Canada'],['AU','🇦🇺 Australia'],['IN','🇮🇳 India'],['PK','🇵🇰 Pakistan']];
  const langs={bn:[['ALL','🌐 সব ভাষা'],['bn','বাংলা'],['en','English'],['ar','العربية'],['hi','हिन्दी'],['ur','اردو'],['ms','Bahasa Melayu']],en:[['ALL','🌐 All Languages'],['bn','Bengali'],['en','English'],['ar','Arabic'],['hi','Hindi'],['ur','Urdu'],['ms','Malay']],ar:[['ALL','🌐 كل اللغات'],['bn','البنغالية'],['en','الإنجليزية'],['ar','العربية'],['hi','الهندية'],['ur','الأردية'],['ms','الملايوية']]};
  const countryName={ALL:'সব দেশ',BD:'বাংলাদেশ',SA:'সৌদি আরব',AE:'সংযুক্ত আরব আমিরাত',QA:'কাতার',KW:'কুয়েত',OM:'ওমান',MY:'মালয়েশিয়া',SG:'সিঙ্গাপুর',GB:'যুক্তরাজ্য',US:'যুক্তরাষ্ট্র',CA:'কানাডা',AU:'অস্ট্রেলিয়া',IN:'ভারত',PK:'পাকিস্তান'};
  const translations={
    en:{'হোম':'Home','সেবা সমূহ':'Services','কুরআন ও হাদিস':'Quran & Hadith','নামাজের সময়':'Prayer Times','কিবলা ফাইন্ডার':'Qibla Finder','আরো':'More','দ্বীন, জ্ঞান, সেবা ও সমাজ':'Faith, Knowledge, Service & Community','সেবা':'Services','লগইন':'Login','নিবন্ধন':'Sign Up','সহচর':'Sohochor','নিরাপদ':'Safe','সম্মানজনক':'Respectful','Smart Search':'Smart Search'},
    ar:{'হোম':'الرئيسية','সেবা সমূহ':'الخدمات','কুরআন ও হাদিস':'القرآن والحديث','নামাজের সময়':'أوقات الصلاة','কিবলা ফাইন্ডার':'محدد القبلة','আরো':'المزيد','দ্বীন, জ্ঞান, সেবা ও সমাজ':'الدين والمعرفة والخدمة والمجتمع','লগইন':'تسجيل الدخول','নিবন্ধন':'إنشاء حساب','সহচর':'سَهَচর'},
    hi:{'হোম':'होम','সেবা সমূহ':'सेवाएँ','কুরআন ও হাদিস':'कुरआन और हदीस','নামাজের সময়':'नमाज़ का समय','কিবলা ফাইন্ডার':'क़िबला फ़ाइंडर','আরো':'और','লগইন':'लॉगिन','নিবন্ধন':'साइन अप'},
    ur:{'হোম':'ہوم','সেবা সমূহ':'خدمات','কুরআন ও হাদিস':'قرآن و حدیث','নামাজের সময়':'نماز کے اوقات','কিবলা ফাইন্ডার':'قبلہ فائنڈر','আরো':'مزید','লগইন':'لاگ اِن','নিবন্ধন':'سائن اپ'},
    ms:{'হোম':'Laman Utama','সেবা সমূহ':'Perkhidmatan','কুরআন ও হাদিস':'Al-Quran & Hadis','নামাজের সময়':'Waktu Solat','কিবলা ফাইন্ডার':'Pencari Kiblat','আরো':'Lagi','লগইন':'Log Masuk','নিবন্ধন':'Daftar'}
  };
  function style(){if(document.getElementById('sohochor-country-language-style'))return;const st=document.createElement('style');st.id='sohochor-country-language-style';st.textContent=`#sohochor-country-language{width:100%;background:#fff;border-bottom:1px solid #dbe9e1;box-shadow:0 4px 14px rgba(0,0,0,.08);position:relative;z-index:9999;padding:10px 16px}.sohochor-filter-inner{max-width:1180px;margin:auto;display:flex;align-items:center;justify-content:center;gap:10px}.sohochor-select{height:42px;min-width:190px;padding:0 12px;border:2px solid #c9ddd3;border-radius:11px;background:#f7fbf9;color:#12392b;font-weight:800;font-size:14px;outline:none;cursor:pointer;pointer-events:auto;appearance:auto}.sohochor-select:focus,.sohochor-select:hover{border-color:#087a4a;box-shadow:0 0 0 3px rgba(8,122,74,.12)}#sohochor-selection-status{max-width:1180px;margin:7px auto 0;text-align:center;font-size:12px;font-weight:800;color:#087a4a}@media(max-width:520px){#sohochor-country-language{padding:8px 8px}.sohochor-filter-inner{gap:6px}.sohochor-select{min-width:0;width:50%;height:42px;font-size:12px}}`;document.head.appendChild(st)}
  function makeSelect(id,aria,items){const s=document.createElement('select');s.id=id;s.className='sohochor-select';s.setAttribute('aria-label',aria);items.forEach(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;s.appendChild(o)});return s}
  function translate(lang){
    if(lang==='ALL')return;
    const map=translations[lang];if(!map)return;
    document.querySelectorAll('body *:not(#sohochor-country-language):not(#sohochor-country-language *)').forEach(el=>{
      if(el.children.length===0){const raw=el.textContent.trim();if(map[raw])el.textContent=map[raw];}
    });
    document.documentElement.dir=lang==='ar'||lang==='ur'?'rtl':'ltr';
  }
  function apply(){
    const country=localStorage.getItem('sohochorCountry')||'ALL';
    const language=localStorage.getItem('sohochorLanguage')||'ALL';
    document.documentElement.dataset.country=country;document.documentElement.dataset.language=language;
    document.body.dataset.country=country;document.body.dataset.language=language;
    document.querySelectorAll('[data-country]').forEach(el=>el.hidden=!(el.dataset.country==='ALL'||el.dataset.country===country));
    document.querySelectorAll('[data-language]').forEach(el=>el.hidden=!(el.dataset.language==='ALL'||el.dataset.language===language));
    const status=document.getElementById('sohochor-selection-status');
    if(status)status.textContent=`📍 দেশ: ${countryName[country]||country}  •  🌐 ভাষা: ${language==='ALL'?'সব ভাষা':language}`;
    if(language!=='ALL')translate(language);
    document.dispatchEvent(new CustomEvent('sohochor:filterchange',{detail:{country,language}}));
    document.dispatchEvent(new CustomEvent('sohochor:localechange',{detail:{country,language}}));
  }
  function refreshLanguageOptions(select,language){const keep=select.value;select.innerHTML='';(langs[language]||langs.bn).forEach(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;select.appendChild(o)});select.value=[...select.options].some(o=>o.value===keep)?keep:'ALL'}
  function init(){
    style();
    let box=document.getElementById('sohochor-country-language');
    if(!box){
      box=document.createElement('div');box.id='sohochor-country-language';
      const inner=document.createElement('div');inner.className='sohochor-filter-inner';
      const c=makeSelect('sohochor-country','Country',countries);const l=makeSelect('sohochor-language','Language',langs.bn);
      inner.append(c,l);const status=document.createElement('div');status.id='sohochor-selection-status';box.append(inner,status);
      const header=document.querySelector('.head')||document.querySelector('.top');
      if(header)header.insertAdjacentElement('afterend',box);else document.body.insertBefore(box,document.body.firstChild);
      c.addEventListener('change',()=>{localStorage.setItem('sohochorCountry',c.value);apply()});
      l.addEventListener('change',()=>{localStorage.setItem('sohochorLanguage',l.value);refreshLanguageOptions(l,l.value);apply()});
    }
    const c=document.getElementById('sohochor-country'),l=document.getElementById('sohochor-language');
    if(c)c.value=localStorage.getItem('sohochorCountry')||'ALL';
    if(l){const saved=localStorage.getItem('sohochorLanguage')||'ALL';refreshLanguageOptions(l,saved==='ALL'?'bn':saved);l.value=saved}
    apply();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();