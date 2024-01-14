const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes');
//express app
const app = express();

//connect to MongoDB
// fiy7fsC33kHQSRK4
const dbURI = 'mongodb+srv://akshatrules04:qyHYYACHOfWwcQ0p@blogwebsite.sghinwt.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=> app.listen(3000))
    .catch((err)=> console.log(err));

// register view engine
app.set('view engine', 'ejs');




// mongoose and mongo sandbox routes

// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title:'new Blog 2',
//         snippet:'about my new Blog',
//         body:'more about my new Blog'
//     });

//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// });

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             res.send(err);
//         });
// });

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('64ea1f4d7d26e9f05d66fa90')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             res.send(err);
//         });
// });

//middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({extended:true})); // takes the url encoded data
// passes that into an object.
app.use(morgan('dev'));
app.use((req, res,next) => {
    res.locals.path = req.path;
    next();
  });


// app.get('/',(req,res) => {

//     //res.send("<p>Hello World</p>");
//     //res.sendFile('./views/index.html',{root:__dirname});

//     // const blogs = [
//     //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     //   ];
//     //   res.render('index', { title: 'Home', blogs });
//     res.redirect('/blogs');

// });

// mongoose & mongo tests

//routes 
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//       title: 'new blog',
//       snippet: 'about my new blog',
//       body: 'more about my new blog'
//     })
  
//     blog.save()
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
// app.get('/all-blogs', (req, res) => {
// Blog.find()
//     .then(result => {
//     res.send(result);
//     })
//     .catch(err => {
//     console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
// Blog.findById('5ea99b49b8531f40c0fde689')
//     .then(result => {
//     res.send(result);
//     })
//     .catch(err => {
//     console.log(err);
//     });
// });

app.get('/', (req, res) => {
res.redirect('/blogs');
});

app.get('/about', (req, res) => {
res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);



// 404 page
app.use((req, res) => {
res.status(404).render('404', { title: '404' });
});