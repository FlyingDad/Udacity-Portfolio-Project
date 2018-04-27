module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
					style:'expanded',
        },
        files: {
          'css/styles.css' : 'scss/style.scss'
        }
      }
		},
		postcss: {
			options: {
				//map: true, // inline sourcemaps
	
				// or
				map: {
						inline: false, // save all sourcemaps as separate files...
						annotation: 'css/' // ...to the specified directory
				},
	
				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					//require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'css/styles.css'
			}
		},

    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass']
			}
		}
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default',['watch']);
}