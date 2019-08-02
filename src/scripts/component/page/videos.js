/* global $, _ */
define(["api/youtube"], function(youtube) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($content, template, page_config, hermit) {
      console.log("videos :: __init", $content, page_config, hermit);
      var seo_template = _.template(page_config.hermit_seo);
      $content.empty();
      $content.append(template({
        page: page_config,
        hermit: hermit,
        hermit_seo: seo_template({
          hermit: hermit
        })
      }));
    }
  });
});
