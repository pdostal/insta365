module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    uglify: { dist: { files: { './script.min.js': ['script.js'] }, options: { sourceMap: true } } },
    cssmin: { dist: { files: { './style.min.css': ['style.css'] } } },
    htmlmin: { dist: { files: { './index.min.html': ['index.html'] }, options: { removeComments: true, removeCommentsFromCDATA: true, collapseWhitespace: true } } },
    copy: { dist: { files: [ { dest: './README.txt', src: ['README.md'] } ] } }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy']);
};
