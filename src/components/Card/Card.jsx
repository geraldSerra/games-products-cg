import "./Card.css";
import Grid from "@mui/material/Grid";
import Disponibility from "./Disponibility/Disponibility";
import Quantity from "./Quantity/Quantity";
import Button from "./Button/Button";
import CardContent from "./CardContent/CardContent";

const Card = ({ disponibility, stock, title, price, description, img }) => {
  return (
    <div className="card-container">
      <Grid container spacing={1.5}>
        <Grid
          container
          item
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Disponibility disponibility={disponibility} stock={stock} />
          <Quantity />
        </Grid>
        <Grid container item>
          <CardContent
            title={title}
            price={price}
            description={description}
            img={img}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          flexDirection="row"
          sx={{ height: "45px" }}
        >
          <Button label={"Details"} type={"detail"} />
          <Button label={"Add"} type={"add"} icon={true} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
