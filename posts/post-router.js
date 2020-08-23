const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
  // get a list of posts from the database
  // select * from posts;
  db.select("*")
    .from("posts")
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(error => {
      //save it to a log somewhere
      console.log(error);
      res.status(500).json({ message: error.message });
    });
});

router.get('/:id', (req, res) => {
  // use the docs http://knexjs.org/#Builder-where to implement the GET /api/posts/:id endpoint 
  db("posts")
    .where({ id: req.params.id })
    .first() // pick the first record from the array 
    .then(post => {
      if(post) {
        res.status(200).json({ data: post });
      } else {
        res.status(404).json({ message: "No posts by that ID" });
      }
    })
    .catch(error => {
      //save it to a log somewhere
      console.log(error);
      res.status(500).json({ message: error.message });
    });
});

router.post('/', (req, res) => {
  const post = req.body;

  // a post must have title and contents 
  if(isValidPost(post)) {
    // once you know the post is valid then try to save to the db
    db("posts")
      // there will be a warning in the console about .returning(), ignore it for SQLite
      .insert(post, "id")   
      .then(ids => {
        res.status(201).json({ data: ids });
      })
    .catch(error => {
      //save the error to a log somewhere 
      console.log(error); 
      res.status(500).json({ message: error.message });
    });
  } else {
    res
      .status(400)
      .json({ message: "please provide title and contents for the post "});
  }
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

function isValidPost(post) {
  return Boolean(post.title && post.contents);
}

module.exports = router;