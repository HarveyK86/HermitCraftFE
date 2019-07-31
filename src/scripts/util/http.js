define(["jquery"], function($) {
  var self = {
    config: {
      cache: {
        // empty
      },
      pending: "pending",
      pending_wait_millis: 100
    }
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("http :: __init");
    },
    get: function(url, callback) {
      console.log("http :: get", url, callback);
      if (self.config.cache[url]) {
        if (self.config.cache[url] === self.config.pending) {
          setTimeout(function() {
            self.get(url, callback);
          }, self.config.pending_wait_millis);
        } else if (callback) {
          callback(self.config.cache[url]);
        }
      } else {
        self.config.cache[url] = self.config.pending;
        $.get(url, function(response) {
          self.config.cache[url] = response;
          self.get(url, callback);
        });
      }
    }
  });
  inst.__init();
  return inst;
});
