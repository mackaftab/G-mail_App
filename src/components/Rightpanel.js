import React from 'react';
import ContactsIcon from '@mui/icons-material/Contacts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; 
import Notes from './Notes';


function Rightpanel() {
  return (
    <div style={{backgroundColor:"#BBB4B3",minHeight:"100vh",position:"fixed",right:"0",width:"5vw",textAlign:"center",paddingTop:"6vw"}}>
    
    <Notes  style={{paddingTop:"2vw"}}/>
    <br />
    <ContactsIcon/>
    <br />
    <CalendarMonthIcon style={{paddingTop:"2vw"}}/> 
    </div>
  )
}

export default Rightpanel
