const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/src/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));