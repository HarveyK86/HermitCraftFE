define(["jquery", "util/config", "util/hash"], function($, config, hash) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("header :: __init", $component, template);
      hash.register_listener(function(hash) {
        $component.empty();
        $component.append(template({
          name: config.name,
          pages: config.pages,
          active: hash
        }));
      });
    }
  });
});
