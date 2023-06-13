import React, { useContext, useRef } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography, Grid } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';
import './Horizontalbar.css';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const { containerRef } = useContext(VisibilityContext);
  const scrollRef = useRef(null);

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="scroll-menu-container">
      <div className="scroll-menu-wrapper" ref={scrollRef}>
        <Grid container wrap="nowrap" className="scroll-menu-grid">
          {data.map((item) => (
            <Grid item key={item.id || item} className="scroll-menu-item">
              {bodyParts ? (
                <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    
    </div>
  );
};

export default HorizontalScrollbar;
