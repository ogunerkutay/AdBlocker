const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.googleadservices.com/pagead/*",
	"*://*.youtube.com/pagead/*",
	"*://*.youtube.com/api/*", //bu ve youtubei blokluyken anasayfa bile yüklenmiyor
	"*://*.googleadservices.com/pagead/*",
	//"*://*.youtube.com/youtubei/*", //sayfaların redirectionundan sorumlu
	//"*://*.googlevideo.com/*", //videolar ve reklamlar buradan geliyor
	"*://*.ggpht.com/*",
	//"*://*.ytimg.com/vi/*", //video resimleri buradan geliyor
	"*://*.google.com.tr/pagead/*",
	"*://*.donanimhaber.com/ads/*",
	"*://*.media-amazon.com/images/*",
	"*://*.servedbyadbutler.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
