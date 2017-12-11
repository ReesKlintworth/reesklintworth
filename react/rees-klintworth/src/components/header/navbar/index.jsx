import React from 'react';
import './style.css';

const Navbar = props => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Rees Klintworth</a>
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="./blog.html">Blog</a></li>                                                        
                        <li><a href="./resume.html">What I Do</a></li>
                        <li><a href="./interests.html">What I Love</a></li>
                        <li><a href="./connect.html">Connect</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;