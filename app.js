const Express = require('express');
const path = require('path');

var app = new Express();

app.use(Express.static(__dirname+'/dist/LibraryAppangular'));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/LibraryAppangular/index.html'));
});

app.listen(process.env.PORT || 4455,()=>{
    console.log("Server running on PORT:4455");
});
