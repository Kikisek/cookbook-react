import React from 'react';

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid py-4">
      <header className="container">
        <h1 className="display-5">Kiki's CookBook</h1>
        <p className="lead">
          This is a site where I can easily navigate through my personal collection of recipes.
        </p>
        <hr className="my-3" />
        <p>Sign in or register to add new recipes</p>
        <div className="d-flex">
          <a className="btn btn-regular btn-md" href="/recipes/new" role="button">
            Add New Recipe
          </a>
          <a className="btn btn-regular btn-md mr-2 ml-auto" href="/login" role="button">
            Sign In
          </a>
          <a className="btn btn-regular btn-md" href="/register" role="button">
            Register
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
