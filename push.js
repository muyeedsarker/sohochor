const PUSH_PUBLIC_KEY = "BC1FvK-ER2a0uXro8S_JuUsAzSBQ0dxrZqEM1kox8s7l1C5J_AY0SYaV5UkhE8SMR-opBgrYey8w0i0dazs9eKQ";

function pushSupported() {
  return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
}
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64String + padding);
  return Uint8Array.from([...atob(base64)].map(char => char.charCodeAt(0)));
}
async function supabasePushClient() {
  const db = window.db || window.supabase?.createClient?.("https://pgwxfccpphjjveoeeqhv.supabase.co", "sb_publishable_Hi2YfMYdGfGS3al-ojQA9A_6wPEG2ym");
  if (!db) throw new Error("Supabase client not available");
  return db;
}
async function registerPushSubscription(showFeedback = true) {
  if (!pushSupported()) throw new Error("এই ব্রাউজারে Push Notification সমর্থিত নয়।");
  const permission = await Notification.requestPermission();
  if (permission !== "granted") throw new Error("Notification permission অনুমোদন করা হয়নি।");
  const registration = await navigator.serviceWorker.ready;
  let subscription = await registration.pushManager.getSubscription();
  if (!subscription) subscription = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(PUSH_PUBLIC_KEY) });
  const db = await supabasePushClient();
  const { data: { user } } = await db.auth.getUser();
  const payload = subscription.toJSON();
  if (!payload.endpoint || !payload.keys?.p256dh || !payload.keys?.auth) throw new Error("Push subscription তৈরি করা যায়নি।");
  const row = { user_id: user?.id || null, endpoint: payload.endpoint, p256dh: payload.keys.p256dh, auth: payload.keys.auth, user_agent: navigator.userAgent, updated_at: new Date().toISOString() };
  let error;
  if (user) ({ error } = await db.from("push_subscriptions").upsert(row, { onConflict: "endpoint" }));
  else { ({ error } = await db.from("push_subscriptions").insert(row)); if (error?.code === "23505") error = null; }
  if (error) throw error;
  if (showFeedback) alert("🔔 Notification চালু হয়েছে। নতুন News/Notice প্রকাশ হলে জানানো হবে।");
  return subscription;
}
async function installPushUI() {
  if (!pushSupported()) return;
  const registration = await navigator.serviceWorker.ready;
  const active = !!(await registration.pushManager.getSubscription());
  const old = document.getElementById("pushTools"); if (old) old.remove();
  const box = document.createElement("div"); box.id = "pushTools"; box.className = "panel";
  box.innerHTML = `<div class="section-title"><h2>🔔 নোটিফিকেশন</h2></div><p class="muted">নতুন নিউজ ও নোটিশ প্রকাশ হলে আপনার ফোনে নোটিফিকেশন পেতে চালু করুন।</p><button id="pushEnable" class="primary" type="button">${active ? "🔔 Notification চালু আছে" : "🔔 Notification চালু করুন"}</button>`;
  const main = document.querySelector("main.page") || document.body; main.insertBefore(box, main.firstChild?.nextSibling || main.firstChild);
  const btn = document.getElementById("pushEnable"); btn.disabled = active;
  btn.onclick = async () => { btn.disabled = true; try { await registerPushSubscription(true); btn.textContent = "🔔 Notification চালু আছে"; } catch (e) { btn.disabled = false; alert(e.message || "Notification চালু করা যায়নি।"); } };
}
function installReminderHomeLink(){
  if(!location.pathname.endsWith('/index.html') && !location.pathname.endsWith('/')) return;
  document.querySelectorAll('[data-coming="Alarm"],[data-coming="Reminder"]').forEach(a=>{
    a.removeAttribute('data-coming'); a.classList.remove('coming'); a.setAttribute('href','./reminder.html');
    const small=a.querySelector('small'); if(small) small.textContent='Reminder + Alarm চালু আছে';
  });
}
function install3DHomeLogin(){
  const style=document.createElement('style');
  style.id='sohochor-3d-buttons';
  style.textContent=`
    .links a[href="index.html"]{
      display:inline-flex;align-items:center;justify-content:center;
      min-width:68px;padding:8px 13px;border-radius:12px;
      color:#fff;background:linear-gradient(145deg,#16a36a,#075735 72%);
      border:1px solid #4fd39a66;
      box-shadow:inset 2px 2px 5px #ffffff38,4px 6px 12px #001b1055;
      transform:translateY(-1px);transition:transform .18s,box-shadow .18s;
    }
    .links a[href="index.html"]:hover{color:#fff;transform:translateY(-3px);box-shadow:inset 2px 2px 5px #ffffff44,5px 9px 16px #001b1066}
    .login{
      display:inline-flex!important;align-items:center;justify-content:center;
      min-width:78px;padding:10px 17px!important;border-radius:13px!important;
      color:#fff!important;background:linear-gradient(145deg,#18a86b,#075a39 72%)!important;
      border:1px solid #55dba266!important;
      box-shadow:inset 2px 2px 6px #ffffff40,5px 7px 14px #001b1055,0 0 0 1px #043b2844!important;
      text-shadow:0 1px 2px #001b1066;transform:perspective(180px) rotateX(2deg) translateY(-1px);
      transition:transform .18s,box-shadow .18s;
    }
    .login:hover{transform:perspective(180px) rotateX(2deg) translateY(-3px) scale(1.02)!important;box-shadow:inset 2px 2px 6px #ffffff4d,6px 10px 18px #001b1066,0 0 0 1px #043b2855!important}
    .login:active,.links a[href="index.html"]:active{transform:translateY(1px)!important;box-shadow:inset 3px 3px 7px #001b1040,2px 3px 7px #001b1055!important}
    @media(max-width:850px){.links a[href="index.html"]{display:none}}
  `;
  document.head.appendChild(style);
}
document.addEventListener("DOMContentLoaded", () => { installReminderHomeLink(); install3DHomeLogin(); navigator.serviceWorker?.register("./sw.js").then(() => installPushUI()).catch(() => {}); });