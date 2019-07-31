define(["jquery", "util/config"], function($, config) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("header :: __init", $component, template);
      $component.replaceWith(template({
        name: config.name,
        pages: config.pages
      }));
    }
  });
});
