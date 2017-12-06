const fs = require('fs');

const read = (path) => {
	fs.readFile(path, 'utf8', (err, data) => {
		console.log(data)
		if (err) throw err;
		return JSON.parse(data);
	})
}
console.log(read('lessons.json'));
//module.exports = read;