module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35729  //声明给 watch 监听的端口
      },

      server: {
        options: {
          open: true, //自动打开网页 http://
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
		build: [ 'gruntfile.js' , 'js/test.js' ],
		options: {
			jshintrc: '.jshintrc'
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
	          'js/{,*/}*.js'
	        ]
	    }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default',['jshint','uglify','watch']);
  grunt.registerTask('serve',['connect:server','watch']);
  

};