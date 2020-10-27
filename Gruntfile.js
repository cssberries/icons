module.exports = function ( grunt ) {
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		webfont: {
			icons: {
				src: 'icons/SVG/*.svg',
				dest: 'dest/font',
				destCss: 'dest/css',
				options: {
					hashes: true,
					types: 'woff',
					ligatures: false,
					syntax: 'bootstrap',
					stylesheet: 'less',
					startCodepoint: 0xF100,
					template: 'templates/custom-icons-template.css',
					relativeFontPath: '@{path-to-icons-font}',
					destHtml: 'demo',
					htmlDemo: false,
					htmlDemoTemplate: 'templates/graphics.icons.base.template.html',
					font: 'cssberries-icons',
					fontFilename: 'cssberries-icons',
					engine: 'fontforge',
					// normalize: true,
					embed: false
				}

			},
			iconsEmbed: {
				src: 'icons/SVG/*.svg',
				dest: 'tmp',
				destCss: 'dest/css/embed',
				options: {
					hashes: true,
					types: 'woff',
					ligatures: false,
					syntax: 'bootstrap',
					stylesheet: 'css',
					startCodepoint: 0xF100,
					template: 'templates/custom-icons-template.css',
					relativeFontPath: '@{path-to-icons-font}',
					destHtml: 'demo',
					htmlDemo: false,
					htmlDemoTemplate: 'templates/graphics.icons.base.template.html',
					font: 'storm-icons',
					fontFilename: 'cssberries-icons',
					engine: 'fontforge',
					// normalize: true,
					embed: true
				}

			},
		},
		bump: {
			options: {
				files: ['package.json'],
				commit: true,
				commitMessage: 'v%VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: 'tag',
				pushTo: 'origin master',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
			}
		}
	} );
	grunt.registerTask( 'deploy', [
		'webfont:icons',
		'bump'
	] );

	grunt.loadNpmTasks( 'grunt-webfont' );
	grunt.loadNpmTasks( 'grunt-bump' );

};
