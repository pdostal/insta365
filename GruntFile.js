module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    uglify: { dist: { files: { './dist/main.js': ['./dev/*.js'] } } },
    cssmin: { dist: { files: { './dist/main.css': ['./dev/*.css'] }, options: { keepSpecialComments: '0' } } },
    copy: { dist: { files: [ { expand: true, dest: './dist/', src: ['./*.png', './*.php', './style.css'], cwd: './dev/' } ] } }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);
};
