
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "ff4199a9b87063d8d3d6eaf9c54a77dc-us21",
  server: "us21",
});


const batchSubscribe = async () => {
  const response = await client.lists.batchListMembers("0543da4fa3", {
    members:[
      {email_address: "maachuda@gmail.com",
        status: "subscribed",
        merge_fields:{
        FNAME: "bhand",
      }}]
  });
  console.log(response);
};

batchSubscribe();

// addMember();


//Api key ff4199a9b87063d8d3d6eaf9c54a77dc-us21

//List id 0543da4fa3
//https://mailchimp.com/

// https://us21.api.mailchimp.com/

// https://us21.admin.mailchimp.com/3.0/lists/0543da4fa3


// https://us21.admin.mailchimp.com/schema/3.0/Definition/Lists
//Server prefix us21
