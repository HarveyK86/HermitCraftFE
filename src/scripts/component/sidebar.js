/* global $ */
define(["util/config", "util/route"], function(config, route) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("sidebar :: __init", $component, template);
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
        $component.empty();
        $component.append(template({
          tabs: active_page.tabs,
          active: active_tab.slug
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
