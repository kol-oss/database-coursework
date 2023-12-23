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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6cd73daf69f2ee94c4efecb2ea1426f6"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.07799b51.css",
    "revision": "e2694897af5072c3c9441558e38454c0"
  },
  {
    "url": "assets/img/relational_scheme.44c970b0.png",
    "revision": "44c970b0a143ec6fead87694514ea610"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.82977ebd.js",
    "revision": "8343fc02d4605c1290bc51ad3205e5fc"
  },
  {
    "url": "assets/js/10.0e2bde6e.js",
    "revision": "9be90a8b9858ca44a4979853e23f5963"
  },
  {
    "url": "assets/js/13.bec707ea.js",
    "revision": "4dde86029ebe6f05e4b6f74155e68422"
  },
  {
    "url": "assets/js/14.18a30b26.js",
    "revision": "9cdc3a31f1691a79b77b6596b65dbb48"
  },
  {
    "url": "assets/js/15.bb968e71.js",
    "revision": "51b24747286316f887b5c3bff82fe190"
  },
  {
    "url": "assets/js/16.82ba8eda.js",
    "revision": "c4b2029779c218fde5a6e0d5a96a9e66"
  },
  {
    "url": "assets/js/17.9b4f3a35.js",
    "revision": "cbcd696c06d13e715c223e51df28d7eb"
  },
  {
    "url": "assets/js/18.0471f176.js",
    "revision": "b813d926d51cd4f8bbc07d32c7fc3141"
  },
  {
    "url": "assets/js/19.198c0008.js",
    "revision": "0f63de437601040bc394b6994f292e76"
  },
  {
    "url": "assets/js/2.d5928b1d.js",
    "revision": "95858b8ffb7dfe4dc5b32e44b92546e7"
  },
  {
    "url": "assets/js/20.959394f2.js",
    "revision": "5a2c5c79b93c635c9608c1724de56c9c"
  },
  {
    "url": "assets/js/21.b7b37969.js",
    "revision": "b7f8488255f222126a831a11499d89d9"
  },
  {
    "url": "assets/js/22.841917c8.js",
    "revision": "da5fe0268b661f4683582aedd1f0510b"
  },
  {
    "url": "assets/js/23.3100b240.js",
    "revision": "d9a6f7001cee447d996bcc5e8f7fae75"
  },
  {
    "url": "assets/js/24.0c5bd04a.js",
    "revision": "8570eecbcaec6122cb70654bf28c28c1"
  },
  {
    "url": "assets/js/25.9127e45f.js",
    "revision": "f362f33b368fb24d9b4f6159e3bc46a5"
  },
  {
    "url": "assets/js/26.4d0f1ed0.js",
    "revision": "81bf91aa544d9e4f8b5e4663f74de814"
  },
  {
    "url": "assets/js/27.16c29f50.js",
    "revision": "ca8663189fa6c50c1f4a940e3b226538"
  },
  {
    "url": "assets/js/28.c49578a2.js",
    "revision": "2e69073b7b283058c52b40830e55170a"
  },
  {
    "url": "assets/js/29.6e3b6cac.js",
    "revision": "873701364768caab6591d49d6e4b87fa"
  },
  {
    "url": "assets/js/3.45105e67.js",
    "revision": "ded6c95e8978755b825001caad06b5fb"
  },
  {
    "url": "assets/js/30.9d251781.js",
    "revision": "2777247f6285264e3dd2d3bb5cd982b1"
  },
  {
    "url": "assets/js/31.1781cf3c.js",
    "revision": "c0faf31bf1e0fa9f525b2c1f3b6e1e63"
  },
  {
    "url": "assets/js/32.55ac11b9.js",
    "revision": "07741c31afd63c5392a21f0da925056a"
  },
  {
    "url": "assets/js/33.da5a7670.js",
    "revision": "a49fa8a55f0b9d7b0d1f66101d25a3a0"
  },
  {
    "url": "assets/js/34.05839744.js",
    "revision": "7f4a221c14887d2fd5a2464910c2a856"
  },
  {
    "url": "assets/js/35.5ad1e9de.js",
    "revision": "bce3c8f2b174126fb749bb7533bf4577"
  },
  {
    "url": "assets/js/36.a4e24eca.js",
    "revision": "a9ecc07218ea191e5bf7a3f4d955c8d8"
  },
  {
    "url": "assets/js/37.9dbd7e9f.js",
    "revision": "57aba4ee06019846e8c86994c20e9d7f"
  },
  {
    "url": "assets/js/38.c7e131db.js",
    "revision": "f62921b5865ebfc635fac68354600160"
  },
  {
    "url": "assets/js/39.4e6c3d8f.js",
    "revision": "3ba68d2d09036ee3d22c44f013a61f56"
  },
  {
    "url": "assets/js/4.ff2cd110.js",
    "revision": "0f98eaf6b3121659786d87ba8f771054"
  },
  {
    "url": "assets/js/41.8122f54c.js",
    "revision": "9df36c35abf8c6ed69d25990a5a97d3f"
  },
  {
    "url": "assets/js/5.ed988792.js",
    "revision": "5f4e6dcdd67bf3528b9811d9b73533e5"
  },
  {
    "url": "assets/js/6.cf7fc076.js",
    "revision": "cedb52623221bcfb7d93c3d19ba11c72"
  },
  {
    "url": "assets/js/7.98446471.js",
    "revision": "e1414fbd2d146fd13f08954d82f94c8b"
  },
  {
    "url": "assets/js/8.f987943d.js",
    "revision": "6c853ae2eed42697e83d5d1df99e953c"
  },
  {
    "url": "assets/js/9.26686630.js",
    "revision": "3f0b1a387beb72e5562d46824a17c997"
  },
  {
    "url": "assets/js/app.4bd466a0.js",
    "revision": "cdb20ef45f3fc1b52639b9c953e1250b"
  },
  {
    "url": "assets/js/vendors~docsearch.dfe73048.js",
    "revision": "41b5c218d26e5dcb34837f1d7ffd2341"
  },
  {
    "url": "conclusion/index.html",
    "revision": "18b0dfcc9c58a563739553a270312067"
  },
  {
    "url": "design/index.html",
    "revision": "eaf69ea51ca8468c099fd1778d78b74c"
  },
  {
    "url": "index.html",
    "revision": "e22c77dfb009d44313d61a3f323e2ee6"
  },
  {
    "url": "intro/index.html",
    "revision": "aeeaa7e6fc62a6d6640b5d57abd9c644"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "597e37d217683edf4a0f99bc61473f5a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fb88deed8925ef00e877f81ee668363d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "31c369b4e102c899a9564aeb84d7c3ea"
  },
  {
    "url": "software/index.html",
    "revision": "1ad6f3a6620709096e5a93831f9f62ec"
  },
  {
    "url": "test/index.html",
    "revision": "c44548bee289a3be956faf1c08f0af8a"
  },
  {
    "url": "use cases/index.html",
    "revision": "78e2bcf2c538c66d6fefeb82b0d18513"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
