import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material';
import {IoChevronBack, IoClose, IoMenu, IoSearch} from 'react-icons/io5';

import HialLogo from '@/assets/logo.png';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import styles from './styles.module.css';

import {
  default as courses,
  default as schools
} from '@/pages/School/schoolData.json';

const menuItems = [
  {
    title: 'About Us',
    subItems: [],
    link: '/about'
  },
  {
    title: 'Academics',
    subItems: [
      {
        title: 'Schools',
        list: schools.map((i) => ({
          title: i.title,
          link: `/school/${i.slug}`
        }))
      },
      {
        title: 'Courses and Programmes',
        list: courses.map((i) => ({
          title: i.title,
          link: `/school/${i.slug}`
        }))
      }
    ],
    link: ''
  },
  {title: 'Research & Innovation', subItems: [], link: '/research'},
  {title: 'Enterprises', subItems: [], link: '/enterprises'},
  {title: 'Centers of Excellence', subItems: [], link: '/coe'}
];

function Header() {
  const navigation = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState('');

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            bgcolor: 'background.default',
            justifyContent: 'space-between',
            minHeight: {
              xs: '48px',
              sm: '64px'
            }
          }}>
          <img className={styles.hialLogo} src={HialLogo} alt="Hial Logo" />
          <IconButton sx={{color: 'primary.main'}} onClick={toggleDrawer}>
            <IoMenu size={'32'} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
        {isSmallScreen ? (
          <div>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{m: 2}}>
              <img className={styles.hialLogo} src={HialLogo} alt="Hial Logo" />
              <Box>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{color: 'primary.main'}}
                  size="large">
                  <IoSearch />
                </IconButton>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{color: 'primary.main'}}
                  size="large">
                  <IoClose />
                </IconButton>
              </Box>
            </Box>
            {selectedItem && (
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <IconButton
                  sx={{color: 'primary.main'}}
                  size="large"
                  onClick={() => setSelectedItem('')}>
                  <IoChevronBack />
                </IconButton>
                <Typography variant="body1">Back</Typography>
              </Box>
            )}

            {selectedItem ? (
              <>
                <List>
                  {menuItems
                    .find((item) => item.title === selectedItem)
                    ?.subItems.map((subItem, index) => (
                      <Box key={index}>
                        <Box sx={{display: 'flex', alignItems: 'center', m: 2}}>
                          <Typography variant="h5" color="primary.main">
                            {subItem.title}
                          </Typography>
                        </Box>
                        {subItem.list.map((itm, i) => (
                          <ListItem onClick={() => setSelectedItem('')} key={i}>
                            <ListItemText
                              primary={itm.title}
                              onClick={() => navigation(itm.link)}
                            />
                          </ListItem>
                        ))}
                      </Box>
                    ))}
                </List>
              </>
            ) : (
              <List>
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <ListItem
                      onClick={() => {
                        const item = menuItems[index];
                        if (item.subItems.length > 0) {
                          setSelectedItem(item.title);
                        } else {
                          navigation(item.link!);
                        }
                      }}>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </div>
                ))}
              </List>
            )}
          </div>
        ) : null}
      </Drawer>
    </>
  );
}
export default Header;
