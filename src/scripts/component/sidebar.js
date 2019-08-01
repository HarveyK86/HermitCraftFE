/* global $ */
define([], function() {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($component, template) {
      console.log("sidebar :: __init", $component, template);
      $component.replaceWith(template({
        // empty
      }));
    }
  });
});
