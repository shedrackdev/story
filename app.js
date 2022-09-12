const express =require("express");
const bodyParser= require("body-parser");
const date=require("./date ");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.use(express.static("public"));


const textWritten=["rice and Beans","Yam and Egg","Egusi soup and Semovita"];
const workItem=[];

//for home root
app.get("/",(req,res)=>{
    let get=date.dat();
    res.render('list',{headingOfThePage:get, inputTextItem:textWritten})
})  

//to redirect to home root
app.post("/",(req,res)=>{
    console.log(req.body)
    const newItemInWork=req.body.inputText;
    if(req.body.btn ==='WORK'){
        workItem.push(newItemInWork); 
        res.redirect("/work");
    }
    else{
        textWritten.push(newItemInWork);
        res.redirect("/");
    }

})


//for work root
app.get("/work",(req,res)=>{
    res.render("list",{headingOfThePage:"WORK ITEM",inputTextItem:workItem});
})

app.get("/about",(req,res)=>{
    res.render("about")
})

//button click
app.post("/about",(req,res)=>{
    res.redirect("/")
})

//to listen at port
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})