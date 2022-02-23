const os = require('os');
const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const bookmarkFile = path.join(os.homedir(), "AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Bookmarks");

app.get('/', (req, res) => {
    // read file
    let json = fs.readFileSync(bookmarkFile);
    let bookmarks = JSON.parse(json);
    let html = fs.readFileSync('./index.html');
    // bookmarks
    res.send(`
    <script>let bookmarks = ${JSON.stringify(bookmarks)}; console.log(bookmarks)</script>
    ${html.toString()}
    `);
});


app.listen(
    3000,
    'localhost',
    function () {
        console.log(`Server run at http://localhost:8000`)
    }
)