const express = require('express')

const bodyParser= require("body-parser")

const request = require('request')
const https = require('https')
const mailchimp = require("@mailchimp/mailchimp_marketing");
const { response } = require('express');


const app = express()

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})




app.post("/",function(req,res){

  const client = require("@mailchimp/mailchimp_marketing");

    client.setConfig({
        apiKey: "ff4199a9b87063d8d3d6eaf9c54a77dc-us21",
        server: "us21",
      });

      var email = req.body.email;
    var password = req.body.password;
      
      
      const batchSubscribe = async () => {
        const response = await client.lists.batchListMembers("0543da4fa3", {
          members:[
            {email_address: email,
              status: "subscribed",
              merge_fields:{
              FNAME: password,
            }}]
        });
        console.log(response);

        var errorCount =response.error_count;
        console.log(errorCount);


        if(errorCount ===0){
          res.sendFile(__dirname + "/success.html")
        }
        else{
          res.sendFile(__dirname + "/failure.html")
        }
      };

      
      
      batchSubscribe();

    

})

app.post("/failure",function(req,res){

  res.redirect("/")
   
})


app.listen(process.env.PORT || 3000,function(){
    console.log("Server listening on port ");
})






//Api key ff4199a9b87063d8d3d6eaf9c54a77dc-us21

//List id 0543da4fa3
//https://mailchimp.com/

// https://us21.admin.mailchimp.com/

//Server prefix us21
