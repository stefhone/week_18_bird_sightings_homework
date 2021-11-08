const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(cors());
app.use(express.json()); // add a piece of middleware, ensures body get from the request is turned into JavaScript.

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('birds');
    const sightingsCollection = db.collection('sightings');
    const sightingsRouter = createRouter(sightingsCollection);
    app.use('/api/sightings', sightingsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
