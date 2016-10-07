var db = require('../config/database.js')();

var query = function(sql, res){
	db.query(sql, function(err,rows){
			if(err) throw err;
			console.log(JSON.stringify(rows));
			res.json(rows)
		});
}


module.exports = {
	getAll: function (req, res, next) {
		var sql = 'SELECT * FROM users';
		query(sql, res)
	},
	addNewUser: function (req, res, next) {
		var sql = 'INSERT INTO users VALUES ("' + req.body.username + '", "' + req.body.password + '", "' + req.body.email + '")';
		query(sql, res)
	},
	deleteUser: function (req, res, next) {
		console.log('asdfasdfadfasdfasfdasf', req.params)
		var sql = 'DELETE FROM users WHERE username="' + req.params.username + '";'
		query(sql, res)
	},
	editUser: function (req, res, next) {
		var sql = 'UPDATE users SET password="' + req.body.password + '",email="' + req.body.email + '" WHERE username="' + req.body.username + '";';
		query(sql, res)
	}
};