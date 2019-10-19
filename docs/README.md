[top10-seo-list-for-developers](README.md)

# top10-seo-list-for-developers

## Index

### Enumerations

* [MicrodataAttrs](enums/microdataattrs.md)

### Classes

* [AllowedInRobotsTxt](classes/allowedinrobotstxt.md)
* [BaseMetric](classes/basemetric.md)
* [CDPSessionClient](classes/cdpsessionclient.md)
* [InternalLinks](classes/internallinks.md)
* [IsNoIndex](classes/isnoindex.md)
* [IsResponsive](classes/isresponsive.md)
* [LinkHealthChecker](classes/linkhealthchecker.md)
* [MicrodataExtractor](classes/microdataextractor.md)
* [PageRenderService](classes/pagerenderservice.md)
* [PageRequestHandler](classes/pagerequesthandler.md)
* [PerformanceMetrics](classes/performancemetrics.md)
* [RedirectChain](classes/redirectchain.md)
* [ResponseStatus](classes/responsestatus.md)
* [SchemaOrg](classes/schemaorg.md)
* [TfIdfScore](classes/tfidfscore.md)

### Interfaces

* [IAllowedInRobotsTxt](interfaces/iallowedinrobotstxt.md)
* [ILinkData](interfaces/ilinkdata.md)
* [IMetric](interfaces/imetric.md)
* [IMetricValue](interfaces/imetricvalue.md)
* [IMiccroDataScope](interfaces/imiccrodatascope.md)
* [IRawLinkData](interfaces/irawlinkdata.md)
* [IRedirectChainItem](interfaces/iredirectchainitem.md)

### Variables

