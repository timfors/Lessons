const express = require('express');
const read = require('./src/read');

const solution = () => {
	const app = express();
	const allLessons = read('src/lessons.json');
	app.set('view engine', 'pug');
	app.get('/', (req, res) => {
		const date = new Date()
		const day = date.getDay();
		res.redirect(`/${day}`);
	});
	app.get('/:id', (req, res) => {
		const day = req.params.id;
		if (day == '7') {
			res.redirect('/1');
		}
		if (day == '0') {
			res.redirect('/6');
		}
		const currentLessons = allLessons[`${day}`];
		const lessons = Object.keys(currentLessons)
		.map(key => currentLessons[key]);
		lessons.pop();
		res.render('index', { currentLessons, lessons, day } );
		res.status(422)
	})
	return app;
}
solution().listen(8080);
