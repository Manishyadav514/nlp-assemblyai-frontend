if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>t(e,c),f={module:{uri:c},exports:n,require:r};s[c]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-3cafb6cd"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/196.png",revision:"0aaffdd9d8f1b6ee3eea9d1a533d1af0"},{url:"/512.png",revision:"005673df517c16718beb5baec13fc961"},{url:"/_next/app-build-manifest.json",revision:"cd2151d03ce1f0d8d025a27b42a30e38"},{url:"/_next/static/chunks/23-17d109591ec31f31.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/app/_not-found/page-846bc14f8cdb3714.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/app/layout-800170a68275de12.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/app/page-9f1f4befbf221e32.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/fd9d1056-be48aeae6e94b8d1.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/main-04029bada0287a40.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/main-app-0c1b5f7b0fb8e1f4.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d0ceac4fb78a3613.js",revision:"tq3lOFo0tSq5xkIm58_ZT"},{url:"/_next/static/css/baf577a9f18c8857.css",revision:"baf577a9f18c8857"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/tq3lOFo0tSq5xkIm58_ZT/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/tq3lOFo0tSq5xkIm58_ZT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/manifest.json",revision:"6764291c9edaa917af9975baffdab090"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/i,new e.CacheFirst({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^\/(?!api\/).*/i,new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET")}));
