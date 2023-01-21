const app = require("express")()

const io = require("socket.io")(8031, {
	cors: {
		origin: ["http://localhost:8030"]
	}
})

io.on("connection", socket => {
	console.log(socket.id);
	socket.on("send-message", message => {
		io.emit("recieve-message", message)
		console.log(message)
	})
})

app.get("/", (req, res) => {
	res.send("Home page...")
})