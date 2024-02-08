const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./Register.js')

const app = express()
app.use(cors(
    {
        origin: ["https://nailsandlashes.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://portfolio:port@portfolio.rsdq3hc.mongodb.net/?retryWrites=true&w=majority');


app.get("/", (req, res) => {
    res.json("Information");
})
app.post('/submit', (req, res) => {
    const {name, email, tel} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("Already submitted")
        } else {
            RegisterModel.create({name: name, email: email, tel: tel})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})