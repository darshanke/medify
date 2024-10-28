import React from "react";
import Labs from "../HeroSection/images/Drugstore.png";
import BloddSample from "./assests/Blood Sample.png";
import HeatRate from "./assests/Heart Rate Monitor (1).png";
import Immune from "./assests/Immune.png";
import Stethoscope from "./assests/Stethoscope.png";
import xRay from "./assests/X-Ray.png";
import HeartMoniter from "./assests/Heart Rate Monitor.png";
import { Box, Typography } from "@mui/material";
import CardService from "../HeroSection/CardService";

const cardDetails = [
  { name: "Density", img: Labs },
  { name: "Primary Care", img: Stethoscope },
  { name: "Cardiography", img: HeatRate },
  { name: "MRI Resonance", img: HeartMoniter },
  { name: "Blood Test", img: BloddSample },
  { name: "Piscoligy", img: Immune },
  { name: "Laboratory", img: Labs },
  { name: "X-Ray", img: xRay },
];
const FindBySpecification = () => {
  const commonStyles = {
    fontFamily: "Poppins, sans-serif",
  };
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}
    >
      <Typography
        {...commonStyles}
        sx={{
          fontSize: "48px",
          fontWeight: 600,
          lineHeight: "67px",
          textAlign: "center",
          color: "#1B3C74",
          marginTop: '0'
        }}
      >
        Find by specialisation
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
          gap: 2,
          marginTop: '2rem'
        }}
      >
        {cardDetails.map((item, index) => (
          <CardService
            content={item.img}
            key={index}
            height="80"
            width="80"
            name={item.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FindBySpecification;
