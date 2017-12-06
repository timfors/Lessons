const fs = require('fs');

const read = (path) => {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) throw err;
		const les = JSON.parse(data);
		return les;
	})
}
console.log(read('lessons.json'));
//module.exports = read;