const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);   

app.get('/', (req,res) => {
    const blogs = [
        {title: 'first blog', snippet:'we are at first'},
        {title: 'second blog', snippet:'we are at second'},
        {title: 'third blog', snippet:'we are at third'},
     ]
    res.render('index', {title: 'home', blogs});
})
app.get('/about', (req,res) => {
    res.render('about', {title: 'about'});
})

app.get('/blogs/create', (req,res)=>{
    res.render('create', {title: 'create a new bog'}); 
})
// app.get('/about-us', (req,res) => {
//     res.redirect('/about');
// })

app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
})