import "./Button.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Button = ({ label, type, icon }) => {
  return (
    <div className={`button-container button-${type}`}>
      {label}{" "}
      {icon && (
        <div className="button">
          <ShoppingCartIcon sx={{ fontSize: "12px" }} />
        </div>
      )}
    </div>
  );
};

export default Button;
