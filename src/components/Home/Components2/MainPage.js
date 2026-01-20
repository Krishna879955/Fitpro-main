import React from "react";
import { Box, Typography } from "@mui/material";
import HeroBannerImage from "../../../assets/images/banner1.png";
import Card2 from "./Card2";
import PCard from "./Pricing";
import Footer from "../../Components2/footer";

const MainPage = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#7247CE" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Typography
      fontWeight={600}
      color="#7247CE"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{ width: "600px", height: "700px", paddingTop: "50px" }}
    />
    <Typography>
      <Card2 />
    </Typography>
    <Typography>
      <PCard />
    </Typography>
    <Typography>
      <Footer />
    </Typography>
  </Box>
);

export default MainPage;
