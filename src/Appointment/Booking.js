import Grid from "@mui/material/Grid2";
import React from "react";
import AppointmentCard from "./AppointmnetCard";
import { AppointmentOffer } from "./AppointmentOffer";

const Booking = () => {
  return (
    <div style={{ width: '100%'}}>
     <Grid container spacing={0} sx={{ flexGrow: 1, alignItems: "flex-start" ,
        paddingLeft: { xs: "20px", sm: "20px", md: "135px", lg: "135px"},
        paddingRight: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
        position: 'relative',
        display : 'flex', 
        justifyContent: 'center',
        width: '100%'
        
    }}>
      <Grid item xs={12} md={9} lg={9} sx={{display: 'flex', flexDirection: "column", 
      }}> 
       <AppointmentCard/>
      </Grid>
      <Grid item xs={12} md={9} lg={3} sx={{position: 'relative', top: '0px'  }}>
        <AppointmentOffer/>
      </Grid>
    </Grid>
    </div>
   
  );
};

export default Booking;
