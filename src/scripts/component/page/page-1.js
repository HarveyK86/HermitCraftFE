/* global $ */
define([], function() {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($content, template, query) {
      console.log("page-1 :: __init", $content, template, query);
      $content.empty();
      $content.append(template({
        active: query
      }));
    }
  });
});
