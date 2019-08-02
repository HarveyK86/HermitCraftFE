/* global $, _ */
define(["util/config", "util/route"], function(config, route) {
  var self = {
    delimiter: " | "
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("title :: __init");
      route.register_any_listener(function(hash, query) {
        var active_page = config.pages[0];
        for (var i = 0; i < config.pages.length; i++) {
          if (config.pages[i].slug === hash) {
            active_page = config.pages[i];
          }
        }
        var active_hermit = config.hermits[0];
        for (var i = 0; i < config.hermits.length; i++) {
          if (config.hermits[i].slug === query) {
            active_hermit = config.hermits[i];
          }
        }
        var seo_template = _.template(active_page.hermit_seo);
        $(document).attr("title", seo_template({
          hermit: active_hermit
        }) + self.delimiter + active_page.seo + self.delimiter + config.seo);
      });
    }
  });
  inst.__init();
  return inst;
});