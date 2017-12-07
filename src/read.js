const fs = require('fs');

const read = (path) => {
	const lessons = fs.readFileSync(path, 'utf8');
	return JSON.parse(lessons);
};
module.exports = read;
