module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['client/app.js', 'client/services/*.js', 'client/controllers/*.js'],
        dest: 'dist/app.js'
      }
    },
    ngmin:{
      a:{
        src: 'dist/app.js',
        dest: 'dist/app.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['client/test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'client/services/*.js', 'client/controllers/*.js', 'client/test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    cssmin: {
      combine: {
        files: {
          'dist/styles.css': ['client/css/*.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'client',
          src: ['**/*.{jpg,gif}'],
          dest: 'dist/'
        }]
      }
    },
    pngmin: {
      compile: {
        options: {},
        files: [
          {
            src: 'client/img/*.png',
            dest: 'dist/img'
          }
        ]
      }
    },
    karma:{
          unit: {
            background: false,
            captureTimeout: 5000,
            options: {
                files:[
                    "client/lib/angular.js",
                    "client/lib/angular-mocks.js",
                    "client/app.js",
                    "client/services/*.js",
                    "client/controllers/*.js",
                    "client/test/services/*.js",
					          "client/test/controllers/*.js"
                ],
                plugins:[
                    "karma-jasmine",
                    "karma-phantomjs-launcher"
                ],
                frameworks:[
                    "jasmine"
                ],
                browsers:[
                    "PhantomJS"
                ]
            }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-pngmin');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['jshint', 'karma:unit']);

  grunt.registerTask('default', ['karma:unit', 'jshint', 'concat', 'cssmin', 'ngmin', 'uglify', 'imagemin', 'pngmin']);
};