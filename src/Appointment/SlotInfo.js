import { Box } from "@mui/material";
import React from "react";

const SlotInfo = ({ slot, selectedSlot, onClick,border ,readable}) => {
  const isSelected = selectedSlot === slot;
  return (
    <Box
    onClick={() => {
      if (readable) return; 
      onClick(slot); 
    }}
      sx={{
        // width: "84px",
        height: "31.59px",
        padding: "7px 10.96px 7.59px 11.44px",
        gap: "0px",
        borderRadius: "3px",
        borderWidth: "1px",
        borderStyle: "solid",
        
        fontFamily: "Lato, sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "19.6px",
        textAlign: "center",
        borderColor: isSelected ? (border ? "#FFFF" : "#2AA7FF") : "#ccc",
        backgroundColor: isSelected ? (border?"#00A500":"#e0f7fa") : "#fff",
        color: border?"#007100":"#2AA7FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2px",
      }}
    >
      {slot}
    </Box>
  );
};

export default SlotInfo;
