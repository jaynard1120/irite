// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/irite'));

app.get('/*', (req, res) =>

  res.sendFile('index.html', { root: 'dist/irite/' }),
);

// Start the app by listening on the default Heroku port
<<<<<<< HEAD
app.listen(process.env.PORT || 8080, () => {
  console.log('SERVER LISTENING ON PORT: 8080');
  
});
=======
app.listen(8000 || process.env.PORT, () => {
  console.log("App is listening on port")
}
);

>>>>>>> 8103db25dfda74d31cb1ccc6ebfb09cc7a42047c

