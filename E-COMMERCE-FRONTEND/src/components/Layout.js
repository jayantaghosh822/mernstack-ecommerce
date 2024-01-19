import React from 'react';
import Header from './header';
import Footer from './footer';
const Layout = (porps) => {
    return(
        
        <div>
            <Header/>
            {porps.children}
            <Footer/>
        </div>
        
    );
}
export default Layout;