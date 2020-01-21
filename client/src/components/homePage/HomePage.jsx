import React, { useState, useEffect } from 'react';

const Header = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/recipes')
      .then(response => response.json())
      .then(res => setRecipes(res))
      .catch(err => setError(err));
  }, []);

  return (
    <div className="jumbotron jumbotron-fluid py-4">
      <header className="container">
        <h1 className="display-5">Kiki's CookBook</h1>
        <p className="lead">
          This is a site where I can easily navigate through my personal collection of recipes.
        </p>
      </header>
    </div>
  );
};

export default Header;
