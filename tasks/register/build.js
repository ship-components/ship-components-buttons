/**
 * CMD: grunt
 *
 * ---------------------------------------------------------------
 *
 * Default grunt command builds the src
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('build', [
    'clean',
    'lint',
    'webpack:dev',
    'webpack:dist'
  ]);
};
