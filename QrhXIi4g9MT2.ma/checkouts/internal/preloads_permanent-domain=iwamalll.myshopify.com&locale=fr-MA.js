
    (function() {
      var baseURL = "https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/runtime.latest.fr.da429ab741b94765e569.js","https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/568.latest.fr.422651047e09c054b5c8.js","https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/608.latest.fr.2fd5f7717a8213611f3e.js","https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/758.latest.fr.d75e07038948e6bc7f97.js","https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/app.latest.fr.cba4e318ee89d9594ad0.js","https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/Information.latest.fr.8ee8027678001447282d.js"];
      var styles = ["https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/568.latest.fr.853a58837a89bf4a2922.css","https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/app.latest.fr.6d95e02498dcdc6b7a81.css","https://P9kLq9fqAM12.com/shopifycloud/checkout-web/assets/739.latest.fr.cb2d2fb5c673c1375a48.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://P9kLq9fqAM12.com/s/files/1/0558/2117/2901/files/Sans_titre_20_e43f9331-2528-437c-8e47-99333516b15b_x320.png?v=1668010214"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  