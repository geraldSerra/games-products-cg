import "./Footer.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const chicksGold = ["Games", "About Us", "Blog", "Sitemap"];

const support = ["Contact Us", "FAQ"];

const legal = ["Privacy Policy", "Terms of Service", "Copyright Policy"];

const Footer = () => {
  return (
    <div className="footer">
      <Grid
        container
        sx={{
          bgcolor: "#303141",
        }}
      >
        <Grid
          container
          justifyContent={"center"}
          sx={{
            minHeight: "fit-content",
            bgcolor: "#2B2C3B",
            alignItems: "center",
            py: ".5rem",
          }}
        >
          <Grid
            container
            item
            xs={10}
            sm={8}
            md={8}
            lg={8}
            sx={{
              alignItems: "center",
            }}
          >
            <img
              className="pay"
              src="https://chicksgold.com/payment-methods/visa.svg"
            />
            <img
              className="pay"
              src="https://chicksgold.com/payment-methods/mastercard.svg"
            />
            <img
              className="pay"
              src="https://chicksgold.com/payment-methods/amex.svg"
            />
            <img
              className="pay"
              src="https://chicksgold.com/payment-methods/skrill.svg"
            />
            <img
              className="pay"
              src="https://chicksgold.com/payment-methods/crypto.svg"
            />
            and 50+ more
            <Divider sx={{ color: "white" }} />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          sx={{
            minHeight: "fit-content",
            height: "8vh",
            alignItems: "center",
          }}
        >
          <Grid
            className="social-container"
            container
            item
            xs={10}
            sm={8}
            md={8}
            lg={8}
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              className="social"
              src="https://chicksgold.com/icons/facebook.svg"
            />
            <img
              className="social"
              src="https://chicksgold.com/icons/instagram.svg"
            />
            <img
              className="social"
              src="	https://chicksgold.com/icons/twitter.svg"
            />
            <img
              className="social"
              src="https://chicksgold.com/icons/discord.svg"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          sx={{
            display: "flex",
            py: "3.5vh",
            minHeight: "fit-content",
          }}
        >
          <Grid
            container
            item
            justifyContent={"space-between"}
            alignContent={"flex-start"}
            alignItems={"flex-start"}
            xs={10}
            sm={8}
            md={8}
            lg={8}
          >
            <Grid
              item
              xs={12}
              sm={2}
              sx={{ display: "flex", flexDirection: "column", gap: ".56rem" }}
            >
              <img
                className="logo-footer"
                src="https://chicksgold.com/logo/chicks-logo-large.svg"
              />
              support@chicksgold.com
            </Grid>

            <Grid item xs={12} sm={2}>
              <Typography
                variant="h6"
                textAlign="left"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { md: "flex" },
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  mb: 1,
                }}
              >
                Community
              </Typography>
              {chicksGold.map((item) => {
                return (
                  <Typography
                    variant="body2"
                    href=""
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: "inherit",
                      fontSize: "inherit",
                      textDecoration: "inherit",
                      pb: "5px",
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>

            <Grid item xs={12} sm={2}>
              <Typography
                variant="h6"
                textAlign="left"
                component="a"
                noWrap
                sx={{
                  display: { md: "flex" },
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  mb: 1,
                }}
              >
                More
              </Typography>
              {support.map((item) => {
                return (
                  <Typography
                    variant="body2"
                    textAlign="center"
                    component="a"
                    href=""
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: "inherit",
                      fontSize: "inherit",
                      textDecoration: "inherit",
                      pb: "5px",
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>

            <Grid item xs={12} sm={2}>
              <Typography
                variant="h6"
                sx={{
                  display: { md: "flex" },
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  alignContent: "center",
                  mb: 1,
                }}
              >
                Legal
              </Typography>
              {legal.map((item) => {
                return (
                  <Typography
                    variant="body2"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: "inherit",
                      fontSize: "inherit",
                      textDecoration: "inherit",
                      pb: "5px",
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  wrap: "wrap",
                  gap: "8px",
                }}
              >
                <img
                  className="reviews"
                  src="https://chicksgold.com/icons/trust-pilot-5-star.svg"
                />
                Trustpilot Reviews
              </div>
            </Grid>
            <Grid
              container
              item
              justifyContent={"center"}
              sx={{
                height: "7vh",
                alignItems: "center",
              }}
              className="rights"
            >
              © 2017 - 2023 Chicksgold.com. All Rights Reserved
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
