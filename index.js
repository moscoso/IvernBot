var request = require("request");
var counterpick = require("./lolcounterpick");
var probuilds = require("./lolprobuilds");
var cleverIO = require("cleverbot.io");
var cleverBot = new cleverIO("NYFE2sc6MZPNmWad", "6pQ0otrw3a6iugByAaFCb7wp7UBLRYFE"); //https://cleverbot.io/keys
cleverBot.setNick("moscoso");
cleverBot.create(function (err, session) {
	// session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

	// Woo, you initialized cleverbot.io.  Insert further code here


	var Discordie = require('discordie');
	var Events = Discordie.Events;

	var client = new Discordie();

	const BOTNAME = "Ivern";
	const BOT_ID_OUTPUT = "<@280899794799427584>";

	client.connect({
		token: 'MjgwODk5Nzk0Nzk5NDI3NTg0.C4QnGA.ki15nSSz4eR-EYrFhdIj2DoFOzU'
	});

	client.Dispatcher.on(Events.GATEWAY_READY, e => {
		console.log('Connected as: ' + client.User.username);
	});

	client.Dispatcher.on(Events.MESSAGE_CREATE, e => {

		if (e.message.mentions.length == 1 && e.message.mentions[0].username == BOTNAME) {


			/**RANDOM RESPONSE **/
			var incomingMessage = e.message.content.replace(BOT_ID_OUTPUT, "").trim().toUpperCase();

			cleverBot.ask(incomingMessage, function (err, response) {
				//console.log(incomingMessage);
				//console.log(err);
				//console.log(response); // Will likely be: "Living in a lonely world"
				//e.message.channel.sendMessage(response);
			});

			var commandIssue = false;

			var command = incomingMessage.split(" ")[0];
			if (command == 'GIFY' || command == "GIPHY") {
				console.log(incomingMessage.split(command));
			} else if (command == 'HELP' || command == 'COMMAND' || command == 'COMMANDS') {
				outgoingMessage = 'Here are the comands I have: \ncounter [championName]\nprobuilds [championName]';
			} else if (command == 'COUNTER') {
				var champ = incomingMessage.split(" ")[1];
				outgoingMessage = champ + " is weak against: " + counterpick.all(champ).join(", ");
				console.log(e.message.author + " asked who counters " + champ);
			} else if (command == 'PROBUILDS') {
				outgoingMessage = probuilds.getBuilds(incomingMessage.split(" ")[1]);
			} else if (command == 'PRO' && (incomingMessage.split(" ")[1] == 'BUILD' || incomingMessage.split(" ")[1] == 'BUILDS')) {
				outgoingMessage = probuilds.getBuilds(incomingMessage.split(" ")[2]);
			} else {
				var confused = ["uh ... ?", "wut", "what are you sayin?", "cash me outside how bout dat?", "I'm still dumb af. Tell Goz to upload me some smartz", "beep boop", "404 response not found", "idk... but my favorite color is SPRING ! :D"];
				var outgoingMessage = confused[Math.floor(Math.random() * confused.length)];
				var greetings = [
			"HI", "YO", "HELLO", "WASUP", "WHAT'S UP", "WHAT IS UP", "SUP"
		];

				for (var x = 0; x < incomingMessage.split(" ").length; x++) {
					for (var i = 0; i < greetings.length; i++) {
						console.log(incomingMessage.split(" ")[x]);
						if (greetings[i] == incomingMessage.split(" ")[x]) {
							outgoingMessage = "\'Sup " + e.message.author.username;
							break;
						}
					}
				}


				if (incomingMessage.includes('PING')) {
					outgoingMessage = 'PONG';
				}

				if (command == 'WHO') {
					//'WHO
				}

				if (incomingMessage.includes('WHO MADE YOU')) {
					outgoingMessage = 'The homie Gozillionaire';
					console.log(e.message.author + " asked who made me");
				}

				if (incomingMessage.includes('WHO CODED YOU')) {
					outgoingMessage = 'The homie Gozillionaire';
					console.log(e.message.author + " asked who made me");
				}

				if (incomingMessage.includes('WHO PROGRAMMED YOU')) {
					outgoingMessage = 'The homie Gozillionaire';
					console.log(e.message.author + " asked who made me");
				}



				//console.log(e.message.channel);
			}





			e.message.channel.sendMessage(outgoingMessage);
		}
	});

	client.Dispatcher.on(Events.VOICE_CHANNEL_JOIN, e => {
		//console.log(e);
	});

	/*request.post(
		'https://discordapp.com/api/channels/280908843167514624/messages', {
			json: {
				content: 'IM A GOD'
			}
		},
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				//console.log(response)
			} else {
				//console.log("error : " + error);
			}
		}
	);*/

});