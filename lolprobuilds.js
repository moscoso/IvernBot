var request = require("sync-request"),
	cheerio = require("cheerio");

var url = "http://www.probuilds.net/champions/details/";

module.exports.getBuilds = function (champion) {
	return url = "http://www.probuilds.net/champions/details/" + champion
}