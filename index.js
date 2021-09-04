// const express = require('express');
// const cors = require('cors');
// const Joi = require('joi');
// const emojis = require("./data.json");
// const app = express();

// app.use(cors());
// app.use(express.json());

// // GET ***************************************************



// app.get('/', (req, res) => {
//     const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
//     res.send(randomEmoji);
// });

// app.get('/api/emojis', (req, res) => {
//     res.send(emojis);
// });

// app.get('/api/emojis/:id', (req, res) => {
//     const emoji = emojis.find(c => c.id === parseInt(req.params.id));
//     if (!emoji) return res.status(404).send('no emoji @ this ID')
//     res.send(emoji);
// });

// // POST **************************************************

// app.post('/api/emojis', (req, res) => {

//     const { error } = validateEmoji(req.body);

//     if (error) return res.status(400).send(error.details[0].message);

//     const emoji = {
//         id: emojis.length + 1,
//         name: req.body.name
//     };

//     emojis.push(emoji);
//     res.send(emoji);
// })

// // PUT ***************************************************

// app.put('/api/emojis/:id', (req, res) => {
//     const emoji = emojis.find(c => c.id === parseInt(req.params.id));
//     if (!emoji) return res.status(404).send('no emoji @ this ID');

//     const { error } = validateEmoji(req.body);

//     if (error) return res.status(400).send(error.details[0].message);

//     emoji.name = req.body.name;
//     res.send(emoji);
// });

// // DELETE ************************************************

// app.delete('/api/emojis/:id', (req, res) => {
//     const emoji = emojis.find(c => c.id === parseInt(req.params.id));
//     if (!emoji) return res.status(404).send('no emoji @ this ID');

//     const index = emojis.indexOf(emoji);
//     emojis.splice(index, 1);

//     res.send(emoji);
// });

// function validateEmoji(emoji) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(emoji, schema);
// }

// const port = 3000;

// app.listen(port, () => { console.log(`listening on port http://localhost${port}`) });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const emojis = require("./data.json");
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    res.send(randomEmoji);
});



app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
});