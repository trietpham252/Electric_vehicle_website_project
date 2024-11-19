import React from 'react'
import {Space} from 'antd';
import LinkComponent from '../LinkComponent/LinkComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import facebook from '../../assets/Images/facebook.png';
import logoft from '../../assets/Images/logoft.png';
import './Style.scss'

const FooterComponent = () => {

  return (
    <Space className='footer'>
        <Space className='footer-i'>
             {/* Cụm 1 */}
            <Space direction='vertical' className='ft-c1'>
                <ImageComponent className='im-footer'
                src={logoft}
                preview={false}
                alt="Image anhcuahang"
                />
                <Space>
                CÔNG TY TNHH MTV XE ĐIỆN MIỀN TÂY
                Địa Chỉ: Khu Phố 2, TT.Thứ 11, An Minh, Kiên Giang
                </Space>
            </Space>

            {/* Cụm 2 */}
            <Space className='ft-c2'>
                <Space direction='vertical' className='ft-link1'>
                    
                    <LinkComponent className="link" type='link' style={{ color: '#F27405' }} >
                        Sản phẩm mới
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Xe đạp điện
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Xe máy điện
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Phụ kiện
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Phụ tùng
                    </LinkComponent>
                </Space>

                <Space direction='vertical' className='ft-link2'>
                
                    <LinkComponent className="link" type='link' style={{ color: '#F27405' }} >
                         Về chúng tôi
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Cửa hàng
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Công nghệ
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Tin tức
                    </LinkComponent>
                </Space>

                <Space direction='vertical' className='ft-link3'>
                    <LinkComponent className="link" type='link' style={{ color: '#F27405' }} >
                         Hỗ Trợ 
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Hỗ Trợ & Bảo Hành
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Phương thức thanh toán
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Phương thức vận chuyển
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Chính sách đổi trả
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Chính sách bảo mật
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Cơ hội hợp tác
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Liên hệ
                    </LinkComponent>
                    <LinkComponent className="link" type='link' href='/text'>
                        Admin
                    </LinkComponent>
                </Space>
            </Space>

            {/* Cụm 3 */}
            <Space direction='vertical' className='ft-c3'>
                <Space>Theo đõi xe chúng tôi</Space>
                <ImageComponent
                  src={facebook}
                  alt={facebook}
                  width={24}
                  to="https://www.facebook.com/xedienmientay1/?_rdr"
                  preview={false} // Tắt chế độ preview
                />
                <Space>Thông tin liên hệ</Space>
                <Space>CSKH:
                    <LinkComponent className="linka" type='link'>
                       0373411491
                    </LinkComponent>
                </Space>
                <Space>Hotline:
                    <LinkComponent className="linka" type='link'>
                        (+84) 587 326 688
                    </LinkComponent>
                </Space>
                <Space>Email:
                    <Space className="link" type='link' href='/text'>
                        xedienmientay@gmail.com.vn
                    </Space>
                </Space>
            </Space>
        </Space>
    </Space>
  )
}

export default FooterComponent