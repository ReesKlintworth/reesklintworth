import React from 'react';
import { Header, BlogArticleDetails, Footer } from '../../components';
import headerImage from '../../img/header-4-web.jpg';
import detailsJson from './articleDetails.json';

const BlogHomePage = props => {
  return (
    <div>
      <Header
        image={headerImage}
      />
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-xs-12 col-md-10">
                <h1>A Blog About Anything.</h1>
                <p>
                    I've toyed with the idea of blogging for awhile now, and this is my attempt to follow through with that. I have a wide
                    array of passions and interests, and this blog will be an outlet for my thoughts and perspective on many of these things.
                    It's going to be simple, it's going to be diverse, and most of all it's going to be <strong>ME.</strong> Tech talks, gear
                    and music reviews, random life thoughts, and anything else that comes to mind are all fair game.
                </p>
                <p>
                    I'm not using an existing blogging platform because as a software developer I thought that rolling my own sounded like fun.
                    Expect the platform to grow and evolve over time with better features, updated styling, and ever improving content over time.
                    Enjoy!
                </p>
            </div>
            <div className="col-md-1"></div>
        </div>
        {detailsJson.items.map(item => <BlogArticleDetails key={item.link} {...item} />)}
      </div>
      <Footer />
    </div>
  );
};

export default BlogHomePage;