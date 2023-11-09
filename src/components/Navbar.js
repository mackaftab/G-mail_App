import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { auth } from '../firebase/setup';
import Profile from './Profile';



export default function Navbar(props) {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{position:"fixed", top:"0",zIndex:"2",backgroundColor: "#BBB4B3",minHeight:"5vw"}}>
          <div style={{display:"flex",alignItems:"center"}}>
            <Grid item xs={2}>
              <div style={{display:"flex",alignItems:"center"}}>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: "0.8vw", color: "#3C3C3C" }}>
              <MenuIcon style={{width:"2vw",marginLeft:"1vw"}} />
            </IconButton>

            <Typography style={{ color: "#3C3C3C", marginLeft: "1vw",fontSize:"2vw" }} variant="h6" component="div">
              Gmail
            </Typography>
              </div>
            
            </Grid>

            <Grid item xs={9}>
              <div style={{borderRadius:"40px",
              marginLeft:"10px",backgroundColor:"#E4EFFA",width:"60vw",height:"4.5vw", display:"flex",alignItems:"center"}}>
              <SearchOutlinedIcon style={{color:"black",marginLeft:"15px",alignItems:"center"}}/>
            <input onChange={(e) => props.setSearch(e.target.value)} type="text" placeholder='Search mail' style={{ backgroundColor:"#E4EFFA", height:"3vw",width:"50vw",border:"none",outline:"none"}} />
              </div>
            
            </Grid>

            <Grid item xs={1}>
              
              <Profile/>

            </Grid>

            
            </div>
        </AppBar>
      </Box>
    </Grid>
  );
}
