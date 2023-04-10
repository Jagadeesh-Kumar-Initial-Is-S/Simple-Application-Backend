const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req,res) => {
    try{
        res.status(200).json({
        status : 'Success',
        advertisement :  'Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .'
    })
}catch(err){
    res.status(500).json({
        status: 'Failed',
        message : err
        })
    }
})

app.get('/details', (req,res) => {
    res.send({data: 'Hello World, from express',
    advertisement :  'Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .'
});
});

app.listen(port, () => console.log(`Hello world app is listening on port ${port}`));