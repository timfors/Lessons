const express = require('express');
const read = require('./src/read');
var cool = require('cool-ascii-faces');

const solution = () => {
	const app = express();
	const allLessons = read('src/lessons.json');
	app.set('view engine', 'pug');
	app.get('/', (req, res) => {
		const date = new Date()
		let day = date.getDay();
		if (date.getHours() >= 16){
			day += 1;
			}
		res.redirect(`/${day}`);
	});
	app.get('/:id', (req, res) => {
		const day = req.params.id;
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
		res.status(422)
	})
	return app;
}
solution().listen(8080);
