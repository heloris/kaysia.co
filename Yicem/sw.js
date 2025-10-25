const CACHE_NAME = 'yicem-v1.0.0';
const STATIC_CACHE = 'yicem-static-v1.0.0';
const DYNAMIC_CACHE = 'yicem-dynamic-v1.0.0';

// Cache edilecek dosyalar
const STATIC_FILES = [
  '/',
  '/tr/',
  '/en/',
  '/ru/',
  '/de/',
  '/ar/',
  '/es/',
  '/styles.css',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Cache stratejileri
const CACHE_STRATEGIES = {
  // Statik dosyalar - Cache First
  static: [
    '/styles.css',
    '/manifest.json',
    '/icons/',
    'https://fonts.googleapis.com/',
    'https://fonts.gstatic.com/'
  ],
  // API istekleri - Network First
  api: [
    '/api/',
    'https://api.'
  ],
  // Görseller - Cache First
  images: [
    'https://images.unsplash.com/',
    '.jpg',
    '.jpeg',
    '.png',
    '.webp',
    '.svg'
  ],
  // HTML sayfaları - Stale While Revalidate
  pages: [
    '/tr/',
    '/en/',
    '/ru/',
    '/de/',
    '/ar/',
    '/es/'
  ]
};

// Service Worker kurulumu
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Service Worker aktivasyonu
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch olayları
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Sadece GET isteklerini işle
  if (request.method !== 'GET') {
    return;
  }
  
  // Farklı cache stratejileri uygula
  if (isStaticFile(url.pathname)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isImageFile(url.pathname)) {
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
  } else if (isPageFile(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  } else if (isApiRequest(url.pathname)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache stratejileri
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache First failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    return cachedResponse || new Response('Offline', { status: 503 });
  });
  
  return cachedResponse || fetchPromise;
}

// Yardımcı fonksiyonlar
function isStaticFile(pathname) {
  return CACHE_STRATEGIES.static.some(pattern => 
    pathname.includes(pattern) || pathname.endsWith('.css') || pathname.endsWith('.js')
  );
}

function isImageFile(pathname) {
  return CACHE_STRATEGIES.images.some(pattern => 
    pathname.includes(pattern) || 
    pathname.endsWith('.jpg') || 
    pathname.endsWith('.jpeg') || 
    pathname.endsWith('.png') || 
    pathname.endsWith('.webp') || 
    pathname.endsWith('.svg')
  );
}

function isPageFile(pathname) {
  return CACHE_STRATEGIES.pages.some(pattern => pathname.includes(pattern));
}

function isApiRequest(pathname) {
  return CACHE_STRATEGIES.api.some(pattern => pathname.includes(pattern));
}

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Offline siparişleri senkronize et
  console.log('Background sync: Syncing offline orders');
}

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Siparişi Görüntüle',
          icon: '/icons/icon-72x72.png'
        },
        {
          action: 'close',
          title: 'Kapat',
          icon: '/icons/icon-72x72.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/tr/#cart')
    );
  }
});

// Message handling
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
