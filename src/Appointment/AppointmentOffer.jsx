
import dentalAdd from './assests/DentalAdd.png'
import { Box } from '@mui/material';
import React from 'react';


export const AppointmentOffer = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden', 
        position: 'relative', 
        height: '268px', 
        width: '363px', 
      }}
    >
      <img
        src={dentalAdd}
        alt="Dental Advertisement" 
        style={{
          objectFit: 'cover', 
          position: 'absolute', 
          top: 0,
          left: -29, 
          objectPosition: 'left top',
          height: '100%', 
          width: '100%', 
       
        }}
      />
    </Box>
  );
};
