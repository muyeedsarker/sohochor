/* SOHOCHOR Quran background player */
(function(){
  const tracks=[
    {name:'সূরা আল-ফাতিহা',url:'https://server8.mp3quran.net/afs/001.mp3'},
    {name:'সূরা আল-বাকারা',url:'https://server8.mp3quran.net/afs/002.mp3'}
  ];
  let audio,idx=0,enabled=localStorage.getItem('sohochorQuranAuto')==='1';
  function ui(){if(document.getElementById('sohochor-quran-player'))return;const b=document.createElement('div');b.id='sohochor-quran-player';b.innerHTML='<button id="sohochor-quran-toggle" type="button">📖 কুরআন</button><span id="sohochor-quran-name">তেলাওয়াত বন্ধ</span><audio id="sohochor-quran-audio" preload="none" playsinline></audio>';const s=document.createElement('style');s.textContent='#sohochor-quran-player{position:fixed;right:12px;bottom:78px;z-index:99999;display:flex;align-items:center;gap:8px;background:#fff;padding:8px 10px;border:1px solid #dbe9e1;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.18);font:800 12px sans-serif}#sohochor-quran-toggle{border:0;border-radius:10px;padding:9px 12px;background:#063b27;color:#fff;font-weight:900;cursor:pointer}#sohochor-quran-name{max-width:145px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#12392b}@media(max-width:520px){#sohochor-quran-player{bottom:72px;right:8px}#sohochor-quran-name{max-width:105px}}';document.head.appendChild(s);document.body.appendChild(b);audio=document.getElementById('sohochor-quran-audio');audio.src=tracks[idx].url;audio.onended=()=>{idx=(idx+1)%tracks.length;audio.src=tracks[idx].url;if(enabled)audio.play().catch(()=>{})};document.getElementById('sohochor-quran-toggle').onclick=()=>{enabled=!enabled;localStorage.setItem('sohochorQuranAuto',enabled?'1':'0');if(enabled)start();else audio.pause();render()};render()}
  function render(){const btn=document.getElementById('sohochor-quran-toggle'),name=document.getElementById('sohochor-quran-name');if(!btn)return;btn.textContent=enabled?'⏸️ কুরআন':'▶️ কুরআন';name.textContent=enabled?'তেলাওয়াত চলছে':'তেলাওয়াত বন্ধ'}
  function start(){if(!audio)return;audio.play().catch(()=>{enabled=false;localStorage.setItem('sohochorQuranAuto','0');render()})}
  function init(){ui();if(enabled)start()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();