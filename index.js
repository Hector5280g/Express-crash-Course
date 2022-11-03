const express = require('express');
const path = require('path')
const app = express();

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    },
]
//gets all members
app.get('/api/members', (req, res)=>
res.json(members));


//set a static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log (`Server started on ${PORT}`));
