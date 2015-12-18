module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      options: {
        port: 9000,
        hostname: '127.0.0.1', 
        livereload: 35729  
      },

      server: {
        options: {
          open: true, 
          index: 'index.html',
          maxAge: 300000
        }
      }
    },

    uglify: {
	  	options: {
	  		stripBanners: true,
	  		banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	  	},
	  	build: {
	  		src: 'js/test.js',
	  		dest: 'build/<%=pkg.name%>-<%=pkg.version%>.min.js'
	  	}
	},

	jshint: {
		build: [ 'gruntfile.js' , 'js/*.js' ],
		options: {
			jshintrc: '.jshintrc'
		}
	},

	less: {
    	options: {
            compress: false,
            yuicompress: false,
            ieCompat:true,
        },
	    files: {
	    	"css/style.css": "css/style.less"
	    }
		
    },

	watch: {
		// build: {
		// 	files: ['css/*.css','js/*.js'],
		// 	tasks: ['jshint','uglify'],
		// 	options:{spawn:false}
		// },
		livereload: {
	        options: {
	          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
	        },

	        files: [  //下面文件的改变就会实时刷新网页
	          '*.html',
	          'css/{,*/}*.css',
	          'js/{,*/}*.js',
	          'template/*.html',
	          'simplePage/*.html'
	        ]
	    }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('lessc',['less']);
  grunt.registerTask('default',['jshint','watch']);
  grunt.registerTask('serve',['connect:server','watch']);
  

};