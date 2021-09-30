const express = require('express');
const app = express();
const {randomCharacter,character_func} = require('./functions');

app.use(express.static('./public'));
app.get("/", (req, res)=>{
  res.sendFile(__dirname+"/index.html");
});
app.get("/characters/random",(req,res) => {
  res.json(randomCharacter());
})
app.get("/characters/:character",(req,res) => {
  const {character} = req.params;
  res.json(character_func(character));
})
app.get("*",(req,res) => {
  const {character} = req.params;
  res.status(404).json('<h1>Resource not found</h1>');
})

app.listen(process.env.PORT || 5000, ()=>{
  console.log("Server Started.");
});

