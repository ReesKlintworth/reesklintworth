import React from 'react';
import './style.css';

const BlogArticleDetails = props => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-xs-12 col-md-10 post-container">
          <div className="post">
              <a className="post-preview-link" href={props.link}>
                  <div className="post-preview">
                      <img className="post-preview-image" src={props.image} />
                      <div className="post-preview-image-overlay">
                          <p className="post-date-day">{props.date.day}</p>
                          <div className="post-date-stacked">
                              <p className="post-date-month">{props.date.month}</p>
                              <p className="post-date-year">{props.date.year}</p>
                          </div>
                      </div>
                      <div className="post-preview-text">
                          <h1>{props.title}</h1>
                          <p>{props.description}</p>
                      </div>
                  </div>
              </a>
          </div>
      </div>
      <div className="col-md-1"></div>
  </div>
  );
};

export default BlogArticleDetails