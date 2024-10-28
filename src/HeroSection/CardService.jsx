import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";

const CardService = ({ content,name, isSelected, onSelect, height , width }) => {
   
  return (
    <Card
    onClick={onSelect}
      sx={{
        width: "203px",
        height: "153px",
        textAlign: "center",
        margin: ".5rem",
        background: isSelected? "#2AA7FF14": "#FAFBFE"
      }}

    >
      <img
        src={content}
        alt="icon"
        height={height}
        width={width}
        style={{ 
        
            padding: '1rem',
        }}
      />

      <Typography
        variant="body2"
        sx={{
           
          color: isSelected?"#2AA7FF":"##ABB6C7",
          textAlign: "center",
        }}
      >
       {name}
      </Typography>
    </Card>
  );
};

export default CardService;
