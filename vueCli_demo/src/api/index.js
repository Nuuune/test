const CHAT = {
	msgo: [],
	ws: new WebSocket("ws://localhost:3000/echo"),
	submit: function (msg) {
		this.ws.send(JSON.stringify(msg));
	},
	init: function () {
		let that = this;
		this.ws.onmessage = function (msg) {
			let data = JSON.parse(msg.data);
			that.msgo.push({'name': data.name, 'time': data.time, 'message': data.message, 'img': data.img});
		};
	}
}

export default CHAT