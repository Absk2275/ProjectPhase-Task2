const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connection } = require('./connector');
const { tallySchema } = require('./schema');
connection();


app.get("/totalRecovered", async(req,res) => {
    try{
   const tot_recovered = await connection.aggregate([{$group:{_id:"total", recovered:{$sum:"$recovered"}}}]);
   res.status(200).json({
    status:"success",
    tot_recovered
})
   }
   catch(e){
    res.status(500).json ({
        status: "Failed",
        message: e.message
    })
   }
})


app.get("/totalActive", async(req,res) => {
    try{
        const tot_active=await connection.aggregate([{$group:{_id:'total',active:{$sum:{$subtract:['$infected','$recovered']}}}}]);
        res.status(200).json({
    status:"success",
    tot_active 
})
   }
   catch(e){
    res.status(500).json ({
        status: "Failed",
        message: e.message
    })
   }
})

app.get("/totalDeath", async(req,res) => {
    try{
   const tot_death = await connection.aggregate([{$group:{_id:"total", death:{$sum:"$death"}}}]);
   res.status(200).json({
    status:"success",
    tot_death
})
   }
   catch(e){
    res.status(500).json ({
        status: "Failed",
        message: e.message
    })
   }
})

app.get("/hotspotStates", async(req,res) => {
    try{
   const hotspot = await connection.find(
    {
      $expr: {
        $gt: [
          {
            $round: [
              {
                $divide: [
                  { $subtract: ["$infected", "$recovered"] },"$infected"]},5]},0.1]}},
                  {state: 1, _id: 0,
                    rate: {
                    $round: [
                    {
                    $divide: [{ $subtract: ["$infected", "$recovered"] }, "$infected"],},5,]}});
    res.status(200).json({
    status:"success",
    hotspot
})
   }
   catch(e){
    res.status(500).json ({
        status: "Failed",
        message: e.message
    })
   }
})

app.get("/healthyStates", async(req,res) => {
    try{
   const healthy = await connection.aggregate([{$project:{_id:0,state:1,mortality:{$round:[{$divide:["$death","$infected"]},5]}}}, {
    $match: {
      mortality: {
        $lt: 0.005
      }
    }
  }]);
   res.status(200).json({
    status:"success",
    healthy
})
   }
   catch(e){
    res.status(500).json ({
        status: "Failed",
        message: e.message
    })
   }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;