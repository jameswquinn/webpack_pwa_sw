alert("Hello")
      // Load and register pre-caching Service Worker
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('service-worker.js', {
            scope: '/',
          });
        });
      }