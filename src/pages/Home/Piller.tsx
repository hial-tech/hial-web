import {Box, ButtonBase, Card, Typography} from '@mui/material';
import React from 'react';

type Props = {
  imageComponent: React.ReactNode;
  title: string;
  description?: string;
};
function Piller({imageComponent, title, description}: Props) {
  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        height: {xs: '248px', sm: '320px'},
        width: {xs: '160px', sm: '240px'}
      }}>
      <ButtonBase
        sx={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          overflow: 'hidden'
        }}>
        <Box
          flex={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}>
          {imageComponent}
        </Box>
        <Box
          sx={{
            bgcolor: 'primary.light',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            minHeight: {xs: '64px', sm: '80px'},
            p: {xs: 1, sm: 2}
          }}>
          <Typography
            variant="h6"
            color="primary.contrastText"
            textAlign={'left'}>
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              color="primary.contrastText"
              textAlign={'left'}>
              {description}
            </Typography>
          )}
        </Box>
      </ButtonBase>
    </Card>
  );
}

export default Piller;
