var animals = require('../controllers/animals.js')

module.exports = (app) => {
	// Index
	app.get('/', animals.index);
	app.post('/animals', animals.create);
    app.get('/animals/:id', animals.show);
	app.post('/animals/:id', animals.update);
	app.post('/animals/destroy/:id', animals.destroy);
}