import React from 'react';
import { Input} from 'antd';
const { Search } = Input;


const InputComponent = ({placeholder, onSearch, ...rests}) => {

  return (
    <Search 
    placeholder={placeholder}
    onSearch={onSearch} 
    enterButton
    {...rests}
    />
  )
}

export default InputComponent