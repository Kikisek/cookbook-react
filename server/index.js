const express = require('express');
const app = express();
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/recipes', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

let RecipeSchema = new Schema({
  title: {
    en: String,
    cs: String
  },
  image: String,
  ingredients: [
    {
      name: {
        en: String,
        cs: String
      },
      amount: Number,
      unit: {
        en: String,
        cs: String
      }
    }
  ],
  directions: {
    en: [String],
    cs: [String]
  },
  servings: Number,
  prepTime: Number,
  cookingTime: Number,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      rel: 'User'
    },
    username: String
  }
});

let Recipe = mongoose.model('Recipe', RecipeSchema);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.redirect('/recipes');
});

app.get('/recipes', function(req, res) {
  Recipe.find({}, function(err, recipes) {
    err ? console.log(err) : res.json(recipes);
  });
});

app.get('/recipes/:id', function(req, res) {
  console.log(req.params.id);
  Recipe.findById(req.params.id, function(err, recipe) {
    err ? console.log(err) : res.json(recipe);
  })
});

// start the DB locally: mongod
app.listen(8080, () => console.log('Example app listening on port 8080!'));
