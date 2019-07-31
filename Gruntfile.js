'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
      uglify: {
        main: {
          options: {
            mangle: false,
            sourceMap: {
              includeSources: true
            },
            compress: {
              drop_console: true
            },
            banner: '<%= banner %>'
          },
          files: [{
            expand: true,
            cwd: 'src',
            src: '**/*.js',
            dest: 'dist'
          }]
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:main']);

};
