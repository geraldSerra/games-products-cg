import "./CardContent.css";

const CardContent = ({ img, title, price, description }) => {
  return (
    <div className="container">
      <div className="img">
        <img src={img} width="45px" height="45px" />
      </div>
      <div className="title">{title}</div>
      <div className="price">{price ? `$${price}` : ""}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default CardContent;
