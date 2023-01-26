const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")



dotenv.config()

const { Schema } = mongoose

const userSchema = new Schema({
    productImg: { type: String, required: true },
    productTitle: { type: String, required: true },
    productText: { type: String, required: true },
    userImg: { type: String, required: true },
    userName: { type: String, required: true },
    userWork: { type: String, required: true },
    price: { type: Number, required: true },
})

const Users = mongoose.model("users", userSchema)


const app = express()
app.use(cors())
app.use(bodyParser.json())




/* admin panel */
app.get("/", (req, res) => {
    res.send("<h1>Admin Panel</h1>")
})


/* istifadeciler */
app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
            }
            else {
                res.status(404).json({ message: "Not Found" })
            }
        }
        else {
            console.log(err);
        }
    })
})

/* add */
app.post("/users", (req, res) => {
    const user = new Users({
        productImg: req.body.productImg,
        productTitle: req.body.productTitle,
        productText: req.body.productText,
        userImg: req.body.userImg,
        userName: req.body.userName,
        userWork: req.body.userWork,
        price: req.body.price,
    })
    user.save()
    res.status(200).json({ message: "Create data" })
})



/* id tapma */
app.get("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
            }
            else (
                res.status(404).json({ message: "Not Found" })
            )
        }
        else {
            res.status(500).json({ message: "Altin Vurmusan" })
        }

    })
})

/* silme */
app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Delte" })
        }
        else {
            res.status(404).json({ message: "Not Found" })
        }
    })
})











const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.set("strictQuery", true)
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("DB connect");
        app.listen(PORT, () => {
            console.log("Server start");
        })
    }
    else {
        console.log(err);
    }
})