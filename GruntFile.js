module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    uglify: { dist: { files: { './dist/script.js': ['./dev/*.js'] } } },
    cssmin: { dist: { files: { './dist/style.css': ['./dev/*.css'] }, options: { keepSpecialComments: '0' } } },
    copy: { dist: { files: [ { expand: true, dest: './dist/', src: ['./*.png', './*.php', './ext/*'], cwd: './dev/' } ] } }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);
};
