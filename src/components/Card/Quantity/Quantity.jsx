import "./Quantity.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Quantity = () => {
  return (
    <div className="quantity-container">
      <span>1</span>
      <div className="quantity-buttons-container">
        <ArrowDropUpIcon
          className="quantity-button"
          sx={{ width: "1rem", height: "1rem", mb: -0.6 }}
        />

        <ArrowDropDownIcon
          className="quantity-button"
          sx={{ width: "1rem", height: "1rem", mt: -0.6 }}
        />
      </div>
    </div>
  );
};

export default Quantity;
