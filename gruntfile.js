module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
//    apiUrl: grunt.option('apiUrl') ||  'http://paydev.local:81',
 //   clientId: grunt.option('clientId') || '589789aa-cbe1-11e4-a517-16165d40a4bb',
    env: grunt.option('env') || 'dev',
    build: grunt.option('build') || 'debug',

    // clean: {
    //   buildFolder: ['build'],
    //   templates: [
    //     'build/out/www/app/app.env.js.template'
    //   ]
    // },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'www/',
          src: ['**'],
          dest: 'build/out/www'
        }]
      },
      resources: {
        files: [{
          expand: true,
          cwd: 'resources/',
          src: ['**'],
          dest: 'build/out/www/resources'
        }]
      },
      // config: {
      //   files: [{
      //     nonull: true,
      //     src: 'config.xml.template',
      //     dest: 'build/out/www/config.xml'
      //   }],
      //   options: {
      //     process: function(content, path) {
      //       return grunt.template.process(content);
      //     }
      //   }
      // },
      // apiUrl: {
      //   files: [{
      //     nonull: true,
      //     src: 'build/out/www/app/app.env.js.template',
      //     dest: 'build/out/www/app/app.env.js'
      //   }],
      //   options: {
      //     process: function(content, path) {
      //       return grunt.template.process(content);
      //     }
      //   }
      // }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      main: {
        files: [{
          expand: true,
          cwd: 'build/out/www/app/',
          src: ['**/*.js'],
          dest: 'build/out/www/app/'
        }],
      },
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      main: {
        files: [{
          expand: true,
          cwd: 'build/out/www/app/',
          src: '**/*.js',
          dest: 'build/out/www/app/'
        }]
      }
    },

    compress: {
      main: {
        options: {
          archive: 'build/package/<%= build %>-<%= env %>.zip'
        },
        files: [{
          expand: true,
          cwd: 'build/out/www/',
          src: ['**/*'],
          dest: '/'
        }]
      }
    },

    'phonegap-build': {
      debug: {
        options: {
          archive: 'build/package/<%= build %>-<%= env %>.zip',
          appId: '1620346',
          user: {
            'token': '4YwU84N4bb4g43Af3TWz'
          },
          keys: {
            ios: {
              'password': 'toporny99'
            },
            android: {
              'key_pw': 'toporny99',
              'keystore_pw': 'toporny99'
            }
          },
          download: {
            ios: 'build/package/<%= build %>-<%= env %>.ipa',
            android: 'build/package/<%= build %>-<%= env %>.apk',
          },
          timeout: 300000
        }
      },
      release: {
        options: {
          archive: 'build/package/<%= build %>-<%= env %>.zip',
          appId: '1620346',
          user: {
            'token': '4YwU84N4bb4g43Af3TWz'
          },
          keys: {
            ios: {
              'password': 'toporny99'
            },
            android: {
              'key_pw': 'toporny99',
              'keystore_pw': 'toporny99'
            }
          },
          download: {
            ios: 'build/package/<%= build %>-<%= env %>.ipa',
            android: 'build/package/<%= build %>-<%= env %>.apk',
          },
          timeout: 300000
        }
      }
    }
  });

//  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-phonegap-build');
  grunt.loadNpmTasks('grunt-ng-annotate');

  // Default task(s).
  grunt.registerTask('');

  grunt.registerTask('common', [
//    'clean:buildFolder',
    'copy:main',
    'copy:resources',
//    'copy:config',
//    'copy:apiUrl',
//    'clean:templates'
  ]);

  grunt.registerTask('dev', [
    'common',
    'compress',
    'phonegap-build:debug'
  ]);

  grunt.registerTask('dist', [
    'common',
    'ngAnnotate',
    'uglify',
    'compress',
    'phonegap-build:debug'
  ]);

  grunt.registerTask('release', [
    'common',
    'ngAnnotate',
    'uglify',
    'compress',
    'phonegap-build:release'
  ]);

  grunt.registerTask('default', 'dist');

};
