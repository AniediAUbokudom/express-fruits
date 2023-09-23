const express = require('express');
const app = express();

//data
const fruits=require('./models/fruits') //require the new fruits.js file in server.js


//An array of fruits
// const fruits = ['apple', 'banana', 'pear'];

//As data keeps growing, they could get messy, we move them to dedicated folders. 
// Move this KVP to a fruits.js file under a modules folder
//Fruits-key value pairs/Object
// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'kamquat',
//         color: 'orange',
//         readyToEat: true
//     },
//     {
//         name:'lychee',
//         color: 'fuschia',
//         readyToEat: true
//     },
// ];

//add our view template above the routes


//routes
//index route-All the fruits
app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//add show route- show singular route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
    // res.render('show')//renders the info using the appropriate template
});


app.listen(3000, () => {
    console.log('listening');
});