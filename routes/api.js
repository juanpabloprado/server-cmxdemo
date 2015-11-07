var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/', function (req, res, next) {
	console.log(req.path);
	request({
		url    : "https://msesandbox.cisco.com/api/contextaware/v1" + req.baseUrl,
		headers: {
			"Authorization": "Basic bGVhcm5pbmc6bGVhcm5pbmc=",
			"Accept": "application/json"
		}
	})
		.on('error', function (e) {
			console.log(e);
			res.status(500).json(e)
		})
		.pipe(res).on('error', function (e) {
			console.log(e);
			res.status(500).json(e)
		})
});

module.exports = router;
