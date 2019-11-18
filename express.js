const qwe = require("express")
const app = qwe()
const str=[
    {
        id:1,name:"steve"
    },{
        id:2,name:"patel"
    }
]
const PORT = 3000
app.get('/',(req,res)=>{
    res.send("Helllooo")
})
app.listen(PORT , ()=>console.log('Server Running'))
