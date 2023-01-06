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
    "revision": "c6d7f3c640027f342da97260e4ce208e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a738c0d3.css",
    "revision": "f06e2cc6c962725ffaf57cdff688d3f2"
  },
  {
    "url": "assets/img/delete_by_id.971c5fc9.jpg",
    "revision": "971c5fc983046ea3ae04f78d8e785a28"
  },
  {
    "url": "assets/img/delete_update.e2374eab.jpg",
    "revision": "e2374eab405ba2784aa30aba6410ea9e"
  },
  {
    "url": "assets/img/delete_with_no_id.a01a2bc5.jpg",
    "revision": "a01a2bc58cfcb7fa6f6dbaecdf8e3f22"
  },
  {
    "url": "assets/img/get_by_id.9ccb0e04.jpg",
    "revision": "9ccb0e04540461700bdaf87156055638"
  },
  {
    "url": "assets/img/get.68fe1156.jpg",
    "revision": "68fe11561761b56d7e58947872912f61"
  },
  {
    "url": "assets/img/port.6338c50f.jpg",
    "revision": "6338c50f664b846b358e4bc9785633a5"
  },
  {
    "url": "assets/img/post_already_project_with_team.5d778a45.jpg",
    "revision": "5d778a459147f3e12b704bcec05afa11"
  },
  {
    "url": "assets/img/post_new_project.58b8562d.jpg",
    "revision": "58b8562ddfede8306490a301d799179c"
  },
  {
    "url": "assets/img/post_required_name_team.cdb9987a.jpg",
    "revision": "cdb9987a0b954e1f477e6f78f79c0a81"
  },
  {
    "url": "assets/img/post_with_curent_team.22b8c0d4.jpg",
    "revision": "22b8c0d4611fc6f2ad7a83f57abf7620"
  },
  {
    "url": "assets/img/put_result.002f1578.jpg",
    "revision": "002f157819d8645a8c96419899bc6673"
  },
  {
    "url": "assets/img/put_update_information.d8113486.jpg",
    "revision": "d81134860d6e1433ba4d5d01246c1e5f"
  },
  {
    "url": "assets/img/put_update_with_no_id.82c80023.jpg",
    "revision": "82c80023cb336bfd6f9efcbeebcaf7df"
  },
  {
    "url": "assets/img/result_post.6d75af82.jpg",
    "revision": "6d75af82537b1e6bd6f256536ed898d6"
  },
  {
    "url": "assets/img/sceme.c72e8903.png",
    "revision": "c72e8903a4d699259da568800111c3b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cee70526.js",
    "revision": "88e98b70020505ab2bbf4085ebcfe247"
  },
  {
    "url": "assets/js/11.d94a257e.js",
    "revision": "f0ceb007207fa2a23c9cdb52d7be210e"
  },
  {
    "url": "assets/js/12.f155a2ce.js",
    "revision": "3fc94067fd4e41348fca3ce9e9ac1eef"
  },
  {
    "url": "assets/js/13.241414bd.js",
    "revision": "2991d2988caa3b182365aa8ae6caf13f"
  },
  {
    "url": "assets/js/14.c4f9eba8.js",
    "revision": "c49a8c6319b7b590beb21a79c4da104f"
  },
  {
    "url": "assets/js/15.4c87e80d.js",
    "revision": "136183f7f1664be9a51474de3cf408d9"
  },
  {
    "url": "assets/js/16.470db31d.js",
    "revision": "d70e25bd2fd772ac5f12b2eee6766cab"
  },
  {
    "url": "assets/js/17.56cc9d8f.js",
    "revision": "9efe2718ceb50efe2256af57b7c6b310"
  },
  {
    "url": "assets/js/18.410c3e79.js",
    "revision": "809414cc76ae2454e33d75fde6abfa7c"
  },
  {
    "url": "assets/js/19.93da2818.js",
    "revision": "a82b2ca2aab92ce059da06a0f3cb63b9"
  },
  {
    "url": "assets/js/2.e88c070d.js",
    "revision": "6c167b84e5a2cf60395f6fef9bd243eb"
  },
  {
    "url": "assets/js/20.2df80867.js",
    "revision": "b0d8ea0d9eb33d7b0699e953aefbb497"
  },
  {
    "url": "assets/js/21.81d7e225.js",
    "revision": "87f55338f108f15daa8e39ff2a8910eb"
  },
  {
    "url": "assets/js/22.f3337927.js",
    "revision": "0d658413a129e5abac0f6d47a228d738"
  },
  {
    "url": "assets/js/23.3640c80c.js",
    "revision": "80e2b876db3536ae5f2b1d596bb80d9b"
  },
  {
    "url": "assets/js/24.15800399.js",
    "revision": "feccb5945b432d3e4baab39def0237d3"
  },
  {
    "url": "assets/js/26.5bd25fcc.js",
    "revision": "72044f91fb7b60e00c74d35df03ab974"
  },
  {
    "url": "assets/js/3.31caded5.js",
    "revision": "e2b68521bb595fedc46bfa88e3da8ab2"
  },
  {
    "url": "assets/js/4.058ba77d.js",
    "revision": "bc27de2bd2b416da5bb1e9286e6bbde3"
  },
  {
    "url": "assets/js/5.f4c9ff53.js",
    "revision": "3426947ec7a7c87f0c83bf15576c769d"
  },
  {
    "url": "assets/js/6.bc2e0d81.js",
    "revision": "9f231985b1e52e7c3ce484f49f85d71c"
  },
  {
    "url": "assets/js/7.bd996ace.js",
    "revision": "0a5f71e0cf92f1e640f58e9edbbe7f7e"
  },
  {
    "url": "assets/js/8.0fac9841.js",
    "revision": "6ec9216ebc11b8b71d8ed2c9cfd84cad"
  },
  {
    "url": "assets/js/9.fef50206.js",
    "revision": "0550f7800a94ba5721e3fd6066e8affe"
  },
  {
    "url": "assets/js/app.4d1f5d66.js",
    "revision": "fe8957e7bf5414b9b69b259c6f2a9b22"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e0dfc68d0d906baa01e705a83422d950"
  },
  {
    "url": "design/index.html",
    "revision": "f8a3c1b8d775a0cdd4499e8aca8deec4"
  },
  {
    "url": "index.html",
    "revision": "0f3eb9b1714cda7cf20c1ba361fa3d7c"
  },
  {
    "url": "intro/index.html",
    "revision": "83ea498f8b9efd40c65215f80c3ab2fe"
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
    "revision": "a75d0f47751e72f8b013efae52383b12"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c7ba575afbc74f02eb36665215ebeee4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e993e307198df8a18bf25d1c84194ee5"
  },
  {
    "url": "software/index.html",
    "revision": "6488796d5370e17b7ed09e080240cbc6"
  },
  {
    "url": "test/index.html",
    "revision": "bddd2248894d3ac1608b096a12bf70d6"
  },
  {
    "url": "use cases/index.html",
    "revision": "b3347db5dfc9ec17180f4f097d8a7a8c"
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
