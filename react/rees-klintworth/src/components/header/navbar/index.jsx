import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className="navbar-brand" to="/">Rees Klintworth</Link>
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/resume">What I Do</Link></li>
                        <li><Link to="/interests">What I Love</Link></li>
                        <li><Link to="/connect">Connect</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;