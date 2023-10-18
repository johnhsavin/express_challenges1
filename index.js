// import libraries from Express
import express from "express"

// Call Express to create API
const app = express()
const port = 3000

// challenge 1 - Simple greeting endpoint
app.get("/", (req, res) => {
res.send("hello")
})

// // challenge 2 - Lorem Ipsum endpoint
app.get("/lorem", (req, res) => {
res.send("lorem ipsum dolor sit amet, consectetur adipiscing elit... odio unde")
})

// challenge 3 - Endpoint with Dynamic Data
app.get("/user/:username/", (req, res) => {
    const name = req.params
    res.send(`Welcome back, ${name.username}!`)
})

// challenge 4 - User Endpoint with Dynamic Data
app.get("/user/:username/:food", (req, res) => {
    const name = req.params
    const favoriteFood = req.params
    res.send(`Hi my name is ${name.username}, and my favorite food is, ${favoriteFood.food}`)
})

// Challenge 5 - Train Route Endpoint





// create port to listen
app.listen(port, () => {
console.log(`listening on http://localhost:${port}`)
})