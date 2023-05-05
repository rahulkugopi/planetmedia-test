import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout() {

  return (
    <>
      <Header />
      <div data-testid='Layout'>      
          <Outlet />
        </div>    
      <Footer />
    </>
  );
}

export default Layout;
