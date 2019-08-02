/* global $, _ */
define(["util/config", "util/http"], function(config, http) {
  var self = {
    hermit: "https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=<%= hermit.username %>&key=<%= api_key %>"
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("youtube :: __init");
    },
    get_hermit: function(hermit_config, callback) {
      console.log("youtube :: get_hermit", hermit_config, callback);
      var template = _.template(self.hermit);
      http.get(template({
        hermit: hermit_config,
        api_key: config.api_key
      }), function(response) {
        if (callback) {
          callback(response.items[0].snippet);
        }
      });
    }
  });
  inst.__init();
  return inst;
});
