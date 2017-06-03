const CHAT = {
	msgo: [],
	ws: new WebSocket("ws://localhost:3000/echo"),
	submit: function (msg) {
		this.ws.send(msg.message);
		console.log('woshisub');
	},
	init: function () {
		let that = this;
		this.ws.onmessage = function (msg) {
			let data = JSON.parse(msg.data);
			that.msgo.push({'name': 'lzy', 'time': '15:27', 'message': data.data, 'img': '#'});
		};
	}
}

export default CHAT