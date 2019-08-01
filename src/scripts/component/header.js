/* global $ */
define(["util/config", "util/route"], function(config, route) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("header :: __init", $component, template);
      route.register_hash_listener(function(hash) {
        var active_page = config.pages[0];
        for (var i = 0; i < config.pages.length; i++) {
          if (config.pages[i].slug === hash) {
            active_page = config.pages[i];
          }
        }
        $component.empty();
        $component.append(template({
          name: config.name,
          pages: config.pages,
          active: active_page.slug
        }));
      });
    }
  });
});
