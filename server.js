const app = require("./src/app");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

process.on("SIGINT", () => {
    server.close(() => console.log("server closed"));
});
