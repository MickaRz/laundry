const express = require("express")
const app = express()

//panggil router member
const member = require("./routers/member")

app.use("/member",member)

app.listen(8000,() =>{
    console.log(`server run on port 8000`)
})