* [adRejections](README.md#const-adrejections)
* [analyticsRejections](README.md#const-analyticsrejections)
* [apiRouter](README.md#const-apirouter)
* [blockedResourceTypes](README.md#const-blockedresourcetypes)
* [chromiumSwitches](README.md#const-chromiumswitches)
* [metricsList](README.md#const-metricslist)
* [valueAttrMappings](README.md#const-valueattrmappings)

### Functions

* [getPageHealth](README.md#getpagehealth)
* [isValidUrl](README.md#isvalidurl)

### Object literals

* [launchOptions](README.md#const-launchoptions)

## Variables

### `Const` adRejections

• **adRejections**: *string[]* =  [
  "*//*.googlesyndication.com/**",
  "*//*.2mdn.net/**",
  "*//*.criteo.net/**",
  "*//*.outbrain.com/**",
  "*//*.doubleclick.net/**",
  "*//*.amazon-adsystem.com/**",
  "*//*.taboola.com/**",
  "*//*.adnxs.com/**",
  "*://*.moatads.com/**",
  "*://*.adform.net/**"
]

*Defined in [page-rendering/config/constants/ad-rejections.ts:1](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/ad-rejections.ts#L1)*

___

### `Const` analyticsRejections

• **analyticsRejections**: *string[]* =  [
  "*//*.google-analytics.com/**",
  "*//*.googletagmanager.com/**",
  "*//*doubleclick.net/**",
  "*//*.facebook.net/**",
  "*//*.twitter.com/**",
  "*//*.coremetrics.com/**",
  "*//*.scorecardresearch.com/**",
  "*//*.quantserve.com/**",
  "*//*.maxymiser.n/**et/**",
  "*//*.mxpnl.com/**",
  "*//*.statse.webtrendslive.com/**",
  "*//*.webtrends.com/**"
]

*Defined in [page-rendering/config/constants/analytics-rejections.ts:1](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/analytics-rejections.ts#L1)*

___

### `Const` apiRouter

• **apiRouter**: *Router* =  Router()

*Defined in [api/routes.ts:5](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/api/routes.ts#L5)*

___

### `Const` blockedResourceTypes

• **blockedResourceTypes**: *ResourceType[]* =  ["image", "media", "font", "texttrack", "eventsource"]

*Defined in [page-rendering/config/constants/blocked-resource-types.ts:3](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/blocked-resource-types.ts#L3)*

___

### `Const` chromiumSwitches

• **chromiumSwitches**: *string[]* =  [
  "--blink-settings=allowFileAccessFromFileURLs=false",
  "--process-per-tab",
  "--disk-cache-dir=./Temp/browser-cache-disk",
  "--disable-notifications",
  "--disable-remote-fonts",
  "--disable-webgl",
  "--disable-translate",
  "--disable-extensions",
  "--disable-background-networking",
  "--safebrowsing-disable-auto-update",
  "--disable-sync",
  "--metrics-recording-only",
  "--disable-default-apps",
  "--mute-audio",
  "--no-first-run",
  "--disable-http2",
  "--disable-gesture-requirement-for-media-playback",
  "--disable-setuid-sandbox",
  "--no-sandbox",
  "--disable-gl-drawing-for-tests",
  "--enable-fast-unload",
  "--enable-tcp-fastopen",
  "--disable-timeouts-for-profiling",
  "--disable-speech-api",
  "--disable-software-rasterizer",
  "--disable-databases",
  "--disable-glsl-translator",
  "--disable-2d-canvas-clip-aa",
  "--disable-2d-canvas-image-chromium",
  "--disable-3d-apis",
  "--disable-accelerated-2d-canvas",
  "--disable-accelerated-jpeg-decoding",
  "--disable-accelerated-mjpeg-decode",
  "--disable-bookmark-reordering",
  "--disable-boot-animation",
  "--disable-canvas-aa",
  "--disable-cast-streaming-hw-encoding",
  "--disable-checker-imaging",
  "--disable-cloud-import",
  "--disable-component-cloud-policy",
  "--disable-component-extensions-with-background-pages",
  "--disable-component-update",
  "--disable-composited-antialiasing",
  "--disable-contextual-search",
  "--disable-datasaver-prompt",
  "--disable-default-apps",
  "--disable-demo-mode",
  "--disable-device-discovery-notifications",
  "--disable-dinosaur-easter-egg",
  "--disable-es3-apis",
  "--disable-flash-3d",
  "--disable-flash-stage3d",
  "--disable-gesture-typing",
  "--disable-login-animations",
  "--disable-low-latency-dxva",
  "--disable-low-res-tiling",
  "--disable-media-session-api",
  "--disable-offer-upload-credit-cards",
  "--disable-pepper-3d",
  "--disable-pinch",
  "--disable-print-preview",
  "--disable-remote-playback-api",
  "--disable-renderer-accessibility",
  "--disable-rgba-4444-textures",
  "--disable-rtc-smoothness-algorithm",
  "--disable-suggestions-ui",
  "--disable-third-party-keyboard-workaround",
  "--disable-threaded-animation",
  "--disable-vaapi-accelerated-video-encode",
  "--disable-virtual-keyboard-overscroll",
  "--disable-voice-input",
  "--disable-volume-adjust-sound",
  "--disable-webgl",
  "--disable-webrtc-hw-encoding",
  "--disable-webrtc-hw-decoding",
  "--disable-dev-shm-usage"
]

*Defined in [page-rendering/config/constants/chrome-switches.ts:1](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/chrome-switches.ts#L1)*

___

### `Const` metricsList

• **metricsList**: *[IsResponsive](classes/isresponsive.md) | [IsNoIndex](classes/isnoindex.md) | [InternalLinks](classes/internallinks.md) | [PerformanceMetrics](classes/performancemetrics.md) | [TfIdfScore](classes/tfidfscore.md) | [ResponseStatus](classes/responsestatus.md) | [SchemaOrg](classes/schemaorg.md) | [RedirectChain](classes/redirectchain.md) | [AllowedInRobotsTxt](classes/allowedinrobotstxt.md)[]* =  [
  IsResponsive,
  IsNoIndex,
  InternalLinks,
  PerformanceMetrics,
  TfIdfScore,
  ResponseStatus,
  SchemaOrg,
  RedirectChain,
  AllowedInRobotsTxt
]

*Defined in [metrics/metrics-list.ts:11](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metrics-list.ts#L11)*

___

### `Const` valueAttrMappings

• **valueAttrMappings**: *object[]* =  [
  {
    tags: ["audio", "embed", "iframe", "img", "source", "track", "video"],
    attr: "src"
  },
  {
    tags: ["a", "area", "link"],
    attr: "href"
  },
  {
    tags: ["object"],
    attr: "data"
  },
  {
    tags: ["meta"],
    attr: "content"
  }
]

*Defined in [metrics/metric-items/schema-org/extraction/prop-value.mappings.ts:1](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/prop-value.mappings.ts#L1)*

## Functions

###  getPageHealth

▸ **getPageHealth**(`req`: Request, `res`: Response): *Promise‹Response›*

*Defined in [api/page-health.route.ts:6](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/api/page-health.route.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | Request |
`res` | Response |

**Returns:** *Promise‹Response›*

___

###  isValidUrl

▸ **isValidUrl**(`url`: string): *boolean*

*Defined in [utils/url.utils.ts:3](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/utils/url.utils.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

## Object literals

### `Const` launchOptions

### ▪ **launchOptions**: *object*

*Defined in [page-rendering/config/constants/launch-options.ts:5](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/launch-options.ts#L5)*

###  args

• **args**: *string[]* =  chromiumSwitches

*Defined in [page-rendering/config/constants/launch-options.ts:6](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/launch-options.ts#L6)*

###  headless

• **headless**: *true* = true

*Defined in [page-rendering/config/constants/launch-options.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/launch-options.ts#L8)*

###  userDataDir

• **userDataDir**: *string* = "user-data"

*Defined in [page-rendering/config/constants/launch-options.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/page-rendering/config/constants/launch-options.ts#L7)*
