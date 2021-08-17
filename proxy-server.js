const app = require("express")()

app.use((req, res, next) => {
	if(process.env.NODE_ENV != 'development' && !request.secure) {
		res.sendFile(path.join(__dirname, '/blocked.html'));
	}
});

app.listen(9000, () => console.log("HTTP Blocking Proxy has Started!"));