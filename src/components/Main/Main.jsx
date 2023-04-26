import "./Main.css";
import { Grid, Typography } from "@mui/material";
import Container from "../Container/Container";
import BarContainer from "../BarContainer/BarContainer";

const Main = () => {
  return (
    <div className="main">
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="h4">Condimentum conseteur</Typography>
          <BarContainer />
          <Container />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
