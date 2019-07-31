'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
      clean: {
        all: 'dist',
        html: 'dist/*.html',
        scripts: 'dist/scripts'
      },
      htmlmin: {
        html: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: [{
            expand: true,
            cwd: 'src',
            src: '**/*.html',
            dest: 'dist'
          }]
        }
      },
      uglify: {
        scripts: {
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
      },
      watch: {
        html: {
          files: ['src/**/*.html'],
          tasks: ['clean:html', 'htmlmin:html']
        },
        srcipts: {
          files: ['src/scripts/**/*.js'],
          tasks: ['clean:scripts', 'uglify:scripts']
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean:all', 'htmlmin:html', 'uglify:scripts']);

};
