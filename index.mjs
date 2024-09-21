import express from 'express';

const app = express();

app.use(express.json())

let items = [
    {
        id:1,
        name:"Ali",
        email:"ali@example.com"
    },
    {
        id:2,
        name:"khan",
        email:"khan@example.com"
    }

];