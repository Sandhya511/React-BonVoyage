import React, { Component } from 'react'
import {Typography,Box,Paper,Grid} from '@mui/material';

export default class Accomodation1 extends Component {
  render() {
    return (
        <div style={{backgroundImage:'url(https://wallpapercave.com/wp/wp1846077.jpg)',height:'110vh',
marginTop:'0px',
padding:'0px',
fontSize:'50px',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
opacity:'1'}}>
<Typography><h1 align="center" style={{color:'black',padding:'50px'}}>BEST PLACES TO STAY IN</h1></Typography>
        <Grid align="center" padding={"50px"} marginBottom="100px">
          <Paper variant='outlined' style={{width:'1000px',height:'200px', borderRadius:'20px' ,opacity:'0.8'}}>
          <Box
                  component="img"
                      sx={{
                        display:'inline-block',
                        marginTop:'20px',
                        marginRight: '1000px',
                        height:'150px',
                        width: '500px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        src="../acc1.png"
                    
                />
          </Paper>
          <br/>
          <br/>
          <Paper variant='outlined' style={{width:'1000px',height:'200px', borderRadius:'20px' ,opacity:'0.8'}}> 
          <Box 
                    component="img"
                      sx={{
                          display:'inline-block',
                          marginTop:'20px',
                          marginRight: '1000px',
                          height:'150px',
                          width: '500px',
                          opacity:'1',
                          borderRadius:'50%'
                        }}
                        src="../acc2.png"
                />   
           
            </Paper>
        </Grid>  
       
                </div>
    )
  }
}