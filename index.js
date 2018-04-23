const express = require('express');
const read = require('./src/read');
var cool = require('cool-ascii-faces');
const path = require('path');
const classes = ['10a', '10b', '10c'];

const solution = () => {
	const app = express();
	const allLessons = read('src/lessons.json');

	app.use(express.static(path.join(__dirname, 'public')));

	app.set('view engine', 'pug');
	app.set('views', __dirname + '/views');
	

	app.get('/', (req, res) => {
		res.render('classes', { classes })
	})
	

	app.get('/:class', (req, res) => {
		const faces = []
		const className = req.params.class;
		const currentClass = allLessons[className];
		for (let i = 0; i <= 6; i++) {
			faces.push(cool());
		}
		res.render('index', { currentClass, faces, classes, className } );
	});
	return app;
}
solution().listen(process.env.PORT || 5000, () => 
console.log('Server started'));