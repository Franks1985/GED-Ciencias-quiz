// sw.js – Service Worker para GED Ciencias 2025
const CACHE_NAME = 'ged-ciencias-v1.2';
const urlsToCache = [
  
  // ... lo que ya tienes ...
  `${BASE_PATH}/screenshots/narrow-login.png`,
  `${BASE_PATH}/screenshots/narrow-quiz.png`,
  `${BASE_PATH}/screenshots/wide-results.png`,

  '/',
  '/GED-Ciencias-quiz/',
  '/GED-Ciencias-quiz/index.html',
  '/GED-Ciencias-quiz/manifest.json',
  '/GED-Ciencias-quiz/icon-192.png',
  '/GED-Ciencias-quiz/icon-512.png'
  // Puedes agregar más si quieres, pero con esto ya funciona perfecto
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
