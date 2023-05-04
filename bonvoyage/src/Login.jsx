import React, { Component } from 'react'
import { Grid, Paper, TextField, Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  buttonstyle2={color:'#F5F3E1',borderColor:'#0480AB',padding:'5px',align:'center'}

  render() {
    return (
      <div style={{backgroundImage:'url(../pexels7.jpg)',height:'100vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'1'}}>
        <Grid align="center" padding={"100px"}>
           <Paper variant='outlined' style={{width:'400px', borderRadius:'20px' ,opacity:'0.5'}}>
            <Typography>
                <h1 align="center" padding={"80px"}>LOGIN</h1>
              </Typography> 
           <TextField  label="UserName" type="text" placeholder='Enter your name' variant='outlined' required style={{marginTop:"40px"}}></TextField>
           <br/>
           <br/>
           <TextField  label="PassWord" type="Password" placeholder='Enter your password' variant='outlined' required></TextField>
           <br/>
           <br/>
        </Paper>
        <Link to ='./Myprofile'>
          <Button><h2 style={{color:'white'}}>Login</h2></Button>
        </Link>
        <Typography>
          <Link to='./Signup'>
            <Button variant='text'  sx={this.buttonstyle2}>Don't Have An Account? SignUp</Button>
          </Link>
          <br/>
          <Link to='./Reset'>
            <Button variant="text" sx={this.buttonstyle2}>Reset Password</Button>
          </Link>
        </Typography>
        </Grid>
        </div>
    )
  }
}