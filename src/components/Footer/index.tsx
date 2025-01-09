import {Box, IconButton, Typography} from '@mui/material';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter
} from 'react-icons/ai';
import FooterLinks from './FooterLinks';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: {
          xs: '20px 24px',
          md: '40px 54px'
        }
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          columnGap: {xs: 0, md: '24px', lg: '64px'},
          rowGap: '24px',
          justifyContent: 'center'
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '270px',
              rowGap: 1
            }}>
            <img
              src={'/src/assets/logo-without-label.png'}
              alt="logo"
              width={94}
              height={71}
            />
            <Typography variant="h6" color="primary.main" textAlign={'center'}>
              Himalayan Institute of Alternatives Ladakh
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: {xs: '3px', md: '246px'},
            width: {xs: '246px', md: '3px'},
            bgcolor: 'accent.main',
            alignSelf: {xs: 'center', md: 'auto'}
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '64px'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column', md: 'row'},
              columnGap: '64px',
              rowGap: '40px'
            }}>
            <FooterLinks
              title="Campus Map"
              links={[
                {
                  text: 'HIAL',
                  href: '#'
                },
                {
                  text: 'SECMOL',
                  href: '#'
                }
              ]}
            />
            <FooterLinks
              title="Events"
              links={[
                {
                  text: 'World Water Day',
                  href: '#'
                },
                {
                  text: 'Sun & Earth Festival',
                  href: '#'
                }
              ]}
            />
            <FooterLinks
              title="Contact Us"
              links={[
                {
                  text: 'General Info',
                  href: '#'
                },
                {
                  text: 'Admission Info',
                  href: '#'
                }
              ]}
            />
            <FooterLinks
              title="Copyright & Fair Use"
              links={[
                {
                  text: 'Privacy Policy',
                  href: '#'
                },
                {
                  text: 'Terms & Conditions',
                  href: '#'
                }
              ]}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '16px',
              justifyContent: 'center',
              alignItems: {xs: 'center', md: 'flex-start'}
            }}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
              <IconButton color="primary">
                <AiFillInstagram size={32} />
              </IconButton>
              <IconButton color="primary">
                <AiOutlineTwitter size={32} />
              </IconButton>
              <IconButton color="primary">
                <AiFillFacebook size={32} />
              </IconButton>
              <IconButton color="primary">
                <AiFillYoutube size={32} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          mt: '40px'
        }}>
        <Typography variant="caption" textAlign={'center'}>
          {`© ${currentYear} Himalayan Institute of Alternatives Ladakh. All rights reserved`}
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
