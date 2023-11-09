import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import './Leftpanel.css';

function Leftpanel(props) {
  return (
    <div style={{position:"fixed",backgroundColor:"#BBB4B3", minHeight:"100vh",paddingTop:"6vw",width:"18vw"}}>

      

      <Message/>

      <div className='tag' style={{marginTop:"1vw",marginLeft:"1vw",width:"15vw",display:"flex",alignItems:"center", cursor:"pointer"}}>
      <MailIcon  style={{marginLeft:"2vw",color:"red"}}/>
      <div onClick={()=> props.setSubCollect("Inbox")} style={{ cursor:"pointer", marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw"}}>Inbox</div>
      </div>

      <div className='tag'  style={{marginTop:"1vw",marginLeft:"1vw",width:"15vw",display:"flex",alignItems:"center",cursor:"pointer"}}>
      <SendIcon style={{marginLeft:"2vw",color:"red"}}/>
      <span onClick={()=> props.setSubCollect("Send")} style={{ cursor:"pointer", marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw"}}>Send</span>
      </div>

      <div className='tag'  style={{marginTop:"1vw",marginLeft:"1vw",width:"15vw",display:"flex",alignItems:"center",cursor:"pointer"}}>
      <StarBorderIcon style={{marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw"}}>Starred</span>
      </div>

      <div className='tag'  style={{marginTop:"1vw",marginLeft:"1vw",width:"15vw",display:"flex",alignItems:"center",cursor:"pointer"}}>
      <AccessTimeIcon style={{marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw"}}>Snoozed</span>
      </div>

      
    </div>
  )
}

export default Leftpanel
