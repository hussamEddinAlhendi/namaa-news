var users = require('../users/usersController.js');
var news = require('../news/newsController.js');

module.exports = function (app, express) {

	// users routes
	app.get('/api/users', users.getAll);
	app.post('/api/users', users.addNewUser);
	app.put('/api/users/', users.editUser);
	app.delete('/api/users/:username', users.deleteUser);

	// news routes
	app.get('/api/news', news.getAll);
	app.post('/api/news', news.addNew);
	app.put('/api/news', news.editNews);
	app.delete('/api/news/:id', news.deleteNews);

};

