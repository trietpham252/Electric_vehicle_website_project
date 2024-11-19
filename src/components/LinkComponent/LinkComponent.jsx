import React from 'react';
import { Button } from 'antd';

const LinkComponent = ({type, href, ...rests}) => {
  return (
    <Button
    type={type}
    href={href}
    {...rests}
    >
    
    </Button>
  )
}

export default LinkComponent