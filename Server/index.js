// const { sequelize } = require("./src/models");
const express = require("express");
const app = express();
const path = require("path");
const port = 8031;
const cors = require("cors");
const io = require("socket.io")(port, {
	cors: {
		origin: ["http://localhost:8030"]
	}
});
const Chat = require("./routes/chat")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// SETUP SOCKET.IO SERVER
io.on("connection", socket => {
	console.log(socket.id)
})
//ROUTES HANDLERS
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/chat", Chat)

app.listen({ port: port }, async () => {
  console.log(`Client up on http://localhost:${port}`);
  // await sequelize.authenticate();
  // console.log("Database connected.");
});