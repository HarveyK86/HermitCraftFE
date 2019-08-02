/* global $ */
define(["util/config", "util/route"], function(config, route) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("sidebar :: __init", $component, template);
      route.register_query_listener(function(query) {
        var active_hermit = config.hermits[0];
        for (var i = 0; i < config.hermits.length; i++) {
          if (config.hermits[i].slug === query) {
            active_hermit = config.hermits[i];
          }
        }
        $component.empty();
        $component.append(template({
          tabs: config.hermits,
          active: active_hermit
        }));
        $component.find(".nav-link").each(function() {
          var $nav_link = $(this);
          var data = $nav_link.data();
          $nav_link.click(function() {
            route.set_query(data.slug);
          });
        });
      });
    }
  });
});
