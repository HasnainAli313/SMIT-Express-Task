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


app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json({ message: 'POST request - Adding new item', data: newItem });
});

app.put('/api/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const updatedItem = req.body;
    const index = items.findIndex(item => item.id === itemId);
  
    if (index !== -1) {
        items[index] = updatedItem;
        res.status(200).json({ message: `PUT request - Updating item ${itemId}`, data: updatedItem });
      } else {
        res.status(404).json({ message: `Item with ID ${itemId} not found` });
      }
    });

    app.delete('/api/items/:id', (req, res) => {
        const itemId = parseInt(req.params.id, 10);
        const index = items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            items.splice(index, 1);
            res.status(200).json({ message: `DELETE request - Deleting item ${itemId}` });
          } else {
            res.status(404).json({ message: `Item with ID ${itemId} not found` });
          }
        });