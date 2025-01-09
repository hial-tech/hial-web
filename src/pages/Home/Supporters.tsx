import {shuffleArrayAndReturn} from '@/utils';
import supporters from '@/utils/supporters.json';
import {Box, Typography} from '@mui/material';
import {useEffect, useRef} from 'react';

const chunkSize = Math.floor(supporters.length / 2);
const supportersShuffled = shuffleArrayAndReturn(supporters);

function Supporters() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const chunk1 = supportersShuffled.slice(0, chunkSize);
  const chunk2 = supportersShuffled.slice(chunkSize);

  useEffect(() => {
    if (ref1.current) {
      const intervalId = setInterval(() => {
        if (ref1.current) {
          if (
            (ref1.current as any).scrollLeft +
              (ref1.current as any).clientWidth >=
            (ref1.current as any).scrollWidth
          ) {
            (ref1.current as any).scrollTo({left: 0, behavior: 'smooth'});
          } else {
            (ref1.current as any).scrollBy({left: 500, behavior: 'smooth'});
          }
        }
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  useEffect(() => {
    if (ref2.current) {
      (ref2.current as any).scrollTo({
        left:
          (ref2.current as any).scrollWidth - (ref2.current as any).clientWidth
      });

      const intervalId = setInterval(() => {
        if (ref2.current) {
          if ((ref2.current as any).scrollLeft === 0) {
            (ref2.current as any).scrollBy({
              left:
                (ref2.current as any).scrollWidth -
                (ref2.current as any).clientWidth,
              behavior: 'smooth'
            });
          } else {
            (ref2.current as any).scrollBy({left: -500, behavior: 'smooth'});
          }
        }
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '24px',
        pt: '40px'
      }}>
      <Typography variant="h2" textAlign={'center'}>
        Our Supporters
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          overflow: 'auto',
          scrollbarWidth: 'none'
        }}
        ref={ref1}>
        <Box
          sx={{
            bgcolor: 'accent.main',
            my: '48px',
            display: 'flex',
            columnGap: '3px'
          }}>
          {chunk1.map((supporter) => {
            return (
              <Box
                key={supporter.imageUrl}
                sx={{
                  bgcolor: 'background.default',
                  minWidth: '500px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <img
                  src={supporter.imageUrl}
                  alt={supporter.alt}
                  width={supporter.width}
                  height={supporter.height}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          overflow: 'auto',
          scrollbarWidth: 'none'
        }}
        ref={ref2}>
        <Box
          sx={{
            bgcolor: 'accent.main',
            my: '48px',
            display: 'flex',
            columnGap: '3px'
          }}>
          {chunk2.map((supporter) => {
            return (
              <Box
                key={supporter.imageUrl}
                sx={{
                  bgcolor: 'background.default',
                  minWidth: '500px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <img
                  src={supporter.imageUrl}
                  alt={supporter.alt}
                  width={supporter.width}
                  height={supporter.height}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Supporters;
