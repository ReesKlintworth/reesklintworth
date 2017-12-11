import React from 'react';
import Navbar from './navbar';
import './style.css';

const Header = props => {
    return (
        <div className="header container-fluid">
            <img className="img-responsive center-block" src={props.image} />
            <Navbar
              active="home"
            />
        </div>
    );
};

export default Header;