var sections = [
	{
		title: 'Basic',
		rows: [{
			columns: [
				{ 
					id: 'basic1',
					title: 'First Basic', 
					items: [
						{
							id: 'title',
							title: 'Title', 
							type: 'text', 
							ph: 'My Awesome Project', 
						},
						{
							id: 'author',
							title: 'Author', 
							type: 'text', 
							ph: 'The Joker', 
						},
						{ 
							id: 'url',
							title: 'URL', 
							type: 'text', 
							ph: 'http://some-awesome-app.com', 
						},
						{
							id: 'charset',
							title: 'Charset', 
							type: 'text', 
							value: 'utf-8', 
						},
						{
							id: 'description',
							title: 'Description', 
							type: 'textarea', 
							rows: 5, 
							ph: 'This is my awesome project', 
						},
					]
				},
				{ 
					id: 'basic2',
					title: 'Second Basic', 
					items: [ 
						{
							id: 'language',
							title: 'Language', 
							type: 'text', 
							value: navigator.language, 
						},
						{ 
							id: 'keywords',
							title: 'Keywords', 
							type: 'text', 
							ph: 'holyday, icecream, sandwitches', 
							help: { 
								type: 'block', 
								text: 'about 6 words (comma seperated)' 
							}, 
						},
						{ 
							id: 'robots',
							title: 'Robots', 
							type: 'text', 
							value: 'index, follow, noarchive', 
							help: { 
								type: 'block', 
								text: '(un)follow, (no)index, noop, (no)archive'
							}, 
							refrence: 'http://googlewebmastercentral.blogspot.de/2007/03/using-robots-meta-tag.html'
						},
						{
							id: 'favicon',
							title: 'Favicon', 
							type: 'text', 
							ph: '/path/to/favicon.png', 
						},
						{
							id: 'generator',
							title: 'Generator', 
							type: 'text', 
							ph: 'e.g. Wordpress', 
						},
					] 
				}
			]
		}]
	},
	{
		title: 'Mobile',
		rows: [{
			columns: [{ 
				id: 'viewport',
				title: 'Viewport',
				refrence: 'https://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html',
				items: [
					{ 
						id: 'viewport-width',
						title: 'width', 
						type: 'text', 
						value : 'device-width', 
					},
					{
						id: 'viewport-height',
						title: 'height', 
						type: 'text', 
						value: 'device-height',
						disabled: true
					},
					{
						id: 'viewport-user-scaleable',
						title: 'user-scalable', 
						type: 'select',
						options: [
							{ key: 'No', value: 'no' },
							{ key: 'Yes', value: 'yes' }
						],
						disabled: true
					},
					{
						id: 'viewport-initial-scale',
						title: 'initial-scale', 
						type: 'number', 
						value: 1, 
					},
					{
						id: 'viewport-minimum-scale',
						title: 'minimum-scale', 
						type: 'number', 
						value: 1, 
					},
					{
						id: 'viewport-maximum-scale',
						title: 'maximum-scale', 
						type: 'number', 
						value: 1,
						disabled: true
					},
				] 
			},
			{ 
				id: 'meta-options',
				title: 'Meta Options', 
				disabled: true, 
				refrence: 'http://developer.apple.com/library/safari/#documentation/appleapplications/reference/SafariHTMLRef/Articles/MetaTags.html',
				items: [
					{ 
						id: 'status-bar-style',
						title: 'Status Bar Style',
						type: 'select',
						options: [
							{ key: 'default', value: 'default' },
							{ key: 'black', value: 'black' },
							{ key: 'black-translucent', value: 'black-translucent' }
						],
					},
					{
						id: 'app-capable',
						title: 'App Capable', 
						type: 'text', 
						value : 'yes', 
					},
					{ 
						id: 'format-detection',
						title: 'Format Detection', 
						type: 'text', 
						value : 'telephone=no', 
					},
				] 
			}
			]
		}]
	},
	{
		title: 'iOS',
		rows: [{
			columns: [
				{ 
					id: 'application-icons',
					title: 'Application Icons', 
					disabled: true,
					refrence: 'http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/configuringwebapplications/configuringwebapplications.html',
					items: [
						{
							id: 'app-icon-default',
							title: 'Default', 
							type: 'text', 
							ph : '/path/to/fav.png', 
						},
						{ 
							id: 'app-icon-72',
							title: '72x72 Pixels', 
							type: 'text', 
							ph : '/path/to/fav_72.png', 
						},
						{ 
							id: 'app-icon-114',
							title: '114x114 Pixels (High Res)', 
							type: 'text', 
							ph : '/path/to/fav_114.png', 
						},
					] 
				},
				{ 
					id: 'startup-images',
					title: 'Startup Images',
					disabled: true,
					refrence: 'http://taylor.fausak.me/2012/03/27/ios-web-app-icons-and-startup-images/',
					items: [
						{ 
							id: 'startup-web',
							title: 'Web Apps (320x460)', 
							type: 'text', 
							ph : '/path/to/startup_web.png', 
						},
						{ 
							id: 'startup-web-highres',
							title: 'Web Apps - High Resolution (640x920)', 
							type: 'text', 
							ph : '/path/to/startup_web.png', 
						},
						{ 
							id: 'startup-landscape',
							title: 'iPad - landscape (748x1024)', 
							type: 'text', 
							ph : '/path/to/startup_landscape.png', 
						},
						{ 
							id: 'startup-portrait',
							title: 'iPad - portrait (768x1004)', 
							type: 'text', 
							ph : '/path/to/startup_portrait.png',
						},
						{ 
							id: 'startup-landscape-highres',
							title: 'iPad - High Resolution - landscape (1536x2008)', 
							type: 'text', 
							ph : '/path/to/startup_landscape_highres.png',
						},
						{ 
							id: 'startup-portrait-highres',
							title: 'iPad - High Resolution - portrait (1536x2008)',
							type: 'text', 
							ph : '/path/to/startup_portrait_highres.png',
						}
					] 
				}
			]
		},{
			columns: [
				{ 
					id: 'application-icons-precomposed',
					title: 'Application Icons Precomposed', 
					disabled: true,
					refrence: 'http://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html',
					items: [
						{ 
							id: 'pre-app-icon-default',
							title: 'Pre Default', 
							type: 'text', 
							ph : '/path/to/pre_fav.png', 
						},
						{ 
							id: 'pre-app-icon-72',
							title: '72x72 Pixels', 
							type: 'text', 
							ph : '/path/to/pre_fav_72.png', 
						},
						{ 
							id: 'pre-app-icon-114',
							title: '114x114 Pixels (High Res)', 
							type: 'text', 
							ph : '/path/to/pre_fav_114.png', 
						},
					]
				}
			]
		}]
	},
	{
		title: 'Other',
		rows: [{
			columns: [
				{
					id: 'additional-options',
					title: 'Additional Options', 
					disabled: true,
					items: [
						{ 
							id: 'canonical',
							title: 'Canonical', 
							type: 'text', 
							ph : 'http://some-awesome-app.com',
							refrence: 'http://support.google.com/webmasters/bin/answer.py?hl=en&answer=139394'
						},
					]
				},
				{
					id: 'ie-options',
					title: 'IE Options', 
					items: [
						{ 
							id: 'xuacompatible',
							title: 'X-UA-Compatible', 
							type: 'text', 
							value : 'IE=edge,chrome=1', 
						},
						{ 
							id: 'imagetoolbar',
							title: 'IE imagetoolbar',
							type: 'text', 
							value: 'false'
						}
					] 
				}
			]
		}]
	},
	{
		title: 'Social Media',
		rows: [{
			columns: [
				{
					id: 'open-graph',
					title: 'Open Graph',
					disabled: true,
					refrence: 'http://ogp.me/',
					items: [
						{
							id: 'fb-app-id',
							title: 'App ID (Facebook)',
							type: 'text',
							refrence: 'https://developers.facebook.com/docs/opengraph/objects/builtin'
						},
						{
							id: 'og-type',
							title: 'Type',
							type: 'select',
							options: [
								{ key: 'article', value: 'article' },
								{ key: 'blog', value: 'blog' },
								{ key: 'book', value: 'book' },
								{ key: 'profile', value: 'profile' },
								{ key: 'video', value: 'video' },
								{ key: 'website', value: 'website' },
							],
							help: { 
								type: 'block', 
								text: 'For more options, use the refrence link'
							}
						},
						{
							id: 'og-url',
							title: 'Url',
							type: 'text',
							ph: 'http://some-awesome-app.com'
						},
						{
							id: 'og-image',
							title: 'Image',
							type: 'text',
							ph: 'http://some-awesome-app.com/path/to/image.png'
						},
						{
							id: 'og-title',
							title: 'Title',
							type: 'text',
							ph: 'My Awesome Project'
						},
						{
							id: 'og-description',
							title: 'Description',
							type: 'text',
							ph: 'This is my awesome project'
						},
					]
				},
				{
					id: 'itemprop',
					title: 'Item Props',
					disabled: true,
					refrence: 'http://schema.org/docs/schemas.html',
					items: [
						{
							id: 'ip-name',
							title: 'Name',
							type: 'text',
							ph: 'Title of your content',
						},
						{
							id: 'ip-description',
							title: 'Description',
							type: 'text',
							ph: 'This would be a description of the content your users are sharing',
						},
						{
							id: 'ip-type',
							title: 'Type',
							type: 'select',
							options: [
								{ key: 'Article', value: 'Article' },
								{ key: 'Blog', value: 'Blog' },
								{ key: 'Book', value: 'Book' },
								{ key: 'Event', value: 'Event' },
								{ key: 'Local Business', value: 'LocalBusiness' },
								{ key: 'Organization', value: 'Organization' },
								{ key: 'Person', value: 'Person' },
								{ key: 'Product', value: 'Product' },
								{ key: 'Review', value: 'Review' },
							],
						},
						{
							id: 'ip-image',
							title: 'Image',
							type: 'text',
							ph: 'http://some-awesome-app.com/path/to/image.png',
						},
					]
				}
			]
		}]
	},
];