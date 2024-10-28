import { Box, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FooterDetails = ({ firstone, secondone, thirdone }) => {
  const sectionone = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ];
  const sectionTwo = [
    "Orthology",
    "Neurology",
    "Dental Care",
    "Opthalmology",
    "Cardiology",
  ];
  const sectionThree = [];
  return (
    <Box
      sx={{
        width: "231.82px",
        height: "235px",
        marginTop: "45px",
        marginLeft: "10px",
        marginRight: "10px",
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "28px",
        textAlign: "left",
        '@media (max-width: 454px)': {
           
          },
      }}
    
    >
      {/* {
        <Accordion
          sx={{
            opacity: "1",
            borderStyle: "none",
            backgroundColor: "transparent",
            color: "#FFFFFF",
            

          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ display: 'flex',   flexDirection: 'row-reverse', }}
          >
            <Typography sx={{ opacity: "1" }}>Expanded by default</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
      } */}
      {firstone
        ? sectionone.map((item) => <Typography>>{item}</Typography>)
        : sectionTwo.map((item) => <Typography>>{item}</Typography>)}
    </Box>
  );
};

export default FooterDetails;
