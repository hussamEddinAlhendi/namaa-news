var users = require('../users/usersController.js');

module.exports = function (app, express) {
	app.get('/api/users', users.getAll);
	app.post('/api/users', users.addNewUser);
	app.put('/api/users/', users.editUser)
	app.delete('/api/users/:username', users.deleteUser);
};

