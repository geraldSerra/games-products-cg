import "./BarContainer.css";
import {
  ItemType,
  ExpandBar,
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
        <ExpandBar sub={'Price'} label={"All"}/>
        <ItemType />
      </div>
    </div>
  );
};
export default BarContainer;
