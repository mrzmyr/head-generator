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
							id: 'base',
							title: 'Base', 
							type: 'text', 
							ph: 'http://www.example.com/page.html',
							refrence: 'https://developer.mozilla.org/en/docs/Web/HTML/Element/base'
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
							disabled: true
						}
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
						id: 'width',
						title: 'width', 
						type: 'text', 
						value : 'device-width', 
					},
					{
						id: 'height',
						title: 'height', 
						type: 'text', 
						value: 'device-height',
						disabled: true
					},
					{
						id: 'user-scaleable',
						title: 'user-scalable', 
						type: 'select',
						options: [
							{ key: 'No', value: 'no' },
							{ key: 'Yes', value: 'yes' }
						],
						disabled: true
					},
					{
						id: 'initial-scale',
						title: 'initial-scale', 
						type: 'number', 
						value: 1, 
					},
					{
						id: 'minimum-scale',
						title: 'minimum-scale', 
						type: 'number', 
						value: 1, 
					},
					{
						id: 'maximum-scale',
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
					refrence: 'https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html',
					items: [
						{
							id: 'app-icon-default',
							title: 'Default', 
							type: 'text', 
							ph : '/path/to/fav.png', 
							reference: 'https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/IconMatrix.html#//apple_ref/doc/uid/TP40006556-CH27'
						},
						{ 
							id: 'app-icon-ipad',
							title: '76x76 iPad', 
							type: 'text', 
							ph : '/path/to/fav_76.png', 
						},
						{ 
							id: 'app-icon-iphone-retina',
							title: '120x120 iPhone Retina', 
							type: 'text', 
							ph : '/path/to/fav_120.png', 
						},
						{ 
							id: 'app-icon-ipad-retina',
							title: '152x152 iPad Retina', 
							type: 'text', 
							ph : '/path/to/fav_120.png', 
						},
					] 
				},
				{ 
					id: 'startup-image',
					title: 'Startup Image',
					disabled: true,
					refrence: 'https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html',
					items: [{ 
						id: 'apple-touch-startup-image',
						title: 'Web Apps (320x460)',
						type: 'text', 
						ph: '/startup.png', 
					}]
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