var db = require('../config/database.js')();

var query = function(sql, values, res){
	db.query(sql, values, function(err,rows){
		if(err) throw err;
		// console.log(JSON.stringify(rows));
		res.json(rows)
	});
}


module.exports = {
	getAll: function (req, res, next) {
		var sql = 'SELECT * FROM users';
		query(sql, {}, res)
	},
	addNewUser: function (req, res, next) {
		var sql = 'INSERT INTO users SET ?';
		var user = {username: req.body.username, password: req.body.password, email: req.body.email};
		query(sql, user, res);
	},
	deleteUser: function (req, res, next) {
		var sql = 'DELETE FROM users WHERE username=?'
		query(sql, [req.params.username], res);
	},
	editUser: function (req, res, next) {
		var sql = 'UPDATE users SET password = ?, email = ?  WHERE username = ?';
		var user = [req.body.password, req.body.email, req.body.username];
		query(sql, user, res);
	}
};