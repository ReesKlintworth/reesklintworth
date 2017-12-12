import React from 'react';
import { Header, MediaLinks, Footer } from '../../components';
import headerImage from '../../img/header-5-web.jpg';
import linksJson from './connectLinks.json';

const ConnectPage = props => {
    return (
        <div>
            <Header
              image={headerImage}
            />
            <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <h1>Let's stay in touch.</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 text-center">
                    <p>
                        Wanna chat about coding, check out more of my photography, or learn about sneakers? Follow any of the links below to see more of my work/hobbies, or to reach out directly and get connected.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <MediaLinks
                  className="col-xs-12 col-md-6 text-center"
                  items={linksJson.items}
                />
                <div class="col-md-3"></div>
            </div>
        </div>
            <Footer />
         </div>
    );
};

export default ConnectPage;