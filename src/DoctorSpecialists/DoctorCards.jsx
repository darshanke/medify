import { Card, Typography } from "@mui/material";
import React from "react";
import Doctor from "../DoctorsImage/DoctoCenter.png";

const DoctorCards = ({ img, name , designation}) => {
  const commonStyles = {
    fontFamily: "Poppins, sans-serif",
  };
  return (
    <Card
      {...commonStyles}
      sx={{
        width: "370px",
        height: "505px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: '1px',
        border: 'none !important',
        // display: 'block',
      }}
    >
      <div
        style={{
          padding: "10px 0px 0px 0px",
          borderRadius: "250px 250px 8px 8px",
          background: "linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)",
          boxShadow: '0px 15px 55px -10px #00000017',
          borderStyle:'none'

        }}
      >
        <img
          src={img}
          alt={name}
          style={{
            width: "100$",
            height: "394px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "48px",
            textAlign: "center",
          }}
        >
         {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "27px",
            textAlign: "center",
            color: '#2AA7FF'


          }}
        >
        {designation}
        </Typography>
      </div>
    </Card>
  );
};

export default DoctorCards;
