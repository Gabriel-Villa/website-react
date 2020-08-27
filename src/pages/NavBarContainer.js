import React from 'react';
import Loader from '../components/Loader';
import Navigation from '../components/NavBar/Navigation';
import useSetTimeOut from '../hooks/useSetTimeOut';

const NavBarContainer = () => {
    const { loader } = useSetTimeOut();
    if(loader) return <Loader />
    return <Navigation />
}

export default NavBarContainer
