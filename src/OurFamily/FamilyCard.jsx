import { Card, Typography } from "@mui/material";
import React from "react";

const FamilyCard = ({
  height,
  width,
  src,
  alt,
  instruction,
  amount,
  color,
  position,
  top,
  left,
  right,
}) => {
  return (
    <Card
      sx={{
        width: "242.5px",
        height: "304px",
        position: {position},
        top:{top},
        left:{left},
        // padding: "40px 0px",
        margin: '20px 20px 20px 20px',
        gap: "0px",
        borderRadius: "8px ",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Poppins",
        textAlign: "center",
    
      }}
    >
      <div
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50px",
          backgroundColor: { color },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={src} alt={alt} height={height} width={width} />
      </div>

      <Typography sx={{ color: "#1B3C74", fontWeight: 600, fontSize: "48px" }}>
        {amount}+
      </Typography>
      <Typography
        sx={{ fontWeight: 500, fontSize: "18px", lineHeight: "28px" }}
      >
        {instruction}
      </Typography>
    </Card>
  );
};

export default FamilyCard;
