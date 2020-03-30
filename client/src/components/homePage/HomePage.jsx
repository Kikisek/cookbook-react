import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import RecipeCard from '../recipeCard/RecipeCard';

const useStyles = makeStyles(() => ({
  wrapper: {
    columnCount: 3,
    columnGap: '13px',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      columnCount: 1,
    },
  },
}));

const Header = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/recipes')
      .then(response => response.json())
      .then(res => setRecipes(res))
      .catch(err => setError(err));
  }, []);

  const classes = useStyles();

  return (
    <>
      {error && <div>Something went wrong...</div>}
      {!error && (
        <>
          <div className="jumbotron jumbotron-fluid py-4">
            <header className="container">
              <h1 className="display-5">Kiki's CookBook</h1>
              <p className="lead">
                This is a site where I can easily navigate through my personal collection of
                recipes.
              </p>
            </header>
          </div>

          <Container>
            <Box className={classes.wrapper} container direction="column" spacing={3} wrap="wrap">
              {recipes.map(recipe => (
                <RecipeCard className={classes.card} recipe={recipe} key={recipe._id} />
              ))}
            </Box>
          </Container>
        </>
      )}
    </>
  );
};

export default Header;
