/* global $, _ */
define(["util/component", "util/config", "util/http", "util/route"], function(component, config, http, route) {
  var self = {
    selector: ".content"
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("page :: __init", $component, template);
      $component.empty();
      $component.append(template({
        // empty
      }));
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
        if (!$("link#" + active_page.slug).length) {
          $("head").append('<link id="' + active_page.slug + '" href="/css/component/page/' + active_page.slug + '.min.css" rel="stylesheet">');
        }
        require(["component/page/" + active_page.slug], function(controller) {
          http.get("/component/page/" + active_page.slug + ".html", function(html) {
            controller.__init($(self.selector), _.template(html), active_page, active_tab);
            component.render_all();
          });
        });
      });
    }
  });
});
