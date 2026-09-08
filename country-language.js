/* SOHOCHOR Country + Language selector */
(function(){
  const countries=[['ALL','🌍 All Countries'],['BD','🇧🇩 Bangladesh'],['SA','🇸🇦 Saudi Arabia'],['AE','🇦🇪 UAE'],['QA','🇶🇦 Qatar'],['KW','🇰🇼 Kuwait'],['OM','🇴🇲 Oman'],['MY','🇲🇾 Malaysia'],['SG','🇸🇬 Singapore'],['GB','🇬🇧 United Kingdom'],['US','🇺🇸 United States'],['CA','🇨🇦 Canada'],['AU','🇦🇺 Australia'],['IN','🇮🇳 India'],['PK','🇵🇰 Pakistan']];
  const languages=[['ALL','🌐 All Languages'],['bn','বাংলা'],['en','English'],['ar','العربية'],['hi','हिन्दी'],['ur','اردو'],['ms','Bahasa Melayu']];
  const countryNames=Object.fromEntries(countries.map(x=>[x[0],x[1].replace(/^\S+\s/, '')]));
  const languageNames=Object.fromEntries(languages.map(x=>[x[0],x[1].replace(/^\S+\s/, '')]));
  function makeSelect(id,label,data){const s=document.createElement('select');s.id=id;s.className='sohochor-select';s.setAttribute('aria-label',label);data.forEach(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;s.appendChild(o)});return s}
  function apply(){
    const country=localStorage.getItem('sohochorCountry')||'ALL', language=localStorage.getItem('sohochorLanguage')||'ALL';
    document.documentElement.dataset.country=country;document.documentElement.dataset.language=language;
    document.body.dataset.country=country;document.body.dataset.language=language;
    document.querySelectorAll('[data-country]').forEach(el=>{el.hidden=!(el.dataset.country==='ALL'||el.dataset.country===country)});
    document.querySelectorAll('[data-language]').forEach(el=>{el.hidden=!(el.dataset.language==='ALL'||el.dataset.language===language)});
    document.dispatchEvent(new CustomEvent('sohochor:filterchange',{detail:{country,language,countryName:countryNames[country],languageName:languageNames[language]}}));
    document.dispatchEvent(new CustomEvent('sohochor:localechange',{detail:{country,language}}));
  }
  function save(c,l){localStorage.setItem('sohochorCountry',c);localStorage.setItem('sohochorLanguage',l);apply();}
  function init(){
    if(document.getElementById('sohochor-country-language')){apply();return;}
    const box=document.createElement('div');box.id='sohochor-country-language';box.className='sohochor-filter';
    const toggle=document.createElement('button');toggle.type='button';toggle.className='sohochor-toggle';toggle.innerHTML='🌍 <b>Country & Language</b> <span>⌄</span>';
    const panel=document.createElement('div');panel.className='sohochor-panel';
    const c=makeSelect('sohochor-country','Country',countries),l=makeSelect('sohochor-language','Language',languages);panel.append(c,l);box.append(toggle,panel);
    const header=document.querySelector('.top');
    if(header) header.insertAdjacentElement('afterend',box); else document.body.prepend(box);
    toggle.addEventListener('click',()=>{panel.classList.toggle('open');toggle.querySelector('span').textContent=panel.classList.contains('open')?'⌃':'⌄'});
    c.value=localStorage.getItem('sohochorCountry')||'ALL';l.value=localStorage.getItem('sohochorLanguage')||'ALL';
    c.addEventListener('change',()=>save(c.value,l.value));l.addEventListener('change',()=>save(c.value,l.value));
    apply();
  }
  function start(){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init()}
  start();
})();