const Joi = require('joi');
const express = require('express');
const app = express();
const emojis = require("./data.json");

app.use(express.json());
app.use(cors());




function validateEmoji(emoji) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(emoji, schema);
}

//GET***************************************************

app.get('/', (req, res) => {
    res.send(emojis)
});

app.get('/api/emojis', (req, res) => {
    res.send(emojis)
});

app.get('/api/emojis/:id', (req, res) => {
    const emoji = emojis.find(c => c.id === parseInt(req.params.id));
    if (!emoji) return res.status(404).send('no emoji @ this ID')
    res.send(emoji);
});

//POST**************************************************

app.post('/api/emojis', (req, res) => {

    const { error } = validateEmoji(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const emoji = {
        id: emojis.length + 1,
        name: req.body.name
    };

    emojis.push(emoji);
    res.send(emoji);
})

//PUT***************************************************

app.put('/api/emojis/:id', (req, res) => {
    const emoji = emojis.find(c => c.id === parseInt(req.params.id));
    if (!emoji) return res.status(404).send('no emoji @ this ID');

    const { error } = validateEmoji(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    emoji.name = req.body.name;
    res.send(emoji);
});

//DELETE************************************************

app.delete('/api/emojis/:id', (req, res) => {
    const emoji = emojis.find(c => c.id === parseInt(req.params.id));
    if (!emoji) return res.status(404).send('no emoji @ this ID');

    const index = emojis.indexOf(emoji);
    emojis.splice(index, 1);

    res.send(emoji);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port http://localhost${port}`));