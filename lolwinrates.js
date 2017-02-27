var request = require("sync-request"),
	cheerio = require("cheerio");

var url = "http://www.lolking.net/champions/";

module.exports.getWinRates = function (champion) {
	var res = request('GET', url + champion.toLowerCase());

	var body = res.getBody();
	var $ = cheerio.load(body);


	$('.tselect-container').each(function (i, elem) {
		console.log($(this).html());
	});
}