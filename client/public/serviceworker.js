const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];
const self=this;
// install sw
self.addEventListener('install', (event) => {
event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
        console.log('Opened cache');

        return cache.addAll(urlsToCache);
    })
)
}); 

// listten for requests
self.addEventListener('fetch', (event) => {
    
});

// activate the sw
self.addEventListener('activate', (event) => {
    
});