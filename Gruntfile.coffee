module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    watch:
      sass:
        files: ['sass/**/*.scss']
        tasks: ['sass']
      coffee:
      	files: ['js/coffee/**/*.coffee']
      	tasks: ['coffee']
      js:
      	files: ['js/main.js']
      	tasks: ['uglify']

    sass:
      dist:
        files: "./css/application.css": "./sass/application.scss"
        options:
          includePaths: ['./sass']
          outputStyle: "compressed"
     
    coffee:
      compileJoined:
          options:
            join: true
          files: 'js/main.js': ['js/coffee/**/*.coffee', 'js/plugins'] # concat then compile into single file

    uglify:
      options:
        banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"dd-mm-yyyy\") %> */\n"
      dist:
   	    files: 'js/main.min.js': ['js/main.js']

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['watch'])

  grunt.initConfig 