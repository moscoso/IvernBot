var request = require("sync-request"),
	cheerio = require("cheerio");

var url = "http://www.lolcounter.com/champions/";

module.exports.all = function (champion) {
	return getCounters(champion, "all");
}

module.exports.top = function (champion) {
	return getCounters(champion, "top");
}

module.exports.mid = function (champion) {
	return getCounters(champion, "mid");
}

module.exports.bottom = function (champion) {
	return getCounters(champion, "bottom");
}

module.exports.support = function (champion) {
	return getCounters(champion, "bottom");
}

function getCounters(champion, role) {
	var counters = [];
	var res = request('GET', url + champion.toLowerCase());

	var body = res.getBody();
	var $ = cheerio.load(body);
	$("._" + role.toLowerCase() + " .weak-block .champ-block .name").each(function (i, elem) {
		counters.push($(this).text())
	});
	return counters;
}