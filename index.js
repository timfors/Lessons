const express = require('express');
const read = require('./src/read');

const solution = () => {
	const app = express();
	const lessons = read('src/lessons.txt');
	app.get('/', (req, res) => {
		const date = new Date()
		res.send(lessons.Monday.first);
		res.send(422);
		//res.render('index.pug', lessons.day);
	});
	return app;
}
solution().listen(8080);
