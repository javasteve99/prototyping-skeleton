module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/build/css/application.css': 'public/src/scss/application.scss'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'public/src/js/libs/*.js',
          'public/src/js/vendor/*.js',
          'public/src/js/modules/*.js'
        ],
        dest: 'public/build/js/application.js'
      }
    },
    uglify: {
      build: {
        src: 'public/build/js/application.js',
        dest: 'public/build/js/application.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['public/src/img/*.{png,jpg,gif}'],
          dest: 'public/build/img/'
        }]
      }
    },
    watch: {
      css: {
        files: ['public/src/scss/**/*.scss'],
        tasks: ['sass'],
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['concat', 'uglify'],
      },
      img: {
        files: ['public/src/img/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'imagemin', 'watch']);

};