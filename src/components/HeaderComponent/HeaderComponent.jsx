import React, { useState } from 'react'
import InputComponent from '../InputComponent/InputComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import DropdownComponent from '../DropdownComponent/DropdownComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import LinkComponent from '../LinkComponent/LinkComponent';
import './Style.scss'
import logohd from '../../assets/Images/logohd.png';
import shopee from '../../assets/Images/shopee.png';
import lazada from '../../assets/Images/lazada.png';
import { DownOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';
import { Space, message } from 'antd';




const HeaderComponent = () => {
  const [loadings, setLoadings] = useState([]);
  const onSearch = (e) => {
    console.log(e.target.value);
  }

 

  
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };


  const items1 = [
    {
      key: '1',
      label: 'Sản phẩm mới',
      children: [
        {
          key: '1-1',
          label:'YADEA Ossy',
        },
        {
          key: '1-2',
          label: 'YADEA Oris',
        },
        {
          key: '1-3',
          label: 'YADEA Orla',
        },
      ],
    },
    {
      key: '2',
      label: 'Dòng City',
      children: [
        {
          key: '2-1',
          label: 'YADEA Voltguard',
        },
        {
          key: '2-2',
          label: 'YADEA iCute',
        },
      ],
    },
    {
      key: '3',
      label: 'Dòng Sport',
      children: [
        {
          key: '3-1',
          label: 'YADEA S3 Pro',
        },
      ],
    },
  ];
  const items2 = [
    {
      key: '1',
      label: 'Dòng bán chạy',
      children: [
        {
          key: '1-1',
          label: 'YADEA iFUN',
        },
        {
          key: '1-2',
          label: 'YADEA i8',
        },
      ],
    },
    {
      key: '2',
      label: 'Dòng sản phẩm mới',
      children: [
        {
          key: '2-1',
          label: 'YADEA I6',
        },
        {
          key: '2-2',
          label: 'YADEA IGO',
        },
      ],
    },
  ];


  const items3 = [
    {
      key: '1',
      label: 'Dòng bán chạy',
      children: [
        {
          key: '1-1',
          label: 'Ắc quy Thiên Năng',
        },
        {
          key: '1-2',
          label: 'ẮC QUY TIANNENG',
        },
      ],
    },
    {
      key: '2',
      label: 'Dòng sản phẩm mới',
      children: [
        {
          key: '1-1',
          label: 'ẮC QUY XE MÁY ĐIỆN TIANNENG',
        },
        {
          key: '1-2',
          label: 'ẮC QUY XE ĐIỆN YADEA',
        },
      ],
    },
  ];

  const items4 = [
    {
      key: '1',
      label: 'Dòng bán chạy',
      children: [
        {
          key: '1-1',
          label: 'BỘ KHÓA XE',
        },
        {
          key: '1-2',
          label: 'TAY GA',
        },
      ],
    },
    {
      key: '2',
      label: 'Dòng sản phẩm mới',
      children: [
        {
          key: '1-1',
          label: 'SẠC',
        },
      ],
    },
  ];

  
  
  const onClick = () => {
    console.log('click')
  }

  const menuProps = {
    items: items4,
    onClick: handleMenuClick,
  };

  return (
    <Space className='header'>
    
      <Space className='header-i'>

        {/* Cụm 1 */}
        <Space className='hd-c1'>
          <ImageComponent className='im-header'
            src={logohd}
            preview={false}
            alt="Image logo"
            to="/"
          />
        </Space>

         {/* Cụm 2 */}
        <Space className='hd-c2'>
          <DropdownComponent className="link"
            menu={{ items: items1 }}
            >
              <a onClick={onClick}>
                <Space onClick={onClick} className='ii'>
                    XE MÁY ĐIỆN
                    <DownOutlined />
                </Space>
              </a>
          </DropdownComponent>

          <DropdownComponent className="link"
              menu={{ items: items2 }}
              >
              <a onClick={onClick}>
                <Space onClick={onClick} className='ii' >
                    XE ĐẠP ĐIỆN
                    <DownOutlined />
                </Space>
              </a>
          </DropdownComponent>

          <DropdownComponent className="link"
              menu={{ items: items3 }}
              >
              <a onClick={onClick}>
                <Space onClick={onClick} className='click1' >
                    ÁC QUY
                    <DownOutlined />
                </Space>
              </a>
          </DropdownComponent>

          <DropdownComponent className="link"
            menu={{ items: items4 }}
            >
            <a onClick={onClick}>
              <Space onClick={onClick} className='click2' >
                  PHỤ TÙNG
                  <DownOutlined />
              </Space>
            </a>
        </DropdownComponent>

          <LinkComponent className="link" type='link' href='/news'>
          TIN TỨC
          </LinkComponent>

          <LinkComponent className="link" type='link' href='/Storecriteria'>
          CỬA HÀNG
          </LinkComponent>

        </Space>

         {/* Cụm 3 */}
        <Space className='hd-c3'>
          <InputComponent className='s-header'
          placeholder="Tìm kiếm" 
          onSearch={onSearch} 
          enterButton
          />
          <ButtonComponent
          type="primary"
          icon={<ShoppingOutlined />}
          onClick={onClick}
          href={'/viewInvoice'}
          />
        </Space>
        
       

      </Space>
      
    </Space>

  )
}

export default HeaderComponent