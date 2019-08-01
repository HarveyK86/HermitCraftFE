/* global $ */
define([], function() {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($content, template, page, tab) {
      console.log("videos :: __init", $content, page, tab);
      $content.empty();
      $content.append(template({
        page: page,
        active: tab
      }));
    }
  });
});
