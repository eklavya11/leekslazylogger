module.exports = {
	name: 'Logger Test',
	// directory: require('path').join(__dirname, '/special-logs'),
	// timestamp: 'DD/MM/YY HH:mm:ss',
	// timestamp: () => Date.now(),
	custom: {
		test: {
			title: 'Test'
		},
		ex1: {
			title: 'INFO',
			prefix: 'normal example',
			foreground: 'black',
			background: 'bgCyan'
		},
		ex2: {
			title: 'hex example',
			prefix: 'hex',
			foreground: '#00FF21',
			type: 'warn'
		},
		ex3: {
			title: 'rgb example',
			foreground: '0, 255, 255',
			type: 'error'
		},
		ex4: {
			title: '8bit example',
			foreground: 16
		},
		ex5: {
			title: 'another example',
			foreground: '&1',
			background: '&!2'
		},
		thing: {
			prefix: 'thing'
		},
		warn: {
			prefix: 'OH NO! A WARNING!'
		}
	},
	logToFile: true,
	maxAge: 1,
	keepSilent: false,
	daily: true,
	debug: true
};