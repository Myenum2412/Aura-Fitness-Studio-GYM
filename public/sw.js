const CACHE_NAME = "aura-fitness-v1"
const urlsToCache = [
  "/",
  "/about",
  "/services",
  "/blog",
  "/contact",
  "/booking",
  "/static/js/bundle.js",
  "/static/css/main.css",
  "/manifest.json",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})

self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync())
  }
})

function doBackgroundSync() {
  return Promise.resolve()
}
