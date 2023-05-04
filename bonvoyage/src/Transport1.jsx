import React, { Component } from 'react'
import {Grid, Paper, Typography,Box} from '@mui/material'


export default class Transport1 extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url(https://wallpaperaccess.com/full/2316756.jpg)',height:'110vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'01'}}>
        
        <Typography><h1 align="center" style={{color:'whitesmoke'}}>TRAVEL</h1></Typography>
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
                        src="../indigo travel.jpeg"
                    
                />
          </Paper>
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
                        src="../ola cab.jpeg"
                />   
            </Paper>
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
                        src="../rapido travel.jpeg"
                />   
           
            </Paper>
        </Grid>
      </div>
    )
  }
}