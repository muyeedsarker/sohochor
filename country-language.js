/* SOHOCHOR Country + Language selector — fixed directly below header */
(function(){
  const countries=[['ALL','🌍 All Countries'],['BD','🇧🇩 Bangladesh'],['SA','🇸🇦 Saudi Arabia'],['AE','🇦🇪 UAE'],['QA','🇶🇦 Qatar'],['KW','🇰🇼 Kuwait'],['OM','🇴🇲 Oman'],['MY','🇲🇾 Malaysia'],['SG','🇸🇬 Singapore'],['GB','🇬🇧 United Kingdom'],['US','🇺🇸 United States'],['CA','🇨🇦 Canada'],['AU','🇦🇺 Australia'],['IN','🇮🇳 India'],['PK','🇵🇰 Pakistan']];
  const languages=[['ALL','🌐 All Languages'],['bn','বাংলা'],['en','English'],['ar','العربية'],['hi','हिन्दी'],['ur','اردو'],['ms','Bahasa Melayu']];
  function makeSelect(id,aria,data){const s=document.createElement('select');s.id=id;s.className='sohochor-select';s.setAttribute('aria-label',aria);data.forEach(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;s.appendChild(o)});return s}
  function style(){if(document.getElementById('sohochor-country-language-style'))return;const st=document.createElement('style');st.id='sohochor-country-language-style';st.textContent=`#sohochor-country-language{width:100%;background:#fff;border-bottom:1px solid #dbe9e1;box-shadow:0 4px 14px rgba(0,0,0,.08);position:relative;z-index:49;padding:10px 16px}.sohochor-filter-inner{max-width:1180px;margin:auto;display:flex;align-items:center;justify-content:center;gap:10px}.sohochor-select{height:42px;min-width:190px;padding:0 38px 0 13px;border:1px solid #c9ddd3;border-radius:11px;background:#f7fbf9;color:#12392b;font-weight:800;font-size:14px;outline:none}.sohochor-select:focus{border-color:#087a4a;box-shadow:0 0 0 3px rgba(8,122,74,.12)}@media(max-width:520px){#sohochor-country-language{padding:8px 10px}.sohochor-filter-inner{gap:7px}.sohochor-select{min-width:0;width:50%;height:40px;font-size:12px;padding-left:9px}}`;document.head.appendChild(st)}
  function apply(){
    const country=localStorage.getItem('sohochorCountry')||'ALL';
    const language=localStorage.getItem('sohochorLanguage')||'ALL';
    document.documentElement.dataset.country=country;document.documentElement.dataset.language=language;
    document.body.dataset.country=country;document.body.dataset.language=language;
    document.querySelectorAll('[data-country]').forEach(el=>el.hidden=!(el.dataset.country==='ALL'||el.dataset.country===country));
    document.querySelectorAll('[data-language]').forEach(el=>el.hidden=!(el.dataset.language==='ALL'||el.dataset.language===language));
    document.dispatchEvent(new CustomEvent('sohochor:filterchange',{detail:{country,language}}));
    document.dispatchEvent(new CustomEvent('sohochor:localechange',{detail:{country,language}}));
  }
  function init(){
    style();
    let box=document.getElementById('sohochor-country-language');
    if(!box){
      box=document.createElement('div');box.id='sohochor-country-language';
      const inner=document.createElement('div');inner.className='sohochor-filter-inner';
      const c=makeSelect('sohochor-country','Country',countries);const l=makeSelect('sohochor-language','Language',languages);
      inner.append(c,l);box.append(inner);
      const header=document.querySelector('.top');
      if(header) header.insertAdjacentElement('afterend',box); else document.body.insertBefore(box,document.body.firstChild);
      c.addEventListener('change',()=>{localStorage.setItem('sohochorCountry',c.value);apply()});
      l.addEventListener('change',()=>{localStorage.setItem('sohochorLanguage',l.value);apply()});
    }
    const c=document.getElementById('sohochor-country'),l=document.getElementById('sohochor-language');
    if(c)c.value=localStorage.getItem('sohochorCountry')||'ALL';
    if(l)l.value=localStorage.getItem('sohochorLanguage')||'ALL';
    apply();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();