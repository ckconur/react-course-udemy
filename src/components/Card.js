import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  // If ı would children components inside of this components to be render, have to add props.children with curly bracelets.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
