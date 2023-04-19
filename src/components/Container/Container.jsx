import { Grid } from "@mui/material";
import Card from "../Card/Card";
import "./Container.css";

const items = [
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-2_ddoahk.png",
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-2_ddoahk.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-2_ddoahk.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-1_atmw3k.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-1_atmw3k.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-1_atmw3k.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-3_nnclvb.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "450",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-3_nnclvb.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "200",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873417/chicks%20gold/cg-icon-3_nnclvb.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "200",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873418/chicks%20gold/cg-icon-4_wl3mqt.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "200",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873418/chicks%20gold/cg-icon-4_wl3mqt.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "200",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873418/chicks%20gold/cg-icon-4_wl3mqt.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "200",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873418/chicks%20gold/cg-icon-5_i0lnxo.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "200",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873418/chicks%20gold/cg-icon-5_i0lnxo.png"
  },
  {
    disponibility: "ON SALE",
    stock: "In stock",
    title: "Blue Partyhat",
    price: "200",
    description: "Lorem ipsum dolor sit amet conseteur sadipscing elit.",
    img: "https://res.cloudinary.com/dsv5gok4c/image/upload/v1681873418/chicks%20gold/cg-icon-5_i0lnxo.png"
  },
];

const Container = () => {
  return (
    <div className="main-container">
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 5 }}
      >
        {items.map((item) => (
          <Grid item xs={1} lg={1}>
            <Card
              disponibility={item.disponibility}
              stock={item.stock}
              title={item.title}
              price={item.price}
              description={item.description}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Container;
