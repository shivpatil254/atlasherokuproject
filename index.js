
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 3000;



const connectionString ="mongodb+srv://shivpatil55555:shivpatil5@cluster0.lcevb.mongodb.net/shivpatildb?retryWrites=true&w=majority"
mongoose.connect(connectionString,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    },
    (err,response)=>{
        if(err){
            console.log("There was error connecting to MongoDB!")
        }
        else{
            console.log("Connected to MongoDB!");
        }
    }
    )
    const mySchema = new mongoose.Schema({
  
        id: Number,
        Title: String,
        location:String,
        Posting_date:String
      
    })
const model = mongoose.model("shivpatildb",mySchema,"shivpatilcaws");

app.get("/",(req,res)=>{
    // error handling
    const language= req.query['id']
    if(language!==undefined)
    {
        model.find({"id": language},(err,data)=>{
            if(err){
                console.log("Error getting data!")
            }
            else{
                res.json(data)
            }
        })
    }
    else{
        res.status(400).json({"error":"The keys is not correct, it should be language"})
    }

})
app.listen(port,()=>{
    console.log("Server is listening")
})