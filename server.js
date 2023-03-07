const express=require("express")


var app=express();


PORT = process.env.PORT || 5000;

// express route
//an express route is a representation of how a server handles requests is a certain endpoint
app.get("/home", (req,res)=> {
res.send("<h1>Hello Groupe</h1>")
});


app.listen(PORT, (err)=> 
err ? console.log(err) : console.log(`Server is running  port ${PORT}.`)
);

