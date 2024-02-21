import express from 'express'
import bodyParser from 'body-parser'
import loginController from './controllers/auth/login.js'
const app = express()
const port = 3000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/",(req,res)=>{
  res.send("hello world.")
})
// ========== all routes
// get user data
app.get("/user",(req,res)=>{

})

// get all courses data
app.get("/courses",(req,res)=>{

})

// get single course data
app.get("/courses/:id",(req,res)=>{

})

// complete challenge
app.post("/completechallenge/",(req,res)=>{

})

// login the user getting the data from freecodecamp server and saving it on the server 
app.post("/login",loginController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

