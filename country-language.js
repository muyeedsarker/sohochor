/* SOHOCHOR Country + Language selector */
(function(){
  const countries=[
    ['ALL','🌍 All Countries'],['BD','🇧🇩 Bangladesh'],['SA','🇸🇦 Saudi Arabia'],['AE','🇦🇪 UAE'],['QA','🇶🇦 Qatar'],['KW','🇰🇼 Kuwait'],['OM','🇴🇲 Oman'],['MY','🇲🇾 Malaysia'],['SG','🇸🇬 Singapore'],['GB','🇬🇧 United Kingdom'],['US','🇺🇸 United States'],['CA','🇨🇦 Canada'],['AU','🇦🇺 Australia'],['IN','🇮🇳 India'],['PK','🇵🇰 Pakistan']
  ];
  const languages=[['ALL','🌐 All Languages'],['bn','বাংলা'],['en','English'],['ar','العربية'],['hi','हिन्दी'],['ur','اردو'],['ms','Bahasa Melayu']];
  function makeSelect(id,label,data){const s=document.createElement('select');s.id=id;s.className='sohochor-select';s.setAttribute('aria-label',label);data.forEach(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;s.appendChild(o)});return s}
  function init(){
    if(document.getElementById('sohochor-country-language')) return;
    const box=document.createElement('div');box.id='sohochor-country-language';box.className='sohochor-filter';
    const toggle=document.createElement('button');toggle.type='button';toggle.className='sohochor-toggle';toggle.innerHTML='🌍 <b>Country & Language</b> <span>⌄</span>';
    const panel=document.createElement('div');panel.className='sohochor-panel';
    const c=makeSelect('sohochor-country','Country',countries),l=makeSelect('sohochor-language','Language',languages);
    panel.append(c,l);box.append(toggle,panel);
    const target=document.querySelector('.hero'); if(target) target.insertAdjacentElement('afterend',box); else document.body.prepend(box);
    toggle.addEventListener('click',()=>{panel.classList.toggle('open');toggle.querySelector('span').textContent=panel.classList.contains('open')?'⌃':'⌄'});
    function save(){localStorage.setItem('sohochorCountry',c.value);localStorage.setItem('sohochorLanguage',l.value);document.dispatchEvent(new CustomEvent('sohochor:filterchange',{detail:{country:c.value,language:l.value}}))}
    c.addEventListener('change',save);l.addEventListener('change',save);
    c.value=localStorage.getItem('sohochorCountry')||'ALL';l.value=localStorage.getItem('sohochorLanguage')||'ALL';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
