const express = require('express');
const app = express();
const port = 8080;

const mongoose = require('mongoose');
const Chat = require('./models/chat');

main()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect('mongodb://localhost:27017/WhatsApp');
}

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/chats', async(req, res) => {
    let chats = await Chat.find()
    res.render('index.ejs', { chats });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});