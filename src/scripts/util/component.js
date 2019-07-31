define(["jquery", "util/http"], function($, http) {
  var self = {
    config: {
      selector: ".component"
    }
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("component :: __init");
    },
    render_all: function(callback) {
      console.log("component :: render_all", callback);
      var $components = $(self.config.selector);
      var count = $components.length;
      if (count) {
        $components.each(function() {
          var $component = $(this);
          var data = $component.data();
          if(!$("link#" + data.component).length) {
            $("head").append('<link id="' + data.component + '" href="/css/component/' + data.component + '.min.css" rel="stylesheet">');
          }
          require(["component/" + data.component], function(controller) {
            http.get("/component/" + data.component + ".html", function(html) {
              controller.__init($component, html);
              count--;
              if (!count) {
                self.render_all(callback);
              }
            });
          });
        });
      } else if (callback) {
        callback();
      }
    }
  });
  inst.__init();
  return inst;
});
