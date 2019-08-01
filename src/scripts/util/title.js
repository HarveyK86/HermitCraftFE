/* global $ */
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
        var active_tab = active_page.tabs[0];
        for (var i = 0; i < active_page.tabs.length; i++) {
          if (active_page.tabs[i].slug === query) {
            active_tab = active_page.tabs[i];
          }
        }
        $(document).attr("title", active_tab.seo + self.delimiter + active_page.seo + self.delimiter + config.seo);
      });
    }
  });
  inst.__init();
  return inst;
});