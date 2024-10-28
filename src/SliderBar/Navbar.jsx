import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import medifyicon from "./medifyicon.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

const Navbar = ({changeUi,value,setValue,setUi}) => {



  const navBarList = ['Find Doctors', 'Hospitals', 'Medicines', 'Surgeries','Software for Provider', 'Facilities', ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        height: "96px",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between', 
        alignItems: "center",
        background: changeUi ? "#FFFFFF" : "none",
        paddingLeft: { xs: "20px", sm: "20px", md: "135px", lg: "135px"},
        paddingRight: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },

      }}
    >
      <Box sx={{ 
        display: "flex", 
        alignItems: "center",
       
        }}>
     
     
        <img src={medifyicon} alt="medifyicon" />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "27px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#2AA8FF",
            marginLeft: "8px", 
          }}
        >
          Medify
        </Typography>
      </Box>
      <Box 
      sx={{
    
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
         position: 'relative',
         maxWidth: '912px',
      height: '96px'
  
      }}
        >
          {
            !changeUi &&  
            <Box
            value={value}
            onChange={handleChange}
            scrollButtons="false" 
            sx={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 400,
              textAlign: 'left',
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              color: '#102851',
              textTransform: 'none',
                      }}
  
          >{
            navBarList.map((item,index)=>(
            (
                <Typography key={index} sx={{
                   padding: '12px 16px',  
                  textTransform: 'none',
                 
                }} onClick={()=>{

                  setUi(true) 
                  setValue(index)}

                } >{item}</Typography>
              ) 
                
            ))
          }
            
            
          </Box>
          }

        {changeUi &&<Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="false" 
          TabIndicatorProps={{
            style: {
              bottom: '-1px',
              backgroundColor: "#2AA7FF", 
              height: "5px", 
            },
          }}
          sx={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            textAlign: 'left',
            height: '96px'
          
         
          }}

        >{
          navBarList.map((item,index)=>(
          (
              <Tab key={index} label={item} {...a11yProps(index)}  sx={{   
                 lineHeight: '21px', 
                 textAlign: 'center', 
                 position: 'relative',
                 top: '27px',
                 color: '#102851',
                 '&.Mui-selected':{
                    color: '#2AA7FF'
                 },
                  textTransform: 'none'}}/>
            ) 
              
          ))
        }
          
          
        </Tabs>}
        <Button variant="contained" 
            sx={{
              width: '130px',
              height: '40px',
              borderRadius: '8px',
              opacity: 1,
              backgroundColor: '#2AA8FF', 
              padding: '1px'
            }}

            >My Bookings</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
