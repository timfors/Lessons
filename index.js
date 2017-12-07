const express = require('express');
const read = require('./src/read');

const solution = () => {
	const app = express();
	const lessons = read('src/lessons.json');
	app.get('/', (req, res) => {
		const date = new Date()
		const day = date.getDay();
		res.redirect(`/${day}`);
	});
	app.get('/:id', (req, res) => {
		const day = req.params.id;
		res.render('index');
		res.status(422)
	})
	return app;
}
solution().listen(8080);
