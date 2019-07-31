define(["jquery"], function($) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($content, template) {
      console.log("page-1 :: __init", $content, template);
      $content.empty();
      $content.append(template({
        // empty
      }));
    }
  });
});
