/* global $ */
define([], function() {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($content, template, page, tab) {
      console.log("hermits :: __init", $content, template, page, tab);
      $content.empty();
      $content.append(template({
        page: page,
        active: tab
      }));
    }
  });
});
