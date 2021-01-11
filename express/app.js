const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const userRoutes = require("./routes/route");
const port = 3000;
app.use(bodyparser.json());
//app.use(urlencoded.json({ extended: true }))

app.use(userRoutes);

app.get("/", (req, res) => {
	
	
 return res.json("start with /items");
});

app.listen(port, () => {
	console.log('listen to server', port)
});

