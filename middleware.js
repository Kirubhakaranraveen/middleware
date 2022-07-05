const Express=requrie("express");

const  app =Express();

const middleware=(req,res,next)=>{
    console.log(midlleware);
    next()
};

app.get('/',middleware,function(req,res){
    res.send("hello");
});

const middleware2=(req,res,next)=>{
    console.log("middleware function");
}

app.get('/',function(req,res){
    res.send("hello world")
});

app.get('/api/main',function(req,res){
    res.send("Middleware are like any general function which takes in three parameters are request,response and next function ")
});

app.listen(4001);