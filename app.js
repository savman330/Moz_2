// app.js

const   express = require("express"),
        app = express(),
        port = process.env.PORT;
        

app.get('/', (req, res) => {
    res.send('hello before from Express');
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
