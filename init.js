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

let allchats = [
    {
        from: "neha",
        to: "preeti",
        message: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        message: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        message: "all the best!",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        message: "bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        message: "love you 3000",
        created_at: new Date(),
    }
];

Chat.insertMany(allchats)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });