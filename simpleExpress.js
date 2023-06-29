var exp=require('express');
var app=exp();

app.get('/home',function(req,res)
{
    res.send("<h1> This is Home</h1>")
});
app.listen(9010,function()
{
    console.log("server is active")
})