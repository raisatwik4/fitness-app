import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material'
import logo from '../assests/icons/th.jfif';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px="20px"> 
      <Link to='/'>
        <img src={logo} alt="logo" style={{width:'48px', height:'40px',margin:'0 20px'}}/>
      </Link>
      <Stack direction="row" gap="40px" fontsize="24px" alignitems="flex-end">
        <Link to="/" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid Blue'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none',color:'#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar