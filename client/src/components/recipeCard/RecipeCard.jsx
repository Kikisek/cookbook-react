import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  List,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'inline-block',
    width: '100%',
    marginBottom: '7px',
  },
  link: {
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    maxHeight: '100%',
    objectFit: 'cover',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const RecipeCard = props => {
  const { title, image, _id, ingredients } = props.recipe;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <Link className={classes.link} to={`/recipes/${_id}`}>
        <img src={image} alt="" className={classes.media} />
        <CardHeader title={title} />
      </Link>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List component="nav" aria-label="Ingredients">
            {ingredients.map(ingredient => (
              <ListItemText
                key={ingredient}
                primary={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
              />
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeCard;
