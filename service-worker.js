if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const d=e=>a(e,f),t={module:{uri:f},exports:r,require:d};s[f]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-0864d709.js",revision:"43130a5da018bf08958e3524b759f13a"},{url:"assets/404.html-32d5d192.js",revision:"767836dc23b8d2228d857260ce64e683"},{url:"assets/achievements.html-27f51021.js",revision:"03e8c69508505f64c8469e018e4af963"},{url:"assets/achievements.html-45b07921.js",revision:"0e34bfabe0d33b5aa6a510bf23a4a026"},{url:"assets/achievements.html-5cf193bb.js",revision:"c3be4cd3adc3bc5a925cd9283ed90bd0"},{url:"assets/achievements.html-d587d759.js",revision:"c3be4cd3adc3bc5a925cd9283ed90bd0"},{url:"assets/app-75dedc01.js",revision:"7209f92f0ab0d716d532a995d9209daa"},{url:"assets/artifact-rating-rules.html-2550311a.js",revision:"fe6d5b20b24fc6cef45ced11b6d3371b"},{url:"assets/artifact-rating-rules.html-2ad9f1be.js",revision:"a40d6f4cb9ff0d6ecb8af89da773f7f1"},{url:"assets/artifact-rating-rules.html-322d1054.js",revision:"a40d6f4cb9ff0d6ecb8af89da773f7f1"},{url:"assets/artifact-rating-rules.html-6f9d5a47.js",revision:"a99a01284dd6a4c2c84c34c0585a71f6"},{url:"assets/auto-5a6868c8.js",revision:"0e4085cbbd1b14379623b9235b3c9f13"},{url:"assets/bug-report.html-003189b0.js",revision:"909b925d85c31d43f1c3f2cc0a618715"},{url:"assets/bug-report.html-665f088a.js",revision:"3e234cc1d963f9b0db9255e056120262"},{url:"assets/bug-report.html-b552c51c.js",revision:"b0ab472e2cf5a752e93b9d8cc1252701"},{url:"assets/bug-report.html-f69951f4.js",revision:"3274c4af5177fd78bee641bfd34c8f28"},{url:"assets/character-data.html-0eec3e5b.js",revision:"531ad912ccf941ef2f62cf9fbe19af7a"},{url:"assets/character-data.html-1c1cfa19.js",revision:"abf0ecd175396bfd101e1b0525be9f34"},{url:"assets/character-data.html-475bdb70.js",revision:"587a14e2ef759bcdbe54986853f8408c"},{url:"assets/character-data.html-7cbcfb0c.js",revision:"be7cdbb5ba3d34f33156c25153c1ada0"},{url:"assets/character-wiki.html-0fe53523.js",revision:"3b50a3f727132b62eeec1d13469b242f"},{url:"assets/character-wiki.html-509d6ec0.js",revision:"1cffb97865c2e8f1f9ad6c44aa61957d"},{url:"assets/character-wiki.html-8f26f5ab.js",revision:"402f79fa9c77e356031a63372bc6dc93"},{url:"assets/character-wiki.html-c3f4fc0d.js",revision:"887ecc35683c4a5ade1570cc3ccbe0d5"},{url:"assets/community.html-4259ed5c.js",revision:"78d9fed5197844c2c2e29e4845bdd846"},{url:"assets/community.html-b313a1f6.js",revision:"9620e66c082549599223a01e141eca05"},{url:"assets/daily-notes.html-010f2176.js",revision:"9a40b86e3ffc280b207c3179469c9fdc"},{url:"assets/daily-notes.html-0811c141.js",revision:"d1e7033671d494f51b8e460a1ddab0d4"},{url:"assets/daily-notes.html-29eff528.js",revision:"f7d90f1498ae1fbd17d32be2fbf00a30"},{url:"assets/daily-notes.html-7e7d6130.js",revision:"667e38b410959dc8cdf657c3c7db4ddb"},{url:"assets/develop-plan.html-03e71559.js",revision:"80c6a87ea0f793091ebfa701ef8dff0c"},{url:"assets/develop-plan.html-304a21a8.js",revision:"accf99ce37306ec69f04b10c3c4aa339"},{url:"assets/develop-plan.html-5365831e.js",revision:"f958237044ad8984d5e04e02cf5ec2a4"},{url:"assets/develop-plan.html-c6ac2429.js",revision:"b7419b2cd53c5216dc69800c20c6b29a"},{url:"assets/diagram-definition.0faef4c2-4dda171c.js",revision:"a60e9e560547fcf23096d6233149cdab"},{url:"assets/flowchart.parse-0007e96c.js",revision:"5fce68ee48d56167c2948760a4066c2d"},{url:"assets/framework-2050cf2c.js",revision:"bc138f6da7d53f2337cf81f328981942"},{url:"assets/Gacha-system-and-export-principal.html-3d8f95e8.js",revision:"1f2ab008a4c26d86a182ad76c4c8239a"},{url:"assets/Gacha-system-and-export-principal.html-8d0fa850.js",revision:"5b2642bee3b1bb1b6a75be8039bfd438"},{url:"assets/Gacha-system-and-export-principal.html-abf4ddb4.js",revision:"1f2ab008a4c26d86a182ad76c4c8239a"},{url:"assets/Gacha-system-and-export-principal.html-cd4faf5f.js",revision:"5fae7d3affb63fedee766a9266d25263"},{url:"assets/game-launcher.html-08956561.js",revision:"e63051e0d466a39edc5e8d81f55df784"},{url:"assets/game-launcher.html-29b84590.js",revision:"12854acfff23be74322208448469fa08"},{url:"assets/game-launcher.html-50a156eb.js",revision:"9c3821cf3a3f40451d6cca1ce151b029"},{url:"assets/game-launcher.html-d367bfe6.js",revision:"abe62f1ee82facb66b2445e18f224130"},{url:"assets/get-stoken-cookie-from-the-third-party.html-a02de77c.js",revision:"ebcfb53c1a46cddccf0cdcfdd8a2d0b8"},{url:"assets/get-stoken-cookie-from-the-third-party.html-a069d9e6.js",revision:"ae6717b78f93a31fdd8496133bcd0a17"},{url:"assets/get-stoken-cookie-from-the-third-party.html-c037f77d.js",revision:"5561ce28d95259edd515657584ae1b8c"},{url:"assets/get-stoken-cookie-from-the-third-party.html-f336e33e.js",revision:"84b656aa4b520f1971ef5caef21ceb88"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/how-to.html-437f0776.js",revision:"d682270a5c98a09107e40924eadeaad0"},{url:"assets/how-to.html-702e4cb9.js",revision:"4ede9358479465c2f0db1e78c4bb2481"},{url:"assets/how-to.html-8debd350.js",revision:"5594d0ac96aa3d537488a84a8511b282"},{url:"assets/how-to.html-eb31d630.js",revision:"a207114557ecf4519d53f8aa869ec37f"},{url:"assets/HttpRequestException.html-2143ce68.js",revision:"8f8cc6e37114a0280b0d89f1c3f5faf7"},{url:"assets/HttpRequestException.html-30830cd8.js",revision:"e44a79fe3ec4a119bc63ce4bf296c684"},{url:"assets/HttpRequestException.html-a0acbb00.js",revision:"8f8cc6e37114a0280b0d89f1c3f5faf7"},{url:"assets/HttpRequestException.html-eec3d65c.js",revision:"47d7e866976b1a0a9a8c0f6329ae4c44"},{url:"assets/hutao-API.html-bf294432.js",revision:"878eb29652de8e2d4cdcaa9b21db2e6d"},{url:"assets/hutao-API.html-cec29434.js",revision:"8cb4149d3e13cfd10e5ad75c3318814b"},{url:"assets/hutao-API.html-d894b7e4.js",revision:"be4a722e7f89c4e06e540819802966fe"},{url:"assets/hutao-API.html-f638b185.js",revision:"bc63866997154cf39ce5f9f546e125bc"},{url:"assets/hutao-settings.html-418b1f2c.js",revision:"88f6daea43af8940432dfb4695ec7aa3"},{url:"assets/hutao-settings.html-4c52a2e7.js",revision:"77fcba5998bdb9a730fd55d8b2d9678c"},{url:"assets/hutao-settings.html-ecc905c0.js",revision:"9176d2e52237be4a9fd3ce75882a2fd5"},{url:"assets/hutao-settings.html-f7bc73b8.js",revision:"5a454384166eb312ec008a2f038b410e"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index.html-00b54548.js",revision:"289da15ad33f2f1167362c60d126e8ef"},{url:"assets/index.html-12187913.js",revision:"63b588313772a87d12382169ffcfed49"},{url:"assets/index.html-19d09097.js",revision:"e729fc819e622d7b3d989482f5cb59fd"},{url:"assets/index.html-2bc60034.js",revision:"ce207c465f671f6bf09b6747c4351118"},{url:"assets/index.html-318a4b43.js",revision:"fc60f4e715ee94d2b2ff1be6c6032ea0"},{url:"assets/index.html-31b9fd98.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-4f0d6788.js",revision:"57e712e4ca15d31bfc1f6cba9b54c883"},{url:"assets/index.html-534cbddc.js",revision:"155d89b1b295a149a383d2a1a8f90d66"},{url:"assets/index.html-59219388.js",revision:"d6dd7b2735dcfc66bc1d5f6993d169a3"},{url:"assets/index.html-5eeca8dc.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-60c96614.js",revision:"18d82e7c24d6435c807cfed62bd41066"},{url:"assets/index.html-6108273b.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-79b9b84e.js",revision:"2898d55fa0b6dabfeffe7d9aabfee175"},{url:"assets/index.html-a508a192.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-b78e8cf1.js",revision:"223f1003a8a28b0011c7b7a1fb098763"},{url:"assets/index.html-c0b215e3.js",revision:"63b588313772a87d12382169ffcfed49"},{url:"assets/index.html-c412ed13.js",revision:"e729fc819e622d7b3d989482f5cb59fd"},{url:"assets/index.html-c8b6cf82.js",revision:"f18219a783a1cdd1c4a9e6ef003b3431"},{url:"assets/index.html-cc7a9c8b.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-de9c2355.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markmap.html-0f0f34c6.js",revision:"5e8ae701e7f5764c10d55096c2a2fd1b"},{url:"assets/markmap.html-35e571d4.js",revision:"5826e11387c4dd2c356cf69102b3895b"},{url:"assets/markmap.html-c8233cb5.js",revision:"5826e11387c4dd2c356cf69102b3895b"},{url:"assets/markmap.html-f4ccea80.js",revision:"0086885c383084d2b3780e3dc111ec64"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min-dd10a84b.js",revision:"5c80717ad8eccbb218bb6138d6725d79"},{url:"assets/mermaid.esm.min-bc08675d.js",revision:"e0d3e0388f4fdfd93ab5b9a67d2ab92b"},{url:"assets/mhy-account-switch.html-0482798f.js",revision:"21749fd3e01d28697fb323ba5e658b81"},{url:"assets/mhy-account-switch.html-c5e0c822.js",revision:"c18cc4c7fa7543881ddee120786b0c0e"},{url:"assets/mhy-account-switch.html-d713d3a7.js",revision:"41b8279a296100065c92746da196e3f5"},{url:"assets/mhy-account-switch.html-e9ad7c01.js",revision:"631ba96c2ce7f7f9096e6a3c0a11fa86"},{url:"assets/mihoyo-risk-tip.html-0cc42bbd.js",revision:"c67ac88f7a12ffaac543367c8ad382d3"},{url:"assets/mihoyo-risk-tip.html-1202309e.js",revision:"ca9e92e5c51e10acee3831608afaceb3"},{url:"assets/mihoyo-risk-tip.html-75cfdf1a.js",revision:"b2f8cb3c569e84e8203bf1a3c1cb5186"},{url:"assets/mihoyo-risk-tip.html-b6dfe79e.js",revision:"dc531981f40eac608d447c7140de0c49"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/privacy-notice.html-63f617f2.js",revision:"38a637900f0e1130d87ffac7c377d5a4"},{url:"assets/privacy-notice.html-6cb5a329.js",revision:"a05be9ab5a16f88f8f1d84eb4388c63e"},{url:"assets/privacy-notice.html-7a160e19.js",revision:"049d9eda61455a3765aad9e8fe119b8d"},{url:"assets/privacy-notice.html-c8d33cc7.js",revision:"a05be9ab5a16f88f8f1d84eb4388c63e"},{url:"assets/project.html-2471e533.js",revision:"09faf50a75a7ee356ecf3bc83a5bd4d7"},{url:"assets/project.html-3e4ddd91.js",revision:"04405c3b6c05f9a69b04af7c09902822"},{url:"assets/project.html-d154f424.js",revision:"944765a7f1425fc87d1435083a9cf97f"},{url:"assets/project.html-ee74980c.js",revision:"7de522d3356c913547f933e11724254a"},{url:"assets/quick-start.html-1aff70d5.js",revision:"7e6f29e87927555f17b9236c821de463"},{url:"assets/quick-start.html-3cdc8f2a.js",revision:"3ac0186fc9f1347c6bfaab5923c03293"},{url:"assets/quick-start.html-90efb2be.js",revision:"8e8fc2abe4e793902c28069c2150c890"},{url:"assets/quick-start.html-f867c09e.js",revision:"ef43e70df9631f49da16a369200053b9"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/SearchResult-7a67e9f5.js",revision:"c97da9d7f3717c09a2f6735a3982aabf"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/star-request.html-0a6171e5.js",revision:"d751def7b0811479bf86b588130edbd2"},{url:"assets/star-request.html-a111ddc0.js",revision:"29506bc7e5c220b2163251142198e58d"},{url:"assets/style-5104b38f.css",revision:"12b60cf796db9a5dc6ca4c36d2269d11"},{url:"assets/symposium1.html-3ced5dc3.js",revision:"39bd97f0885d92a03d1163dfcd54df40"},{url:"assets/symposium1.html-97fedc99.js",revision:"8aa01f1eaf6d24cfd9e547190ebdc6b3"},{url:"assets/symposium1.html-b33e3d7f.js",revision:"a11645898900eabe3d5170160927d8ef"},{url:"assets/symposium1.html-fa167b8f.js",revision:"e6ae146155d74880d41ba2ab0ed83902"},{url:"assets/symposium2.html-86329c7b.js",revision:"c526862aaf9aa1d4afa1288b6291124c"},{url:"assets/symposium2.html-b5df9842.js",revision:"7d41971ac678bbe94ac2195d84012636"},{url:"assets/symposium2.html-bad37c5f.js",revision:"2dee193aee87031a920e9bee74e1bd66"},{url:"assets/symposium2.html-fb7d6fad.js",revision:"2dee193aee87031a920e9bee74e1bd66"},{url:"assets/tos.html-00997ad6.js",revision:"fb6690a766227696a44084d7decc8877"},{url:"assets/tos.html-5b085922.js",revision:"dfd653dc3bd2d2005e86776880421867"},{url:"assets/tos.html-6a9f1d6e.js",revision:"2f7fc3fad15967d8880fdb169bd7949e"},{url:"assets/tos.html-830e1c50.js",revision:"7c14cfe5948f81661fa3dba1f8da5576"},{url:"assets/vue-repl-92077a0a.js",revision:"8871e3da14e400089ea9974d58fb647b"},{url:"assets/VuePlayground-bb87e62a.js",revision:"34623f49c2c10a34bdeafbfba57d46c3"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-041f1bea.js",revision:"23c688df06d864c399ff628652aaaf8c"},{url:"assets/weapon-wiki.html-33bb156f.js",revision:"23c688df06d864c399ff628652aaaf8c"},{url:"assets/weapon-wiki.html-39644c93.js",revision:"2099b42c4f1b54ac622ccc15f881cb59"},{url:"assets/weapon-wiki.html-d9fd70e8.js",revision:"d49f3d98ba48841b539744a7d710e81f"},{url:"assets/why.html-2a2ae349.js",revision:"b809554f68cc8529573388e911b9d994"},{url:"assets/why.html-4f3eddc8.js",revision:"ff49d4eba200ea7fe77febe683385a10"},{url:"assets/why.html-6c589158.js",revision:"c3d82e405081271638af56ef72a7371c"},{url:"assets/why.html-7f1768ad.js",revision:"7883f99bd946462617dd83609b07ccb1"},{url:"assets/wish-export.html-20b273d0.js",revision:"1f7b0093881bd1085d6d6a8c5cd19101"},{url:"assets/wish-export.html-2131fc6d.js",revision:"f94bca2b3760196331b3b1adb987b830"},{url:"assets/wish-export.html-453bb400.js",revision:"065c1127d0d64047acf4cc8fa32fb97c"},{url:"assets/wish-export.html-a631d689.js",revision:"de7081fe1e4132ce1a6b64756671e82c"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"404.html",revision:"95e9ca284eecf929c72e339f8577c7a5"},{url:"community.html",revision:"cc6bed80a2b0fe5f9dd204f611939d4b"},{url:"development-log/index.html",revision:"42a696abae1bbaa58c80698d7681563f"},{url:"development-log/symposium1.html",revision:"c0f69bfa32b631c3974967185e895ffa"},{url:"development-log/symposium2.html",revision:"70898bd95bda4f67a96679e79e0a1023"},{url:"en/development-log/index.html",revision:"51874dfe0d4d28e72f1e3a8a71c935d9"},{url:"en/development-log/symposium1.html",revision:"1ab98782f6990a023498edacd131eb0f"},{url:"en/development-log/symposium2.html",revision:"95753d48fe7184c4ddd2e9bb4c5cc084"},{url:"en/FAQ/artifact-rating-rules.html",revision:"345b8a4ded9c80dc0a122d10879e3717"},{url:"en/FAQ/Gacha-system-and-export-principal.html",revision:"28c9d01fd2c1e232e57b4247b2c68e42"},{url:"en/FAQ/get-stoken-cookie-from-the-third-party.html",revision:"b0a8ddb65a8495fe3e1bb72fc7415eba"},{url:"en/FAQ/how-to.html",revision:"687f22aac44477651f4f77b848f9b737"},{url:"en/FAQ/HttpRequestException.html",revision:"ed47ebdfbfdf50f4424456a0213bb662"},{url:"en/FAQ/index.html",revision:"f5735ce7603dc762bbc9bb6b2c7afcda"},{url:"en/FAQ/mihoyo-risk-tip.html",revision:"415cc5e0a773c0b02e95023c5544ab98"},{url:"en/FAQ/why.html",revision:"90589a42b61c501b670e4fbb14e76a39"},{url:"en/features/achievements.html",revision:"6725b76e9c8795737155cfab8bd5e14a"},{url:"en/features/character-data.html",revision:"9e462ab63d80abb2a2befd0b4d5afe74"},{url:"en/features/character-wiki.html",revision:"e06614013b40003533f219fd9d8d9466"},{url:"en/features/daily-notes.html",revision:"f7c9e4d3b1cf9c534f27683ff4bddba0"},{url:"en/features/develop-plan.html",revision:"a0d13a51fc8b87faf1682ec879971728"},{url:"en/features/game-launcher.html",revision:"7c88616a7321cea33780890b027a7752"},{url:"en/features/hutao-API.html",revision:"43ba20804df462bffccd1b66601e4bd8"},{url:"en/features/hutao-settings.html",revision:"80741d6c082e42b9eb6fcaf1e1b2630c"},{url:"en/features/index.html",revision:"5b076f3b351bfc495af5ec547b578f0a"},{url:"en/features/mhy-account-switch.html",revision:"c430fa34e50c491861fbbcb1bb6c91b2"},{url:"en/features/weapon-wiki.html",revision:"f66cb222b210c8156d7d02c7989afcb1"},{url:"en/features/wish-export.html",revision:"298ce845e35d995a5ffc4feb0df4f5ae"},{url:"en/index.html",revision:"3e484510e9bb1b98c45c497feda1c779"},{url:"en/markmap.html",revision:"3b6ce9226e9aaf980096422bb0b34c87"},{url:"en/project.html",revision:"dd2602b5aa6fd8286bbd7ea7b71005b7"},{url:"en/quick-start.html",revision:"a27a2ddcd30d8dc13231fddebe7e0c99"},{url:"en/statements/bug-report.html",revision:"4d2527cfe743524df09694f5a0a0a752"},{url:"en/statements/index.html",revision:"9eeafd594fd39e39b9306d5182e8a8f5"},{url:"en/statements/privacy-notice.html",revision:"053ff4766c68af020bae432c1f264b0b"},{url:"en/statements/tos.html",revision:"78bf5e5533b697cd8beb0248d3cfdba6"},{url:"FAQ/artifact-rating-rules.html",revision:"2b94277ed589e5804e8122e1c8b3ab06"},{url:"FAQ/Gacha-system-and-export-principal.html",revision:"397e061fc21f39f0305d75eb7fbc5d4e"},{url:"FAQ/get-stoken-cookie-from-the-third-party.html",revision:"0bb7dba4ae2d7659c3d6fa9a8b8a2e16"},{url:"FAQ/how-to.html",revision:"38f1808e2a8f941a8a782af9637f7a93"},{url:"FAQ/HttpRequestException.html",revision:"40f1a5015175cc5df1d6920298970fad"},{url:"FAQ/index.html",revision:"3c7fb20302bc4f45b51adacf09030534"},{url:"FAQ/mihoyo-risk-tip.html",revision:"979f9381a6fee53b94ebef946497acd6"},{url:"FAQ/why.html",revision:"6643ab7f6352dd8e7f6a241e33d6d2f6"},{url:"features/achievements.html",revision:"66554307a42bf694e10980092e262091"},{url:"features/character-data.html",revision:"95da74ad0088d8df8ae13dd0186aff12"},{url:"features/character-wiki.html",revision:"86178b8cefd2543c57a48fe88ac3eb43"},{url:"features/daily-notes.html",revision:"1c1447ee7a42302ccfb7e8a66219ad8e"},{url:"features/develop-plan.html",revision:"d0745cd4b1b30fd779e45c78d7c6b282"},{url:"features/game-launcher.html",revision:"7b3fc9b77f0e1a4efd8d48cd64cc4473"},{url:"features/hutao-API.html",revision:"9dcd6010f1e7ce0a8b4d1ac831fbeb49"},{url:"features/hutao-settings.html",revision:"00bfcf6d80fef1f8b4f941e4b3792e3a"},{url:"features/index.html",revision:"77ec46ad7ee7dd93839c2453f350d20a"},{url:"features/mhy-account-switch.html",revision:"eca4f3ab73968ac342f90d4efb9754d5"},{url:"features/weapon-wiki.html",revision:"739ac8522e9c67a5fac878c07ec245b8"},{url:"features/wish-export.html",revision:"58ecbeda54ea358f1018bb7b725aa7ee"},{url:"fontlist/demo_index.html",revision:"925b49536eec61049492bf64fe28a9e6"},{url:"index.html",revision:"737f483701020e37e737ab9c9b5ea6bf"},{url:"markmap.html",revision:"313d011f4f6ce672f64e865c27eb6cfe"},{url:"markmap/zh.html",revision:"b35a18f015a5cd1b4ae885e560b2caaa"},{url:"project.html",revision:"54f5e28037b42c10d3845a209e6c5016"},{url:"quick-start.html",revision:"ca9ab10f05272109f2452854f00fe2b4"},{url:"star-request.html",revision:"78839a736f1fe112e29eddf1123a0373"},{url:"statements/bug-report.html",revision:"120b983c6f546aaa846defa44f30af0e"},{url:"statements/index.html",revision:"86b8f9e84e8e260858db211f2359b038"},{url:"statements/privacy-notice.html",revision:"6a2aa064d43513973bbb693639546a8f"},{url:"statements/tos.html",revision:"6e48b991d662eba08b9be5981687b5a7"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/chrome-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ios-152.png",revision:"b51617947bc9724dad89fa357624a671"},{url:"pwa-icon/ios-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/ios-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ms-256.png",revision:"f877e44d42504adaac6f558be4d93b3a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
