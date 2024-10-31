// import Grid from "@mui/material/Grid2";
// import React, { useState } from "react";
// import AppointmentCard from "./AppointmnetCard";
// import { AppointmentOffer } from "./AppointmentOffer";

// const Booking = ({hospitalList,setUi}) => {
//   const [timeSlot,setTimeSlot] = useState('');
//   const [booking,setBooking] = useState()
//   return (
//     <div style={{ width: "100%" }}>
//       <Grid
//         container
//         spacing={0}
//         // xs={12}
//         // md={12}
//         // lg={12}
//         sx={{
//           flexGrow: 1,
//           alignItems: "flex-start",
//           paddingLeft: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
//           paddingRight: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
//           position: "relative",
//           display: "flex",
//           // flexWrap: 'nowrap',
//           justifyContent: "center",
//           width: "100%",
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           md={9}
//           lg={9}
//           sx={{ display: "flex", flexDirection: "column",}}
//         >
//           <AppointmentCard hospitalList={hospitalList} setUi={setUi} setBooking={setBooking} booking={booking}/>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={3}
//           lg={3}
//           sx={{ position: "relative", top: "0px",}}
//         >
//           <AppointmentOffer />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Booking;
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import AppointmentCard from "./AppointmnetCard";
import { AppointmentOffer } from "./AppointmentOffer";

const Booking = ({ hospitalList, setUi , showBooking,localData}) => {
  const [timeSlot, setTimeSlot] = useState('');
  const [booking, setBooking] = useState();

  return (
    <div style={{ width: "100%" }}>
      <Grid
        container
        spacing={2} // Adjust spacing as needed
        sx={{
          flexGrow: 1,
          alignItems: "flex-start",
          paddingLeft: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
          paddingRight: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <AppointmentCard 
            hospitalList={hospitalList} 
            setUi={setUi} 
            setBooking={setBooking} 
            booking={booking}
            showBooking={showBooking}
            localData={localData}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          sx={{ position: "relative" }}
        >
          <AppointmentOffer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Booking;
