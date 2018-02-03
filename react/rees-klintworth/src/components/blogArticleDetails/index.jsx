import React from 'react';
import './style.css';

const BlogArticleDetails = ({ article }) => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-xs-12 col-md-10 post-container">
          <div className="post">
              <a className="post-preview-link" href={article.link}>
                  <div className="post-preview">
                      <img className="post-preview-image" src={article.header} />
                      <div className="post-preview-image-overlay">
                          <p className="post-date-day">{article.date.day}</p>
                          <div className="post-date-stacked">
                              <p className="post-date-month">{article.date.month}</p>
                              <p className="post-date-year">{article.date.year}</p>
                          </div>
                      </div>
                      <div className="post-preview-text">
                          <h1>{article.title}</h1>
                          <p>{article.description}</p>
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