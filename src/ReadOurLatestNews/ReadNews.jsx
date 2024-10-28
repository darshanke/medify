import { Box, Card, Typography } from "@mui/material";
import React from "react";
import image from "./assests/NewPhoto.png";
import bloger from "./assests/bloger.jpg";

const ReadNews = () => {
  return (
    <Card
      sx={{
        width: "363.33px",
        height: "477.77px",
        margin: '5px'
      }}
    >
      <img
        src={image}
        alt=""
        style={{ objectFit: "cover", width: "100%", height: "294px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "1px",
          fontFamily: "Poppins",
          fontWeight: 500,
          textAlign: "left",
        }}
      >
        <Typography
          sx={{ fontSize: "16px", lineHeight: "27px", color: "#77829D", margin: '6px' }}
        >
          Medical <span sx={{ color: "#DDDDDD" }}>|</span> March 31, 2022
        </Typography>
        <Typography
          sx={{ fontSize: "18px", lineHeight: "27px", color: "#1B3C74" , margin: '1rem'}}
        >
          6 Tips To Protect Your Mental Health When You’re Sick
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", margin: '6px' }}>
          <img src={bloger} height="32" width="32" alt="" />
          <Typography sx={{ color: "#1B3C74", marginLeft: '1.5rem' }}>Rebecca Lee</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ReadNews;
