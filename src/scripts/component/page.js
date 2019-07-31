define(["jquery", "underscore", "util/component", "util/hash", "util/http"], function($, _, component, hash, http) {
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
      hash.register_listener(function(hash) {
        if (!$("link#" + hash).length) {
          $("head").append('<link id="' + hash + '" href="/css/component/page/' + hash + '.min.css" rel="stylesheet">');
        }
        require(["component/page/" + hash], function(controller) {
          http.get("/component/page/" + hash + ".html", function(html) {
            controller.__init($(self.selector), _.template(html));
            component.render_all();
          });
        });
      });
    }
  });
});
