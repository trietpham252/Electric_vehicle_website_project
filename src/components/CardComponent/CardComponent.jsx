import React from 'react'
import { Card } from 'antd';
import './Style.scss'

const CardComponent = ({ title, cover, description, ...rests}) => {
  return (
    <Card
        title={title}
        cover={cover}
        description={description}
        {...rests}   
        >
    </Card>
  )
}

export default CardComponent