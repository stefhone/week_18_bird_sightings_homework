const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // INDEX Router (get)
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // SHOW Router (get)
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // CREATE Router (post)
  router.post('/', (req, res) => { // 1st argument '/' going to root of app, 2nd arguemt annonymous callback function with (req, res) as parameters
    const newData = req.body; // body object of request object defined as newData variable.
    collection // using our collection (aka table) of sightings
    .insertOne(newData) // make a promise - insertOne method to pass in newData variable defined above
    .then((result) => { // Asynchronous. Once finished adding one bit of data. Respond back with jsonified result using InsertOneWriteOpResult method (I think)?? 
      res.json(result.ops[0])
    })
    .catch((err) => { // Error handling validation - if anything goes wrong with db queries 
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  // DESTROY Router (delete)
  router.delete('/:id', (req, res) => { // 1st argument '/':id going to root of app and querying specific object id, 2nd arguemt annonymous callback function with (req, res) as parameters
    const id = req.params.id; // give me req.params.id as a string - defined as id variable.
    collection // using our collection (aka table) of sightings
    .deleteOne({ _id: ObjectID(id) }) // make a promise - deleteOne method to remove object id
    .then(result => { // Asynchronous. Once finished removing one bit of data. Respond back with jsonified result. 
      res.json(result)
    })
    .catch((err) => { // Error handling validation - if anything goes wrong with db queries 
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  return router;
};

module.exports = createRouter;
