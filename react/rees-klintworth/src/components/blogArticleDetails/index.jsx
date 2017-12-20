import React from 'react';

const BlogArticleDetails = props => {
  return (
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-xs-12 col-md-10 post-container">
          <div class="post">
              <a class="post-preview-link" href={props.link}>
                  <div class="post-preview">
                      <img class="post-preview-image" src={props.image} />
                      <div class="post-preview-image-overlay">
                          <p class="post-date-day">{props.date.day}</p>
                          <div class="post-date-stacked">
                              <p class="post-date-month">{props.date.month}</p>
                              <p class="post-date-year">{props.date.year}</p>
                          </div>
                      </div>
                      <div class="post-preview-text">
                          <h1>{props.title}</h1>
                          <p>{props.description}</p>
                      </div>
                  </div>
              </a>
          </div>
      </div>
      <div class="col-md-1"></div>
  </div>
  );
};

export default BlogArticleDetails