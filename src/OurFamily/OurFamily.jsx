import { Box, Typography } from "@mui/material";
import React from "react";
import FamilyCard from "./FamilyCard";
import happyParters from "./assests/svg.h2d-af745bd1.png";
import experDotor from "./assests/svg.h2d-2dcead65.png";
import hospital from "./assests/g.png";
import labs from "./assests/ae.png";
import { ForkLeft } from "@mui/icons-material";

const cardDetails = [
  {
    img: happyParters,
    name: "Happy partner",
    amount: 5000,
    color: "#EBF7FF",
    position: 'relative',
    top:'20px'

  },
  {
    img: hospital,
    name: "Hospital",
    amount: 200,
    color: "#FFF2F0",
     position: 'relative',
     top: '-280px',
    left: '350px'
  },
  {
    img: labs,
    name: "Laboratories",
    amount: 1000,
    color: "#FFF7E6",
     position: 'relative',
    top: '-300px',
 
  },
  {
    img: experDotor,
    name: "Expert Doctors",
    amount: 700,
    color: "#EBFAF1",
     position: 'relative',
       top: '-600px',
    left: '350px'
  },
];

const OurFamily = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",

          maxWidth: "1185px",
          height: "789px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "575px",
            justifyContent: "flex-start",
            position: 'relative',
            top: '-350px',
            fontFamily: "Poppins",
            fontWeight: " 600",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "18px",
              color: "#2AA7FF",
            }}
          >
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography
            sx={{
              fontSize: "48px",
              lineHeight: "67px",
              color: "#1B3C74",
            }}
          >
            Our Families
          </Typography>
          <Typography
            sx={{
              color: "#77829D",
              fontSize: "17px",
              lineHeight: "40.8px",
            }}
          >
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </Typography>
        </Box>
        <Box>
          {cardDetails.map((item, index) => (
            <FamilyCard
            key={index}
              height={60}
              width={60}
              src={item.img}
              alt={item.name}
              instruction={item.name}
              color={item.color}
              amount={item.amount}
              position={item.position}
              top={item.top}
              left={item.left}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurFamily;
