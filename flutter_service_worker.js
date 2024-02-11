'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f124181e58b12572810925130e6735b8",
"assetslinks.json": "b7e32513b5981a24cc3b4e34e43e7050",
"index.html": "0d7af6ffe32450e41dbbaa00c8f1b9f6",
"/": "0d7af6ffe32450e41dbbaa00c8f1b9f6",
"main.dart.js": "8b7ad83ae63f3c18805d8659624bb002",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "47e086f8841aee14e325f5f82ed0795f",
".git/config": "780b300ed9f8113ac2abb73d1e3a2602",
".git/objects/95/b2bd483a83d5a9553ac7dd5bfecebf38fd5776": "378a8d7a2c4c2477bdc123ea52ae5dbd",
".git/objects/68/ac66a37cf835c27427c206537be9f8ecc29754": "be54570f89e6f08163c3123301a42c45",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/32/cd239bbe031609fdc555c3768585052cacc9c1": "220cf50a42656aa3e4975ff259d7df84",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/3b3f04c5729eda926bca730fce54d0300e231d": "a440a8c368c981f488158404b18acf85",
".git/objects/3d/90b8181e78fb5c721af5a57369b9cf4b5c903f": "4e49dac718c1d1736eb4627b5d29418b",
".git/objects/33/46f04c5cd613c220d26297893e0c96c359b2b8": "03db49acc4632f158a1e5e9a38bb9171",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/d9/3bd57f6fe97e1210ca2b986064f71846fe0177": "545e064a713bb34c78b13edba5637b3d",
".git/objects/ad/d8bd8b64bc92ceb2f42da0ab340976ebf9dd7a": "9437c49bd9aaa4118988c19329793627",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/da/5fb0e3b02e4a5e0e8a1e16954ee2d5528b0200": "5c0a39cb081250898a2d403d85144235",
".git/objects/a2/581818ecfd3960eff11cf2cd5fe7657ca809a8": "73e03fba7d62b1c01d7995f988dd0b58",
".git/objects/d1/5a670994e56b47d01714e852f33911eac156a8": "6a299caec2fd2a58c276ca6ae01c0ba4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e5/32181b6db1f0a1739c11f6f6f27bc92d429284": "b4d41009190a1bf9a86a70fd6febb21d",
".git/objects/e5/3431a0bcbe6d32c35b6f6bda1722cb74700f74": "566e769959fd35fa2d8a7c028b2d6250",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f3/45b3297ebcb25f763e0fc45907bfdb0eb65867": "6688136eba451d7f67703a878db3e1c0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/d248f93c91ecd64b5344d49962350322a43689": "a53f7b4198a94451c212592d66719ff0",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/ed848465c00c41bc12f3aa5c61bf0dbfda2a66": "3343ef3ecddd2894e9ffb97829988980",
".git/objects/e3/c1a466dc4a52675af6edb4321503c3ca6debf6": "31b8127aa335c268ea84e553e9f44cb0",
".git/objects/e3/0c261c026a2d66e184d1a213daf27f902e12b4": "e183d2e5eef9d3f872c1cc174c1af25c",
".git/objects/fb/e896d8ee7ae82c013ff1b0f8b2f290b7b95edc": "a7201aae7b4042a935dbb7d8bbe82d00",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/7b/9c21b06b3feb0d1a440a7903b223d5cf4bae07": "d04fb636a2f99375a13c22557c41d723",
".git/objects/8f/d914b59311aa4b57384a8bac9ce54697b42378": "fd197004ed34c323b118ab7d5f626611",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/00/4c26ff93a8b7255f42c64e1c2f2e2bd16f9b8b": "c3c62159beb11f483a2715d3cc003edd",
".git/objects/36/ad36cb38be0fe0096622530662947e3970af8a": "84aa12752c30d4955aca0ea3dfa4243c",
".git/objects/36/8c44c1897d8d4a3caf9777d9d7109d5311ddc1": "d42f2979a3c536af3e300f72f009189f",
".git/objects/09/926ee919a28d5ef88ddb547bf1e1f9cb465d8e": "cfcc7ac5cb830652b418967e5f97ca7b",
".git/objects/5d/b133002602f3f2f9b0f72a6841b5c925db50cf": "6d0a011a0e2282c6a5f555cc0dca8cd2",
".git/objects/65/c61eae4c93e411dbf35aabf7ecbfa9bc628370": "a0e69db86f1ba6349e5c9aee5fe0bc19",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/49149524fc9a4219aac9f1a5640c67319f93d7": "c9a2b2e96b9720c9073030dda1cd432d",
".git/objects/5b/763db820e8a990fa3eae9d638cc697f2bc611e": "3e94af123fa641a27db042a2ef159643",
".git/objects/06/621bfbdadbd5f9772c68d1c1eb34f0310ad921": "21a5c8554a835515d7cd6f35960aaab6",
".git/objects/52/15534e541a08bb999e46cdd82731ded1f31c0c": "de6ebb153a49e5dc0c36ce41529f4dc0",
".git/objects/55/0c0a56583acb26dfefaf16cbb521ef31a53391": "6b6774a20b5cc776ba6bccd254b4adc0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/f87769ce2a196809e87235c63f98030aab0d72": "097f72a2634341e1a6fb864132c3baac",
".git/objects/b6/36ad5892aea29fce11535b637266efe0c1996e": "fd98615a65d292ddc92a2b5bc95b814c",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/c44a8f74bfdd6d58b46bceb47328628572fb14": "9320548f2ab96a1162abc0b81a138567",
".git/objects/c4/fe2c0d4aacf81cd1440269dac25bb82f2f8627": "c64e78822e2ed12c487bb03fa1fa9c65",
".git/objects/c4/ee76c841065e6c622026ea8f11201061251847": "f7187e5289cdd24e0b3e11688f7b4eec",
".git/objects/e1/6a3f13bcc363570c12267fa40422500244fa4a": "6574b463da77c0757608fd7bc50bfd2e",
".git/objects/cd/1e9d3db62cd3af75bdf03f474c047bcc74a2d2": "1f9553d0b3728a16fcb8188a7e0368e8",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/f0a9fc0b8001938f1347158d14cd8d965afea8": "60871c03e9d32c1f3fa869ddf72e8775",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/6069ccd3d388abcfa433f149b95809bc2d88df": "ea4f1582e517043b7e504ecae08eacfc",
".git/objects/c2/d825ad139cb9fa8b38a6eaba0fa60f4bfa983b": "b55606545bda426bdf0a999e171e90e3",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/e9000cac8d77acdcb76fbf24d460cd80aeba5f": "87dc0a2bc163570ae8736c1a271251f7",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f1/72d66325627934e637a4d18757f94df538b15b": "f9a66b98eb3109b4d5772d012f7289eb",
".git/objects/e7/26c12e8d5d8857fd2aef0b2d2429e16646adbc": "b3da1ad09e3eb818fe6621c85b2eef8b",
".git/objects/e7/09209a96fc96865ea1ed6511fc03ab421d69ef": "4e6550b9aed474af2600e1f898555c01",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/2c/d45fb152875947f07f10f843dd4211a9ddc303": "6f0e2a0a737dce2b59e6df18bf031ab8",
".git/objects/83/4aa03b7f935ee58e64387ef120a7749d2754ff": "604c3425878066f6b460a0be4b796e55",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/48/82466ebe3ab2c38b2ac0bbef039aa21da87377": "bd60dcd500f90b2301d1534d9893117c",
".git/objects/1e/5e430b4a85300c462b76bf456c416506d112eb": "6546f873e7f2ae2d942d81f430495254",
".git/objects/4f/9b2b42080243750c968de1286bedcd5ca8135c": "4f284ebcbf9f9222f0e960781b24fbad",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/7a/fd9e2a41ff38ccc05cc17cbed1db8e85ade3bf": "8033ab984d8c7ddb113d41a03e68898b",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/8e/328a1ede665fff3c285023920cb379be0320c8": "446007b283d27d9b614010f9f98c044d",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/22/5f076dd1ad0c21c416cf31d62d0c9bbe3933f6": "ff02f9d666d50005ddbc0d3cdadb8cd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d085c34900ebe20b517f63ac04ef5c1",
".git/logs/refs/heads/main": "cf07c23348d8e152caeda50fa3aa8f28",
".git/logs/refs/remotes/origin/main": "912139510c120e2c639ee33714e40ae2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d7318a2717d951c03f5753eb79c04a20",
".git/refs/remotes/origin/main": "d7318a2717d951c03f5753eb79c04a20",
".git/index": "e29f044ae19c5ce1694cfba8181e87b5",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "50f887b1b312b97688d44b458bb913fe",
"assets/NOTICES": "b5262d36617071759a34d677a28d2b7e",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "07e64fd37bfc2ed070bc394a2150dca4",
"assets/fonts/MaterialIcons-Regular.otf": "71747455115d0ad6ca16ebdc72351aa5",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/03.png": "47e92dbbcf52dd5560e9491597d9d2e8",
"assets/assets/imgs/02.png": "4cb4496229a5cb3c68bcd97f99c4fb91",
"assets/assets/imgs/04.png": "c1db745e69f1cac3958698b4c7775fb6",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/flutter_logo.webp": "36fc5ea61c3bac65a3eb3715f20a7581",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/1.png": "f69c7034539895d851021d6626950c55",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
