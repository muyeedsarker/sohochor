/* Sohochor — Firebase Cloud Messaging background notification worker */
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

/*
  IMPORTANT: Fill these values with the existing Sohochor Firebase Web App
  configuration before enabling FCM token registration.
*/
const firebaseConfig = {
  apiKey: 'REPLACE_API_KEY',
  authDomain: 'REPLACE_PROJECT.firebaseapp.com',
  projectId: 'REPLACE_PROJECT_ID',
  storageBucket: 'REPLACE_PROJECT.appspot.com',
  messagingSenderId: 'REPLACE_MESSAGING_SENDER_ID',
  appId: 'REPLACE_APP_ID'
};

try {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    const data = payload.data || {};
    const notification = payload.notification || {};
    const title = data.title || notification.title || 'সহচর — Reminder';
    const body = data.body || notification.body || 'আপনার একটি Reminder আছে।';

    self.registration.showNotification(title, {
      body,
      icon: data.icon || './icon-192.svg',
      badge: data.badge || './icon-192.svg',
      tag: data.tag || 'sohochor-reminder',
      renotify: true,
      data: { url: data.url || './reminder.html' }
    });
  });
} catch (error) {
  console.error('[Sohochor FCM] initialization failed:', error);
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './reminder.html';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
