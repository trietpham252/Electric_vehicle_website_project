import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ onClick, icon, type, buttonText, href, ...rests}) => {
  return (
        <Button
          type={type}
          icon={icon}
          onClick={onClick}
          href={href}
          {...rests}
        >
          {buttonText}
        </Button>
  );
}

export default ButtonComponent;
