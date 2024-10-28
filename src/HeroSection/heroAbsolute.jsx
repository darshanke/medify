import { Box, Button,  Typography } from "@mui/material";
import React, { useState } from "react";
import SearchField from "../TextField/SearchField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CardService from "./CardService";
import Ambulance from "./images/Ambulance.png";
import Drugstore from "./images/Drugstore.png";
import Capsule from "./images/Capsule.png";
import hospital from "./images/Hospital.png";
import Doctor from "./images/Doctor.png";


const cardDetails = [
  { name: "Doctor", img: Doctor },
  { name: "Labs", img: Drugstore },
  { name: "Capsule", img: Capsule },
  { name: "hospital", img: hospital },
  { name: "Ambulance", img: Ambulance },
];

const HeroAbsolute = ({changeUi}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const handleSelect=(index)=>{
    setSelectedCardIndex(index);
  }
  return (
    <Box
      sx={{
        border: "1px solid #F0F0F0",
        width: "1170px",
        height: changeUi?"111px":'429px',
        position: "absolute",
        top: changeUi?"179px":"530px",
        left: "auto",
        opacity: 1,
        zIndex: 2,
        background: "#FFFFFF",
        boxShadow: "6px 6px 35px 0px #1028511C",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center' , 
        borderRadius: changeUi?'15px 15px 0px 0px': 'none',    
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          margin: "2rem",
          marginTop:changeUi && "5rem",
          marginBottom: "6rem",
          position: "relative",
          left: changeUi?"none":"110px",
        }}
      >
        <SearchField helpertext="state" changeUi={changeUi} />
        <SearchField helpertext="city" changeUi={changeUi}/>
        <Button
          variant="contained"
          sx={{
            color: "#FFFFFF",
            background: "#2AA8FF",
            height: "50px",
          }}
          startIcon={
            <IconButton sx={{ padding: 0, color: "#FFFFFF" }}>
              <SearchIcon /> 
            </IconButton>
          }
        >
          Search
        </Button>
      </Box>
      {!changeUi && <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "30px",
          letterSpacing: "0.02em",
          textAlign: "center",
       
        }}
      >
        You may be looking for
      </Typography>}
      {!changeUi && <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        {cardDetails.map((item, index) => (
          <CardService content={item.img} 
          key={index}
           name={item.name}
           isSelected={selectedCardIndex === index}
           onSelect={() => handleSelect(index)} 
           height={60}
           width={60}
           />
        ))}
      </Box>}
    </Box>
  );
};

export default HeroAbsolute;
