import {Box, Typography} from '@mui/material';

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  bgPaper?: boolean;
};

function Section({children, title, subtitle, bgPaper}: Props) {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      sx={{
        py: {xs: 2, sm: 4},
        rowGap: {xs: 3, sm: 4},
        bgcolor: bgPaper ? 'background.paper' : 'background.default'
      }}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        sx={{gap: {xs: 0.5, sm: 1}}}>
        {title && (
          <Typography variant="h2" textAlign={'center'}>
            {title}
          </Typography>
        )}
        {subtitle && <Typography variant="body1">{subtitle}</Typography>}
      </Box>
      {children}
    </Box>
  );
}

export default Section;
