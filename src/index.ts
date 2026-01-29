import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world. this is a simple express server")
})

app.post("/users", (req, res) => {
    const users = [{ name: "John Doe", age: 21 },
    { name: "Paul Smith", age: 89 }
    ]

    res.json(users);
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})
