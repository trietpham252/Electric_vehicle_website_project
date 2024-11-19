import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

const ImageComponent = ({ src, alt, to, preview, href, ...rests }) => {
  return (
    <Link to={to}>
      <Image 
        src={src} 
        alt={alt} 
        href={href}  // Add href prop if you want to redirect to a different page
        preview={preview}
        {...rests}
      />
    </Link>
  );
}

export default ImageComponent;
