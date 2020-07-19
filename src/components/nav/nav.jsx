import React from 'react';
import styles from './nav.module.scss'
function Nav() {
  return (
    <div className={styles.nav}>
      
      <div className={styles.logo}>
        MAKE&BAKE
      </div>
      <div className={styles.list}>
        <a href='/' className='btn btn-three'>About</a>
        <a href='/' className='btn btn-three'>Register</a>
        <a href='/' className='btn btn-three'>Contact</a>
        <a href='/' className='btn btn-three'>Products</a>
      </div>
      <div className={styles.start}>
        Sign In / Sign Up
      </div>
    </div>
  );
}

export default Nav;