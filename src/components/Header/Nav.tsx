import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery
} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';
import {IoArrowBack, IoClose, IoSearch} from 'react-icons/io5';
import {Link, useLocation} from 'react-router';
import {menuItems} from './menuData';
import styles from './styles.module.css';

type NavItemsProps = {
  data: Array<{
    title: string;
    link: string;
  }>;
  onClose: () => void;
};

function NavItems({data, onClose}: NavItemsProps) {
  const location = useLocation();
  const viewAllItem = data.find((item) => item.title === 'View all');
  const currentLocation = useRef(location.pathname);

  if (data.length > 5) {
    data = data.slice(0, 5);
  }

  // remove view all item if present
  data = data.filter((item) => item.title !== 'View all');

  useEffect(() => {
    if (currentLocation.current !== location.pathname) {
      onClose();
    }
  }, [location.pathname, onClose]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 1,
        gap: 1
      }}>
      {data.map(({link, title}) => (
        <Link key={title} to={link} className={styles.navLink}>
          <Typography variant="body1">{title}</Typography>
        </Link>
      ))}
      {!!viewAllItem && (
        <Link
          to={viewAllItem.link}
          className={`${styles.navLink} ${styles.viewAllLink}`}>
          <Typography variant="body1">{viewAllItem.title}</Typography>
        </Link>
      )}
    </Box>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

const Navbar: React.FC<Props> = ({open, onClose}) => {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const [selectedSmallItem, setSelectedSmallItem] = useState('');

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleClose = () => {
    setSelectedItem(menuItems[0]);
    onClose();
  };

  if (isSmallScreen) {
    return (
      <Drawer anchor="top" open={open} onClose={handleClose}>
        <Box sx={{bgcolor: 'background.default'}}>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Link to={'/'}>
              <img
                className={styles.hialLogo}
                src={'/hial-web/assets/logo.png'}
                alt="Hial Logo"
              />
            </Link>
            <Box>
              <IconButton sx={{color: 'primary.main'}} size="large">
                <IoSearch />
              </IconButton>
              <IconButton
                onClick={handleClose}
                sx={{color: 'primary.main'}}
                size="large">
                <IoClose />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{display: 'flex', mb: 8}}>
            {!selectedSmallItem && (
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  gap: 2,
                  p: 2
                }}>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setSelectedItem(item);
                          setSelectedSmallItem(item.title);
                        }}>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            {selectedSmallItem && (
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column'
                }}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <IconButton
                    sx={{color: 'primary.main'}}
                    onClick={() => setSelectedSmallItem('')}
                    size="small">
                    <IoArrowBack />
                  </IconButton>
                  <Typography color="primary" variant="body2">
                    Back
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    gap: 2,
                    p: 2
                  }}>
                  {selectedItem.subItems.map((subItem, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '220px'
                      }}>
                      <Typography variant="h6" color="primary.main">
                        {subItem.title}
                      </Typography>
                      <NavItems data={subItem.data} onClose={handleClose} />
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    );
  }

  return (
    <Drawer anchor="top" open={open} onClose={handleClose}>
      <Box sx={{bgcolor: 'background.default'}}>
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Link to={'/'}>
            <img
              className={styles.hialLogo}
              src={'/hial-web/assets/logo.png'}
              alt="Hial Logo"
            />
          </Link>
          <Box>
            <IconButton sx={{color: 'primary.main'}} size="large">
              <IoSearch />
            </IconButton>
            <IconButton
              onClick={handleClose}
              sx={{color: 'primary.main'}}
              size="large">
              <IoClose />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{display: 'flex', mb: 8}}>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              gap: 2,
              p: 2
            }}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => setSelectedItem(item)}>
                    <ListItemText
                      sx={{
                        color:
                          selectedItem.title === item.title
                            ? 'primary.main'
                            : 'inherit'
                      }}
                      primary={item.title}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: 2,
              p: 4,
              bgcolor: '#FFF9F3',
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              gap: 8
            }}>
            {selectedItem.subItems.map((subItem, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '220px'
                }}>
                <Typography variant="h6" color="primary.main">
                  {subItem.title}
                </Typography>
                <NavItems data={subItem.data} onClose={handleClose} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Navbar;
