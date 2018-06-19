module.exports = function (grunt) {

    grunt.initConfig({

            jade: {
                compile: {
                    options: {
                        pretty: true,
                        data: {
                            debug: false
                        }
                    },
                    files: {
                        "www/pages.html": "static/jade/pages.jade",
						"www/index.html": "static/jade/index.jade",
                        "www/index-popup.html": "static/jade/index-popup.jade",
						"www/index-map.html": "static/jade/index-map.jade",
                        "www/kaspersky-profile.html": "static/jade/kaspersky-profile.jade",
                        "www/kaspersky-profile-without-photo.html": "static/jade/kaspersky-profile-without-photo.jade",
                        "www/kaspersky-profile-without-results.html": "static/jade/kaspersky-profile-without-results.jade",
                        "www/kaspersky-profile-settings.html": "static/jade/kaspersky-profile-settings.jade",
                        "www/kaspersky-scoreboard.html": "static/jade/kaspersky-scoreboard.jade",
                        "www/kaspersky-registration.html": "static/jade/kaspersky-registration.jade",
                        "www/kaspersky-registration-error.html": "static/jade/kaspersky-registration-error.jade",
                        "www/kaspersky-restore-password.html": "static/jade/kaspersky-restore-password.jade",
                        "www/kaspersky-trial-free.html": "static/jade/kaspersky-trial-free.jade",
						"www/kaspersky-test.html": "static/jade/kaspersky-test.jade",
						"www/kaspersky-registration-preload.html": "static/jade/kaspersky-registration-preload.jade",
                        "www/kaspersky-test-congratulation.html": "static/jade/kaspersky-test-congratulation.jade",
						"www/kaspersky-test-attention.html": "static/jade/kaspersky-test-attention.jade",
						"www/kaspersky-test-attention-load.html": "static/jade/kaspersky-test-attention-load.jade",
                        "www/kaspersky-test-rules.html": "static/jade/kaspersky-test-rules.jade",
                        "www/kaspersky-registration-confirmed.html": "static/jade/kaspersky-registration-confirmed.jade",
                        "www/kaspersky-contest-rules.html": "static/jade/kaspersky-contest-rules.jade",
                        "www/kaspersky-legal-statement.html": "static/jade/kaspersky-legal-statement.jade",
                        "www/kaspersky-privacy-policy.html": "static/jade/kaspersky-privacy-policy.jade",
                        "www/kaspersky-contacts.html": "static/jade/kaspersky-contacts.jade",
                        "www/kaspersky-test-fail.html": "static/jade/kaspersky-test-fail.jade",
                        "www/kaspersky-registration-mail.html": "static/jade/kaspersky-registration-mail.jade"
                    }
                }
            },

            compass: {
                dist: {
                    options: {
                        sassDir: 'static/sass',
                        cssDir: 'www/css'
                    }
                }
            },

			import: {
				options: {},
				dist: {
					src: 'static/js/main.js',
					dest: 'www/js/engine.js'
				}
			},

            //concat: {
            //    js: {
            //        src: [
            //            'js/engine.js'
            //        ],
            //        dest: 'js/engine.js'
            //    }
            //},

            uglify: {
                options: {
                    banner: '/* Created by Andrey Koverniy | 2015 */\n'
                },
                js: {
                    files: {
                        'www/js/engine.min.js': '<%= import.dist.dest %>'
                    }
                }
            },

            watch: {
                jade: {
                    files: [
                        'static/jade/*.jade',
                        'static/includes/*.jade'
                    ],
                    tasks: 'jade'
                },
                css: {
                    files: [
                        'static/css/common/*.sass',
                        'static/css/blocks/**/*.sass',
                        'static/css/vendor/*.sass',
                        'static/css/UI/*.sass',
                        'static/sass/*.sass'
                    ],
                    tasks: 'compass'
                },
				js: {
					files: [
						'static/js/parts/*.js',
						'static/js/vendor/*.js',
						'static/js/vendor//map/*.js',
						'static/js/main.js'
					],
					tasks: ['import']
				}
            }
        }
    );

	grunt.loadNpmTasks('grunt-import');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'jade', 'compass','import', /*'concat',*/ 'uglify']);
};