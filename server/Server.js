//creating a new instance of express
const express = require('express');
const app = express();
//tell express to serve public folder and everything in it
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
//define the port 
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})