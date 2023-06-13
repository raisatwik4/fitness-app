import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assests/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '180px', height: '250px', cursor: 'pointer', gap: '34px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '200px', height: '250px', cursor: 'pointer', gap: '40px' }}
    onClick={()=>{
      setBodyPart(item);
      window.scrollTo({top:1800,left:100, behavior:'smooth'})
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '30px', height: '30px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;