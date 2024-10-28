import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Header = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      height: { xs: '50px', sm: '40px' ,lg: '40px'},
      backgroundColor: '#2aa7ff',
      color: '#ffffff',
      '@media (max-width: 414px)': {
          height: '120px', 
        }, 
        
    }}

  >
    <Typography
      sx={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '21px',
        textAlign: 'center',
      }}
    >
      The health and well-being of our patients and their health care team will always be our priority, 
      so we follow the best practices for cleanliness.
    </Typography>
  </Box>
  )
}

export default Header