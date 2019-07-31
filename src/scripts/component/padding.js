define(["jquery"], function($) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("padding :: __init", $component, template);
      $component.replaceWith(template({
        // empty
      }));
    }
  });
});
