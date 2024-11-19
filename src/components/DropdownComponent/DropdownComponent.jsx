
import React from 'react';
import { Dropdown } from 'antd';

const DropdownComponent = ({ menu, placement, icon, isButton, children, ...rests}) => {
  
    return (
      <Dropdown
      menu={menu}
      placement={placement}
      icon={icon}
      {...rests}   
      >
      {children}
      </Dropdown>
    )

}


export default DropdownComponent