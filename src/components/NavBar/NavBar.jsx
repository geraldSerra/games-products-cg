import Option from "../Options/Option";
import "./NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ButtonNav from "../ButtonNav/ButtonNav";

const options = ["currency", "items", "accounts", "services", "swap", "sell"];

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img
        className="logo"
        src="https://chicksgold.com/logo/chicks-logo-large.svg"
      />
      <div className="links">
        <div className="options">
          {options.map((option) => (
            <Option label={option} />
          ))}
        </div>
        <div className="usd">
          <Option label={"usd"} />
          <div className="cart">
            <div className="cart-button">
              <ShoppingCartIcon sx={{ fontSize: "12px" }} />
              <span>CART(5)</span>
            </div>
          </div>
          <ButtonNav
            label={"sign in"}
            icon={
              <img
                src="https://chicksgold.com/sign-in/profile.png"
                style={{ width: "10px" }}
              />
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
