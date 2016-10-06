var users = require('../users/usersController.js');

module.exports = function (app, express) {
	app.get('/api/users', users.getAll);
	app.post('/api/users', users.addNewUser);
	app.delete('/api/users', users.deleteUser);
	app.put('/api/users', users.editUser)
};

