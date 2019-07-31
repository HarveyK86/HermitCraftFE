define(["jquery"], function($) {
  var self = {
    config: {
      // empty
    }
  };
  return $.extend(self, {
    __init: function($component, html) {
      console.log("header :: __init", $component, html);
      $component.replaceWith(html);
    }
  });
});
