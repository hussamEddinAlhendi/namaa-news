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
		var sql = 'SELECT * FROM news';
		query(sql, {}, res)
	},
	addNew: function (req, res, next) {
		var sql = 'INSERT INTO news SET ?';
		var news = {TITLE: req.body.TITLE, OVERVIEW: req.body.OVERVIEW, DETAILS: req.body.DETAILS};
		query(sql, news, res);
	},
	deleteNews: function (req, res, next) {
		var sql = 'DELETE FROM news WHERE id=?';
		query(sql, [req.params.id], res)
	},
	editNews: function (req, res, next) {
		var sql = 'UPDATE news SET TITLE = ?,OVERVIEW = ?, DETAILS = ?  WHERE ID = ?';
		var news = [req.body.TITLE, req.body.OVERVIEW, req.body.DETAILS, req.body.ID];
		query(sql, news, res);
	}
};

