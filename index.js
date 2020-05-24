const express=require("express")
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
console.log("Node works !!!")

app.use(express.static('build'))

const info=[
        {
        id:1,
        name:"chiranjeev"
        },
        {
        id:2,
        name:"aaru"

        },
        {
        id :3,
        name:"tara"
        }
]


app.get("/api/info",(request,response)=>{ 
   console.log("Reached get request" , info , "exported")
     response.send(info)
})
const PORT=3001

app.listen(PORT,()=>{
    console.log("Node listeing to port",PORT)
})