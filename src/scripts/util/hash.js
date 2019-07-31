define(["jquery", "underscore"], function($, _) {
  var self = {
    listeners: []
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("hash :: __init");
      $(window).on("hashchange", function() {
        _.each(self.listeners, function(listener) {
          self.get(listener);
        });
      });
    },
    register_listener: function(callback) {
      console.log("hash :: register_listener", callback);
      self.listeners.push(callback);
      self.get(callback);
    },
    get: function(callback) {
      if (callback) {
        callback(window.location.hash.substr(1));
      }
    }
  });
  inst.__init();
  return inst;
});
