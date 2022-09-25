import "./Card.css";

// 래퍼 컴포넌트

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
