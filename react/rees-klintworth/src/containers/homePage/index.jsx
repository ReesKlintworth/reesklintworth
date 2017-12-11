import React from 'react';
import { Header, Footer } from '../../components';
import headerImage from '../../img/header-1-web.jpg';
import selfieImage from '../../img/rees-square-web.jpg';
import './style.css';

const HomePage = props => {
    return (
        <div>
            <Header
              image={headerImage}
            />
            <div className="container-fluid">
                <div className="row vertical-align">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-1">
                        <h1 className="heading-small-top-margin">About.</h1>
                        <p>
                            Hi, my name is Rees. I'm a software developer based in the heart of the <a href="http://siliconprairienews.com/">Silicon Prairie</a>.
                            Check out <a href="./resume.html">What I Do</a> to learn more about my work, and <a href="./interests.html">What I Love</a> to check out some of my other passions.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <img className="img-responsive center-block headshot" src={selfieImage} />
                    </div>
                </div>
            </div>
            <Footer />
         </div>
    );
};

export default HomePage;