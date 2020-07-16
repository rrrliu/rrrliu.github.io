import React from 'react';
import './external-link.css';

const ExternalLink = ({ text, url, logoUrl }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <img className="logo" src={logoUrl} alt={text}></img>
    </a>
  );
};

export default ExternalLink;
