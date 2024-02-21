export default function loginController(req,res){
    const data = req.body
    console.log(data)
    res.send("login successfull.")
}