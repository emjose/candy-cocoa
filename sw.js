const CACHE_NAME = "candy-cocoa-v1";
const urlsToCache = ["/"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Opened cache");
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response;
			}

			return fetch(event.request).then((response) => {
				if (
					!response ||
					response.status !== 200 ||
					response.type !== "basic" ||
					!event.request.url.startsWith("http")
				) {
					return response;
				}

				const responseToCache = response.clone();

				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});
