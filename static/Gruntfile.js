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
                        "pages.html": "jade/pages.jade",
						"index.html": "jade/index.jade",
                        "index-popup.html": "jade/index-popup.jade",
						"index-map.html": "jade/index-map.jade",
                        "kaspersky-profile.html": "jade/kaspersky-profile.jade",
                        "kaspersky-profile-without-photo.html": "jade/kaspersky-profile-without-photo.jade",
                        "kaspersky-profile-without-results.html": "jade/kaspersky-profile-without-results.jade",
                        "kaspersky-profile-settings.html": "jade/kaspersky-profile-settings.jade",
                        "kaspersky-scoreboard.html": "jade/kaspersky-scoreboard.jade",
                        "kaspersky-registration.html": "jade/kaspersky-registration.jade",
                        "kaspersky-registration-error.html": "jade/kaspersky-registration-error.jade",
                        "kaspersky-restore-password.html": "jade/kaspersky-restore-password.jade",
                        "kaspersky-trial-free.html": "jade/kaspersky-trial-free.jade",
						"kaspersky-test.html": "jade/kaspersky-test.jade",
						"kaspersky-registration-preload.html": "jade/kaspersky-registration-preload.jade",
                        "kaspersky-test-congratulation.html": "jade/kaspersky-test-congratulation.jade",
						"kaspersky-test-attention.html": "jade/kaspersky-test-attention.jade",
						"kaspersky-test-attention-load.html": "jade/kaspersky-test-attention-load.jade",
                        "kaspersky-test-rules.html": "jade/kaspersky-test-rules.jade",
                        "kaspersky-registration-confirmed.html": "jade/kaspersky-registration-confirmed.jade",
                        "kaspersky-contest-rules.html": "jade/kaspersky-contest-rules.jade",
                        "kaspersky-legal-statement.html": "jade/kaspersky-legal-statement.jade",
                        "kaspersky-privacy-policy.html": "jade/kaspersky-privacy-policy.jade",
                        "kaspersky-contacts.html": "jade/kaspersky-contacts.jade",
                        "kaspersky-test-fail.html": "jade/kaspersky-test-fail.jade",
                        "kaspersky-registration-mail.html": "jade/kaspersky-registration-mail.jade"
                    }
                }
            },

            compass: {
                dist: {
                    options: {
                        sassDir: 'sass',
                        cssDir: 'css'
                    }
                }
            },

			import: {
				options: {},
				dist: {
					src: 'js/main.js',
					dest: 'js/engine.js'
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
                        'js/engine.min.js': '<%= import.dist.dest %>'
                    }
                }
            },

            watch: {
                jade: {
                    files: [
                        'jade/*.jade',
                        'includes/*.jade'
                    ],
                    tasks: 'jade'
                },
                css: {
                    files: [
                        'css/common/*.sass',
                        'css/blocks/**/*.sass',
                        'css/vendor/*.sass',
                        'css/UI/*.sass',
                        'sass/*.sass'
                    ],
                    tasks: 'compass'
                },
				js: {
					files: [
						'js/parts/*.js',
						'js/vendor/*.js',
						'js/vendor//map/*.js',
						'js/main.js'
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