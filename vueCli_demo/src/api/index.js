const CHAT = {
	msgo: [],
	ws: new WebSocket("ws://112.74.85.58:8080/echo"),
	submit: function (msg) {
		this.ws.send(msg.message)
	},
	init: function () {
		this.ws.onmessage = function (e) {
			this.msgo.push({name: 'lzy', time: '15:27', message: event.data, img: '#'})
		}
	}
}

export default CHAT