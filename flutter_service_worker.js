'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "cee216f4185d6c8c5d7f5f0dd75f676d",
"main.dart.js": "5e39df91255ab80a612b2646e21f4145",
"index.html": "c19a97e39865f980e0d2dbd0d9707bc6",
"/": "c19a97e39865f980e0d2dbd0d9707bc6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"manifest.json": "5c08262df613d1c056ad381665fbb9aa",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"assets/AssetManifest.json": "4c232890fe54a55ebde023d2f2d406bc",
"assets/shaders/ink_sparkle.frag": "0cc60a8f8615e45b11b1f78edf49c577",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/images/10.jpeg": "d75ff5ef331b344f3629e42c8efb704e",
"assets/images/11.jpeg": "3952b15ea21d83f2bb3a557ecb6a87fe",
"assets/images/16.jpeg": "7c470676d7bd265bc55922c995c356ac",
"assets/images/12.jpeg": "485ca294f0df7cb3af71770f6a47b08f",
"assets/images/p2.jpeg": "86574864aef3391cd12c41333ca832d0",
"assets/images/wedding.jpeg": "8cc9d0dfde1d65d89c4ae5c55ba76493",
"assets/images/15.jpeg": "45559722ba71a8f50fd4074fee1612bb",
"assets/images/invite.png": "51875bb01630c92c52bcfb8a6776eaa8",
"assets/images/p1.jpeg": "349be4f0f46fed6978ce4b941cba1920",
"assets/images/18.jpeg": "9d9b8fc70566cbbbc53a0df186dc7832",
"assets/images/14.jpeg": "35081d786ef4057888afafd46cbe68f8",
"assets/images/13.jpeg": "9670e443fcf4c6d869c384de608c5585",
"assets/images/heart.png": "8f32c55df322a7c362ce74e8a22148a7",
"assets/images/vic.png": "150db7403ac8b658f2a540b10ca39fa0",
"assets/images/p4.jpeg": "931c3a7a66e92b29b44f078c1eff9236",
"assets/images/arrow.png": "3089fdec1da8c5480ab2aa9f9082a00a",
"assets/images/17.jpeg": "3d6bc5babc158f89dac55787138baf20",
"assets/images/p8.jpeg": "0d8475a0321bb9f0a03a86f28c270225",
"assets/images/2.png": "0c7a9591c877df4952938ee9ed418e07",
"assets/images/1.png": "68fdd8430116b794e71ffb55fdeca750",
"assets/images/love.png": "ebdb79e7fd67a97b333c9bebf72b5c2f",
"assets/images/vic2.png": "ab2d82524afa71e653fbc81ec9a59da3",
"assets/images/p3.jpeg": "0b900d1cc87c73341d6bf9bc32bbe2b8",
"assets/images/card.png": "fd6c003a2437b27240f4fd22bd59c989",
"assets/images/c&v.png": "7407cdc617598c4c3aca758727ea2e77",
"assets/images/p7.jpeg": "9219ab961418d3a0d4f7d0ce0f80b468",
"assets/images/p5.jpeg": "3fa5ab902d04c6c7374e7ebca2fa8602",
"assets/images/9.jpeg": "b188d22f3dd8aff8ac72448382b198d9",
"assets/images/p6.jpeg": "906823fb90dd900a28592b2af831417e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "da80eb58c1af5c47938e6a3d6cfbaf6d",
"version.json": "0ba97c4979f94418722fa0abf1e46b21",
"icons/icons512.png": "77be3933348c50949312c716b5bd3e12",
"icons/icon192.png": "60ca89cf2428123f7a2818e08a25b5d4",
"icons/Icon-maskable-192.png": "60ca89cf2428123f7a2818e08a25b5d4",
"icons/Icon-maskable-512.png": "77be3933348c50949312c716b5bd3e12"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
