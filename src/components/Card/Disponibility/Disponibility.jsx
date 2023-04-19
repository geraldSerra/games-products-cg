import "./Disponibility.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Disponibility = ({ disponibility, stock }) => {
  return (
    <div className="disponibility-container">
      <div className="disponibility">
        <FiberManualRecordIcon className="dot"/>
        {disponibility}
      </div>
      <div className="stock">{stock}</div>
    </div>
  );
};

export default Disponibility;
