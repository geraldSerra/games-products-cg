import "./Bar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

export const Bar = ({ expandIcon, children }) => {
  return (
    <div className="Bar">
      {children}
      {expandIcon && <ArrowDropDownIcon className="Icon" />}
    </div>
  );
};

export const SelectBar = () => {
  return (
    <div className="SelectBar">
      <Bar expandIcon>Select a game</Bar>
    </div>
  );
};

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <Bar>
        <div>
          <SearchIcon className="Icon" />
          <div>Search</div>
        </div>
      </Bar>
    </div>
  );
};

export const PriceBar = () => {
  return (
    <div className="PriceBar">
      <Bar expandIcon>
        <div>
          <div className="label">
            <div className="sub">Price</div>
            <div className="text">All</div>
          </div>
        </div>
      </Bar>
    </div>
  );
};

export const ItemType = () => {
  return (
    <div className="ItemType">
      <Bar expandIcon>
        <div>
          <div className="label">
            <div className="sub">Item Type</div>
            <div className="text">All</div>
          </div>
        </div>
      </Bar>
    </div>
  );
};
