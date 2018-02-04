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
		const date = new Date()
		let day = date.getDay();
		if (date.getHours() >= 16){
			day += 1;
			}
		res.redirect(`/${day}`);
	});
	app.get('/:id', (req, res) => {
		let day = Number(req.params.id);
		if (day == '7') {
			res.redirect('/1');
			return;
		}
		if (day == '0') {
			res.redirect('/6');
			return;
		}
		const currentLessons = allLessons[`${day}`];
		const face = cool();
		res.render('index', { currentLessons, day, face } );
	})
	return app;
}
solution().listen(3000, () => 
	console.log('Server started'));
