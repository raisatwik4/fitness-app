import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPart from '../assests/icons/body-part.png';
import Target from '../assests/icons/target.png';
import Equipment from '../assests/icons/equipment.png';
const Detail = ({exerciseDetail}) => {
    const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail;
    const extraDetail = [
        {
          icon: BodyPart,
          name: bodyPart,
        },
        {
          icon: Target,
          name: target,
        },
        {
          icon: Equipment,
          name: equipment,
        },
      ];
    
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '56px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" color="blue">
            {name}
          </Typography>
          <Typography sx={{ fontSize: { lg: '22px', xs: '18px' } }} color="black">
            Exercises keep you strong.{' '}
            <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
            of the best <br /> exercises to target your {target}. It will help you improve your{' '}
            <br /> mood and gain energy.
          </Typography>
          {extraDetail?.map((item) => (
            <Stack key={item.name} direction="row" gap="20px" alignItems="center">
              <Button sx={{ background: 'black', borderRadius: '50%', width: '100px', height: '100px' }}>
                <img src={item.icon} alt={bodyPart} style={{ width: '45px', height: '45px' }} />
              </Button>
              <Typography textTransform="capitalize" sx={{ fontSize: { lg: '25px', xs: '15px' } }}>
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
  )
}

export default Detail
