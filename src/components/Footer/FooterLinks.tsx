import {Box, Typography} from '@mui/material';

type Props = {
  title: string;
  links: Array<{
    text: string;
    href?: string;
  }>;
};
function FooterLinks({title, links}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '12px',
        alignItems: 'center'
      }}>
      <Typography variant="h6" textTransform={'uppercase'}>
        {title}
      </Typography>
      {links.map((link, index) => (
        <Typography
          key={index}
          variant="body2"
          component={'a'}
          color="inherit"
          href={link.href}>
          {link.text}
        </Typography>
      ))}
    </Box>
  );
}

export default FooterLinks;
