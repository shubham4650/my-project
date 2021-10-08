const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const comments = [
    {
        img:'https://th.bing.com/th/id/R.8594cb79bfb6ba49554dae945e741dec?rik=du8c1Izc4BE%2f0Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-ImTUEwyo1B8%2fT27AmBasQ9I%2fAAAAAAAAAh4%2fpaRIF7r5te8%2fs1600%2fGerman%2bShepherd%2bPuppy%2bPictures1.jpg&ehk=VVWILbTNF7qywqgnP0kG%2bRayShy9%2fHbUtGSIj%2f2Mn1Q%3d&risl=&pid=ImgRaw&r=0',
        author:"pug",
        title: "woof woof",
        desc:"its a beauty dog if any animal lover then defenately love this dog this dog have good behaviour and bauty",
    }
];
app.get('/dog', (req, res) => {
    res.render('yahu/home', {comments });
})
app.get('/dog/new', (req, res) => {
    res.render('yahu/new');
})

app.post('/dog', (req, res) => {
    const { img,author,title,desc } = req.body;
    comments.push({ img,author,title,desc});
    res.redirect('/dog'); 

})




app.listen(3000, () => {
    console.log("server start running");
})