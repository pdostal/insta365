module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: { dist: { files: { 'script.min.js': ['script.js'] } } },
    cssmin: { dist: { files: { 'style.min.css': ['style.css'] } } },
    htmlmin: { dist: { files: { 'index.min.html': ['index.html'] } } }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};
