import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world. this is a simple express server")
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})