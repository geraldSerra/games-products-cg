import "./BarContainer.css";
import {
  ItemType,
  PriceBar,
  SearchBar,
  SelectBar,
} from "../ControlBar/ControlBar";

const BarContainer = () => {
  return (
    <div className="BarContainer">
      <div className="bar-left">
        <SelectBar />
      </div>
      <div className="bar-right">
        <SearchBar />
        <PriceBar />
        <ItemType />
      </div>
    </div>
  );
};
export default BarContainer;
