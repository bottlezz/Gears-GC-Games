
//client network layer

//can send data in binary
	//init objects
	// var recievedObject;	  // recieved json object

function GameCenter() {

	var wsPort;

	var ID;
	//var mazeID;
	var connection;
	//to close connection connection.close();
	(this.initial = function() {
		console.log("loading!");
		//check preconditions for web socket support
		if (window.MozWebSocket) {

	        console.log('using MozillaWebSocket');
	        window.WebSocket = window.MozWebSocket;
	    } else if (!window.WebSocket) {

	        console.log('browser does not support websockets!');
	        alert('browser does not support websockets!');
	        return;
	    }

		wsPort = "8081";
		var matches = document.URL.match(/http:\/\/([\d.]+)[\/:].*/);
        //var ip = matches[1];
        var ip="localhost";
        console.log("IP: " + ip);

		connection = new WebSocket("ws://" + ip + ":" + wsPort);

		connection.onopen = function(event) { onConnection() };
		connection.onerror = function(error) { connectionError(error) };
		connection.onmessage = function(message) { receiveMessage(message) };
		connection.onclose = function(event) { onCloseEvent() };
	})();

	//connection error handling
	var connectionError = function(error) {
		console.log("connection error: " + error);
		alert(error);
		document.getElementById('test').innerHTML = error;
	}

	//initial connection sequence
	var onConnection = function() {
		console.log("connected");
		// sendOut(gameStateObject);
	}

	var onCloseEvent = function() {
		console.log("closing");
	}

	var receiveMessage = function(message) {
		//convert JSON
		console.log(message);

		try {
			var receivedMessage = JSON.parse(message.data);


			if(receivedMessage.user_id != null) {
				ID = receivedObject.user_id;
				return;
			} else if (receivedMessage.action == "broadcasting") {
				console.log(receivedMessage.body);
				recievedCallBack(receivedMessage.body);
			}else if (receivedMessage.action == "SYNC_LIST"){
				console.log(receiveMessage);
				receivedUserlist(receivedMessage);
			}else {
				console.log("undefined action: " + receivedMessage.action);
			}
			console.log("Recevied Message " + receivedMessage);
		} catch(error) {
			console.log('message is not a JSON object' + error);
		}
	}

	var sendMessage = function(action, variables, body) {
		//UNIX time stamp
		var timestamp = Math.round(new Date().getTime() / 1000)

		var message = {
			"action": action,
			"variables": variables,
			"timestamp": timestamp,
			"body": body
		}

		if(connection.readyState == 1) {
			connection.send(JSON.stringify(message));
		} else {
			console.log("connection not ready!");
		}
		console.log("SENT");
	}

	this.broadcasting = function(body) {
		sendMessage("broadcasting", "message", body);
	}
	this.createList = function(listName){

		var vars={key:listName,autoSync:true};
		sendMessage("create_list", JSON.stringify(vars), "");
		//sendMessage("create_list",'{"key":"UserProperty", "autoSync":"true"}',"");
	}
	this.appendList = function(listName, item){
		var vars={key:listName,autoSync:true};
		sendMessage("append_list_item", JSON.stringify(vars), JSON.stringify(item));
	}
	this.addListItem = function (listName,item){
		var vars={key:listName,autoSync:true};
		sendMessage("create_list_item", JSON.stringify(vars), JSON.stringify(item));
	}


	var PROPERTY_SEPERATOR = "#PROPERTY#";

	var alreadySet = "0";
	this.setUser = function(name, property) {

		sendMessage("set_user", "", name+PROPERTY_SEPERATOR+property);
		sendMessage("create_list",'{"key":"UserProperty", "autoSync":"true"}',"");
	}

}