import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
} from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
// }));

const RecipeDetail = props => {
  // const classes = useStyles();
  const [recipe, setRecipe] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log('here')
    fetch(`http://localhost:8080/recipes/${props.match.params.id}`)
      .then(response => response.json())
      .then(res => setRecipe(res))
      .catch(err => setError(err));
  }, [props.match.params.id]);

  return (
    <Card>
      {error && <div>Something went wrong...</div>}
      {recipe && recipe.title}
      <Link to={'/recipes'}>
        Back
      </Link>
    </Card>
  );
};

export default RecipeDetail;
