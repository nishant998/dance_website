const express = require('express') ;
const app = express() ;
const pug = require('pug') ;
const path = require('path') ;
const port = 80 ;

//Express related Stuff
app.use('/static', express.static('static')) 
app.use(express.urlencoded())

//Pug realted stuff
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/' , (req , res)=>{
    res.render('./index.pug') ;
})
app.get('/contact' , (req , res)=>{
    res.render('./contact.pug') ;
})



//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});