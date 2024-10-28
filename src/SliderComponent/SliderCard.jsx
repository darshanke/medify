import { Card } from "@mui/material";
import React from "react";

const SliderCard = ({img,alt}) => {
  return (
    <Card
      sx={{
        width: "398.3px",
        height: "199.15px",
        borderRadius: "20px",
      }}
      
    >
        <img src={img} 
        style={{
            width: '100%',
            height: '100%',
        }}
        alt={alt} />
    </Card>
  );
};

export default SliderCard;
