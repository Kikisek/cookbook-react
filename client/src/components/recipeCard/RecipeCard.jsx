import React from 'react';

const RecipeCard = (props) => {
  const { title, image, _id } = props.recipe;
  return <div>
    <a href={`/recipes/${_id}`}>{title}</a>
    <img src={image} alt={`Go to ${title}`} />
  </div>;
};

export default RecipeCard;
