import React from 'react';
import './style.css';

const MediaLink = props => {
  const className = 'fa fa-' + props.type;
  return (
    <a class={className} href={props.link}></a>
  );
};

const MediaLinks = props => {
  return (
    <div class={props.className}>
      {props.items.map(item => <MediaLink key={item.type} {...item} />)}
    </div>
  );
};

export default MediaLinks;