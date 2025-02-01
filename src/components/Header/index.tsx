import {AppBar, IconButton, Toolbar} from '@mui/material';
import {IoMenu} from 'react-icons/io5';

import {useState} from 'react';
import styles from './styles.module.css';

import {Link} from 'react-router';
import Navbar from './Nav';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          <Link to={'/'}>
            <img
              className={styles.hialLogo}
              src={'/hial-web/assets/logo.png'}
              alt="Hial Logo"
            />
          </Link>
          <IconButton
            sx={{color: 'primary.main'}}
            onClick={() => setIsDrawerOpen(true)}>
            <IoMenu size={'32'} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Navbar open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
export default Header;
