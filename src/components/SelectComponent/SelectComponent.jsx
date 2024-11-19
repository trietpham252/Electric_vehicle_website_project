import React from 'react'
import { Select} from 'antd';

export const SelectComponent = (drops) => {

    const { defaultValue, style, onChange, options, ...rests} = drops;

    return (

            <Select                         
            defaultValue={defaultValue}
            style={style}
            onChange={onChange}
            options={options}
            {...rests}
            />
    )
}

export default SelectComponent