/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "01eeece98641791def085bde4d1bd768"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0d3f0789.js"
  },
  {
    "url": "build/p-123a9a6d.entry.js"
  },
  {
    "url": "build/p-1bb8d845.js"
  },
  {
    "url": "build/p-3833d40d.js"
  },
  {
    "url": "build/p-393df1f5.entry.js"
  },
  {
    "url": "build/p-5bb863d9.entry.js"
  },
  {
    "url": "build/p-763eb780.css"
  },
  {
    "url": "build/p-7686e460.entry.js"
  },
  {
    "url": "build/p-80fd1864.js"
  },
  {
    "url": "build/p-8c4a7878.entry.js"
  },
  {
    "url": "build/p-903d2bca.js"
  },
  {
    "url": "build/p-93adf97e.entry.js"
  },
  {
    "url": "build/p-a1bbdb75.js"
  },
  {
    "url": "build/p-a32ddb35.js"
  },
  {
    "url": "build/p-b4399cb9.entry.js"
  },
  {
    "url": "build/p-b95b4d2e.entry.js"
  },
  {
    "url": "build/p-bea43937.js"
  },
  {
    "url": "build/p-dbb3a4ce.entry.js"
  },
  {
    "url": "build/p-dd3cf29a.entry.js"
  },
  {
    "url": "build/p-ea06a8f6.entry.js"
  },
  {
    "url": "build/p-faa93c06.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
