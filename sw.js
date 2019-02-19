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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b3329ec0350505ee7e8e.js"
  },
  {
    "url": "app-d28094b628c8c51802bd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-90cc5af2dadba1a231a5.js"
  },
  {
    "url": "index.html",
    "revision": "2fe8871e371ff7fd1b24f81984eacb36"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4d96d7263ff72885b9ca7fa5ef06d658"
  },
  {
    "url": "4.8358bae7d9f911252da3.css"
  },
  {
    "url": "component---src-pages-index-js.90d4c4231494a7350890.css"
  },
  {
    "url": "component---src-pages-index-js-fe73b756e81c99010780.js"
  },
  {
    "url": "1-38da575f7e8dc0919467.js"
  },
  {
    "url": "0-3116c0a1f60b6eae39c5.js"
  },
  {
    "url": "3-f1b85064e408e8635f3a.js"
  },
  {
    "url": "4-92aea6461877ac302a0e.js"
  },
  {
    "url": "static/d/373/path---index-6a9-4K8jgSXO2b56GyqARuhKy8fPUIM.json",
    "revision": "d98cb461583a483bbdbd49c3591a7221"
  },
  {
    "url": "2.90d4c4231494a7350890.css"
  },
  {
    "url": "component---src-pages-404-js-96e64690cc02a47e227c.js"
  },
  {
    "url": "2-bca8035ff238e64fc0b0.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "b773e901ef06ac93343dc05e67540787"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0b03da61a98315298bfd46e6bbbbf658"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});