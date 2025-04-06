import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      {/* Header appears on every page */}
      <Header />
      
      {/* Main content area (changes per route) */}
      <main className="content">
        {children}
      </main>
      
      {/* Footer appears on every page */}
      <Footer/>
    </div>
  );
};

export default Layout;