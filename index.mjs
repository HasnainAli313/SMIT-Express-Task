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

app.get('/api/items', (req, res) => {
    res.status(200).json({ message: 'GET request - Fetching all items', data: items });
  });
  

