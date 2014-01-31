module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    uglify: { dist: { files: { './insta365/main.js': ['./main.js'] } } },
    cssmin: { dist: { files: { './insta365/main.css': ['./main.css'] } } },
    copy: { dist: { files: [ { expand: true, dest: './insta365/', src: ['./*.png', './*.php', './ext/*', 'style.css'], cwd: './' } ] } },
    compress: { dist: { files: [ { src: ['./insta365/**'], dest: './' } ], options: { archive: 'insta365.zip' } } },
    remove: { dist: { dirList: ['./insta365/'], options: { trace: false } } }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-remove');
  grunt.registerTask('default', ['uglify', 'cssmin', 'copy', 'compress', 'remove']);
};
