import "./Option.css";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Option = ({ label }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="option" onMouseOver={handleExpanded}>
      {label}
      {expanded ? (
        <ExpandLessIcon sx={{ fontSize: "19px" }} />
      ) : (
        <ExpandMoreIcon sx={{ fontSize: "19px" }} />
      )}
    </div>
  );
};

export default Option;
