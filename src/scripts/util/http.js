/* global $ */
define([], function() {
  var self = {
    cache: {
      // empty
    },
    pending: "pending",
    pending_wait_millis: 100
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("http :: __init");
    },
    get: function(url, callback) {
      console.log("http :: get", url, callback);
      if (self.cache[url]) {
        if (self.cache[url] === self.pending) {
          setTimeout(function() {
            self.get(url, callback);
          }, self.pending_wait_millis);
        } else if (callback) {
          callback(self.cache[url]);
        }
      } else {
        self.cache[url] = self.pending;
        $.get(url, function(response) {
          self.cache[url] = response;
          self.get(url, callback);
        });
      }
    }
  });
  inst.__init();
  return inst;
});
