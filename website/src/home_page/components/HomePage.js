import React from 'react';

// import nav AppBar
import NavBar from '../../nav_bar/components/NavBar.js'

// import footer
import Footer from '../../footer/components/Footer.js'

// import POTN logot
import POTNLogo from '../../potn_logo/components/POTNLogo.js'
export default function HomePage() {

  return (
    <div>
      <NavBar/>
      <POTNLogo/>
      <Footer/>
    </div>
  );
}
