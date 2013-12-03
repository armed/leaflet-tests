module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      grunt: 'gruntfile.js',
      app: ['src/**/*.js', 'config.js', 'server.js'],
      test: 'tests/**/*.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
