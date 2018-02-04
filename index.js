const express = require('express');
const read = require('./src/read');
var cool = require('cool-ascii-faces');
const path = require('path');

const solution = () => {
	const app = express();
	const allLessons = read('src/lessons.json');

	app.use(express.static(path.join(__dirname, 'public')));

	app.set('view engine', 'pug');
	app.set('views', __dirname + '/views');

	app.get('/', (req, res) => {
		const face = cool();
		res.render('index', { allLessons, face } );
	});
	return app;
}
solution().listen(process.env.PORT || 5000, () => 
	console.log('Server started'));
