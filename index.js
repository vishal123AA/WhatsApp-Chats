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

// all chats
app.get('/chats', async (req, res) => {
    let chats = await Chat.find()
    res.render('index.ejs', { chats });
});

// new chat form
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});

//adding new chats
app.post('/chats', (req, res) => {
    const { from, to, msg } = req.body;
    const newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save()
        .then(() => {
            console.log('Chat saved successfully');
        })
        .catch((err) => {
            console.error('Error saving chat:', err);
        });
    res.redirect('/chats');
});

//editing form
app.get('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    let chat =  await Chat.findById(id);
    res.render('edit.ejs', { chat });
});

//editing chats
app.put('/chats/:id', async (req, res) => {
    const { id } = req.params;
    const { msg } = req.body;
    await Chat.findByIdAndUpdate(id, { msg }, {runValidators: true, new: true});
    res.redirect('/chats');
});

//deleting chats
app.delete('/chats/:id', async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});