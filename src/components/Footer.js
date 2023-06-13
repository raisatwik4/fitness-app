import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import banner1 from '../assests/icons/th.jfif';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap={'wrap'} px="20px" pt="20px">
      <img src={banner1} alt="logo" style={{ width: '50px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '16px' } }} mt="0px" textAlign="center" pb="40px"> <span style={{ color: 'Blue', textTransform: 'capitalize' }}>24/7 fitness </span>Desinged By  <span style={{ color: 'Blue', textTransform: 'capitalize' }}>SATWIK RAI</span>  </Typography>
  </Box>
);
{/* <span>Desinged By <a href="" class="foot">SATWIK RAI</a> | <span class="far fa-copyright"></span> 2022 All rights reserved.</span> */}
export default Footer;