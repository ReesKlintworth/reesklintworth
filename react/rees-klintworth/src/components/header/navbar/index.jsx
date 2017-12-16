import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                        <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
                        <li><NavLink activeClassName="active" to="/resume">What I Do</NavLink></li>
                        <li><NavLink activeClassName="active" to="/interests">What I Love</NavLink></li>
                        <li><NavLink activeClassName="active" to="/connect">Connect</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;