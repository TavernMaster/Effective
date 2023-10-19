import WebSocket from 'ws'

let ws

function connect() {
	ws = new WebSocket(process.env.HISTORY_SOCKET_URL)

	ws.onopen = function () {
		console.log('Соединение HistorySocket установлено.')
	}

	ws.onclose = function (event) {
		if (event.wasClean) {
			console.log('Соединение HistorySocket закрыто чисто')
		} else {
			console.log('Обрыв HistorySocket соединения')
		}
		console.log('Код:', event.code, 'причина:', event.reason)

		setTimeout(function () {
			connect()
		}, 1000)
	}

	ws.onerror = function (error) {
		console.log('Ошибка ' + error.message)
		ws.close()
	}
}

connect()

export default function historySend(userId, action, data) {
	if (!ws.readyState) {
		setTimeout(function () {
			historySend(JSON.stringify({userId, action, data}))
		}, 100)
	} else {
		ws.send(JSON.stringify({userId, action, data}))
	}
}
