import React, { Component } from 'react'
import {Grid, Paper, Typography,Box,Button} from '@mui/material'

export default class Food extends Component {
  render() {
    
    return (
      <div style={{backgroundImage:'url(../foodbg.jpg)',height:'120vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'01'}}>
      
      <Typography><h1 align="center" style={{color:'whitesmoke'}}>FOOD</h1></Typography>
        <Grid align="center" padding={"50px"} marginBottom="100px">
          <Paper variant='outlined' style={{width:'1200px',height:'700px', borderRadius:'20px' ,opacity:'0.8'}}>
          <Typography><h3 align="center">SELECT YOUR CUISINE</h3></Typography>
            <div style={{display: 'flex',
                  flexWrap: 'wrap',
                  padding: '0px 4px'}}>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        display:'inline-block',
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        src="https://t4.ftcdn.net/jpg/02/17/39/75/240_F_217397519_MqLzfynUsUKGvZj1AB3iPREmr11sYRhk.jpg" 
                        alt="South Indian"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant='contained'sx={{color:'#FFFAFA',backgroundColor:'#1E1A1A ',borderColor:'#0480AB '}}>SOUTH INDIAN</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="North Indian"
                        src="https://media.gettyimages.com/id/1330689699/photo/chana-masala-dish.jpg?s=612x612&w=0&k=20&c=qZgHFGIjebYH0F7DwdnfTQ6oggUkpcN0300rvy_EbZ8="
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant='contained' sx={{color:'#FFFAFA',backgroundColor:'#1E1A1A ',borderColor:'#0480AB '}}>NORTH INDIAN</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="Punjabi Cuisine"
                        src="https://st3.depositphotos.com/16173130/18766/i/450/depositphotos_187664618-stock-photo-rajasthani-maharaja-thaali-pune.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant='contained' sx={{color:'#FFFAFA',backgroundColor:'#1E1A1A ',borderColor:'#0480AB '}}>PUNJABI</Button></Typography>
              </div>
            </div>
            <div style={{display: 'flex',
                  flexWrap: 'wrap',
                  marginTop:'0px',
                  padding: '0px 170px'}}>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        display:'inline-block',
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                        }}
                        src="https://as2.ftcdn.net/v2/jpg/04/18/29/31/1000_F_418293162_r0RjyhUJWXDDMpVKr6hDdGG7iFko0qsh.jpg" 
                        alt="Bengali Cuisine"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant='contained' sx={{color:'#FFFAFA',backgroundColor:'#1E1A1A ',borderColor:'#0480AB '}}>BENGALI</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="Kerala Cuisine"
                        src="https://t3.ftcdn.net/jpg/02/60/08/60/240_F_260086020_c58UCQWsYM2TBLIvmkfY4ZTeQizvDPmg.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant='contained' sx={{color:'#FFFAFA',backgroundColor:'#1E1A1A ',borderColor:'#0480AB '}}>KERALA</Button></Typography>
              </div>
            </div>
          </Paper>
        </Grid>

      </div>
    )
  }
}