import React, { useState } from 'react';
import { Radio, Space, Tabs, Typography, Button } from 'antd';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import xemaydien1_xanhtruc from '../../assets/Images/xemaydien1_xanhtruc.png';
import xemaydien2_beige from '../../assets/Images/xemaydien2_beige.png';
import xemaydien3_den from '../../assets/Images/xemaydien3_den.png';
import xemaydien4_xamtinhvan from '../../assets/Images/xemaydien4_xamtinhvan.png';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './Style.scss';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const ProductdetailsPage = () => {
  const preview = false;

  const [openTable, setOpenTable] = useState(null);

  const toggleTable = (index) => {
    setOpenTable(openTable === index ? null : index);
  };


  const [imageValue, setImageValue] = useState('img1');
  const [selectedColorName, setSelectedColorName] = useState('Xanh trúc'); // Tên màu mặc định
  
  //Màu {/* Thêm dữ liệu bảng: product_images_and_colors ở đây */} 
  const images = {
    img1: { src: xemaydien1_xanhtruc, color: 'Xanh trúc' },
    img2: { src: xemaydien2_beige, color: 'Beige' },
    img3: { src: xemaydien3_den, color: 'Đen' },
    img4: { src: xemaydien4_xamtinhvan, color: 'Xám tinh vân' },
  };

  const onImageChange = (value) => {
    setImageValue(value);
    setSelectedColorName(images[value].color);
  };

  const renderImage = () => {
    return (
      <ImageComponent
        src={images[imageValue].src}
        preview={preview}
        alt={selectedColorName}
        className="img--big"z
      />
    );
  };

  const [activeTab, setActiveTab] = useState('1'); // Tab mặc định hiển thị Thông số kỹ thuật

  const renderSpecs = () => {
    return (

      //Đây là phần thân
      <Space className="product-details" direction="vertical" size="large">
        {/* Bảng KÍCH THƯỚC, TRỌNG LƯỢNG */} {/* Thêm dữ liệu bảng: product_dimensions_and_weight ở đây */} 
        <div className="details-section">
          <table className="details-table">
            <thead className={`thead ${openTable === 1 ? 'active' : ''}`}
                   onClick={() => toggleTable(1)}
            >
              <tr>
                <th className='section-title-l'>
                  KÍCH THƯỚC, TRỌNG LƯỢNG
                </th>
                <th className='section-title-i'>YADEA ORLA</th> {/* YADEA ORLA nằm ngang với tiêu đề */}
              </tr>
            </thead>
            <tbody className={openTable === 1 ? 'openTable' : ''}>
              <tr>
                <td className='section-content-l'>Dài x rộng x cao (mm)</td>
                <td className='section-content-i'>1810 × 670 × 1140 mm</td> 
              </tr>
              <tr>
                <td className='section-content-l'>Màn hình</td>
                <td className='section-content-i'>Màn hình tinh thể lỏng 5.91 inch</td>
              </tr>
              <tr>
                <td className='section-content-l'>Khoảng sáng xe</td>
                <td className='section-content-i'>180 mm</td>
              </tr>
              <tr>
                <td className='section-content-l'>Chiều cao yên</td>
                <td className='section-content-i'>760 mm</td>
              </tr>
              <tr>
                <td className='section-content-l'>Khối lượng bản thân</td>
                <td className='section-content-i'>108 Kg</td>
              </tr>
              <tr>
                <td className='section-content-l'>Khối lượng cho phép chở</td>
                <td className='section-content-i'>130 Kg</td>
              </tr>
              <tr>
                <td className='section-content-l'>Dung tích cốp xe</td>
                <td className='section-content-i'>17 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bảng ĐỘNG CƠ */} {/* Thêm dữ liệu bảng: product_engines ở đây */} 
        <div className="details-section">
          <table className="details-table">
            <thead className={`thead ${openTable === 2 ? 'active' : ''}`}
                    onClick={() => toggleTable(2)}
            >
              <tr>
                <th className='section-title-l'>
                  ĐỘNG CƠ
                </th>
                <th className='section-title-i'>YADEA ORLA</th> {/* YADEA ORLA nằm ngang với tiêu đề */}
              </tr>
            </thead>
            <tbody className={openTable === 2 ? 'openTable' : ''}>
              <tr>
                <td className='section-content-l'>Loại động cơ</td>
                <td className='section-content-i'>Hub</td>
              </tr>
              <tr>
                <td className='section-content-l'>Công suất danh định</td>
                <td className='section-content-i'>800 W</td>
              </tr>
              <tr>
                <td className='section-content-l'>Công suất tối đa</td>
                <td className='section-content-i'>1700 W</td>
              </tr>
              <tr>
                <td className='section-content-l'>Tốc độ tối đa</td>
                <td className='section-content-i'>48 km/h</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bảng ẮC QUY */} {/* Thêm dữ liệu bảng: product_batterie ở đây */} 
        <div className="details-section">
          <table className="details-table">
            <thead  className={`thead ${openTable === 3 ? 'active' : ''}`}
                    onClick={() => toggleTable(3)}>
              <tr>
                <th className='section-title-l'>
                  ẮC QUY
                </th>
                <th className='section-title-i'>YADEA ORLA</th> {/* YADEA ORLA nằm ngang với tiêu đề */}
              </tr>
            </thead>
            <tbody className={openTable === 3 ? 'openTable' : ''}>
              <tr>
                <td className='section-content-l'>Loại ắc quy</td>
                <td className='section-content-i'>Ắc quy Graphene TTFAR</td>
              </tr>
              <tr>
                <td className='section-content-l'>Dung lượng ắc quyc</td>
                <td className='section-content-i'>60V22Ah</td>
              </tr>
              <tr>
                <td className='section-content-l'>Độ dài quãng đường</td>
                <td className='section-content-i'>65 Kg-30Km/h: 65Km</td>
              </tr>
              <tr>
                <td className='section-content-l'>Trọng lượng/ Kích thước PIN/ẮC QUY</td>
                <td className='section-content-i'>7.0±0.2kg*5</td>
              </tr>
              <tr>
                <td className='section-content-l'>Thời gian sạc</td>
                <td className='section-content-i'>7-8 tiếng</td>
              </tr>
            </tbody>
          </table>
        </div>
        
          {/* Bảng THÔNG SỐ KHÁC */} {/* Thêm dữ liệu bảng: product_other_specs ở đây */} 
        <div className="details-section">
          <table className="details-table">
            <thead  className={`thead ${openTable === 4 ? 'active' : ''}`}
                    onClick={() => toggleTable(4)}>
              <tr>
                <th className='section-title-l'>
                  THÔNG SỐ KHÁC
                </th>
                <th className='section-title-i'>YADEA ORLA</th> {/* YADEA ORLA nằm ngang với tiêu đề */}
              </tr>
            </thead>
            <tbody className={openTable === 4 ? 'openTable' : ''}>
              <tr>
                <td className='section-content-l'>Loại vành</td>
                <td className='section-content-i'>MT2.15X12/MT2.15X12</td>
              </tr>
              <tr>
                <td className='section-content-l'>Đường kính vành trước/sau</td>
                <td className='section-content-i'>12/12inch</td>
              </tr>
              <tr>
                <td className='section-content-l'>Hệ thống phanh</td>
                <td className='section-content-i'>Trước đĩa/ Sau tang chống</td>
              </tr>
              <tr>
                <td className='section-content-l'>Loại lốp</td>
                <td className='section-content-i'>Lốp không săm</td>
              </tr>
              <tr>
                <td className='section-content-l'>Thông số lốp (trước/sau)</td>
                <td className='section-content-i'>Trước 90/80-12 | sau 90/80-12</td>
              </tr>
              <tr>
                <td className='section-content-l'>Hệ thống đèn</td>
                <td className='section-content-i'>FULL LED</td>
              </tr>
              <tr>
                <td className='section-content-l'>Chế độ lái</td>
                <td className='section-content-i'>TTFAR/SPORT</td>
              </tr>
              <tr>
                <td className='section-content-l'>Cách khởi động xe</td>
                <td className='section-content-i'>Bluetooth và Khóa núm xoay/ Remote/ Chìa khoá cơ</td>
              </tr>
              <tr>
                <td className='section-content-l'>Tính Năng</td>
                <td className='section-content-i'>Hệ thống chống trộm, Cảnh báo lăn bánh, Remote khởi động từ xa/tìm xe, Cổng sạc USB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Space>
    
    );
  };

  const [showMore, setShowMore] = useState(false); // Trạng thái để theo dõi việc hiển thị thêm nội dun
  
  const renderReviews = () => {
    return (
     
      <div>
        {/* Thêm dữ liệu bảng: review_articles ở đây */} 
        <Space direction="vertical" size="large" className='reviewarticle'>
        <Title className='reviewarticle-titile' level={3}>Đánh giá chi tiết</Title>
        <Paragraph className='reviewarticle-title-Paragraph'>
          <h3 href="#">Thiết kế thời trang, đa dạng sắc màu</h3> 
          Thương hiệu xe Espero đến từ tập đoàn Detech của Việt Nam. Hãng xe này nổi tiếng với các mẫu thiết kế đẹp, rất “nịnh” mắt người nhìn. Đặc biệt, bảng màu sắc của xe lên tới 18 màu cá tính. Tha hồ cho các khách hàng lựa chọn. Nước sơn đẹp, phủ nhũ ánh kim hoặc sơn mờ. Cực kỳ đẹp mắt.
        </Paragraph>

        <Space className='image-reviewarticle'>
          <ImageComponent
          src={'https://xedienvietthanh.com/wp-content/uploads/2024/02/xe-dien-vespa-espero-classic-pro-2024.jpg'}
          alt="Xe máy điện Yadea U Like Trắng"
          className="image-reviewarticle-i"
          preview={preview}
          />
        </Space>
        

        <Paragraph className='reviewarticle-title-Paragraph'>
          <h3 href="#">Điểm nhận biết so với phiên bản cũ</h3> 
          Mặc dù có bảng tem màu giống hệt với xe Classic SE 2023. Nhưng bạn vẫn có thể dễ dàng nhận biết phiên bản Pro và SE. Đó là nhờ vào phần yếm trước. Trên bản Pro mới nhất, đèn xi nhan xe sẽ nằm ngang trên mặt yếm. Trong khi bản SE thì đèn xi nhan nằm dọc 2 bên sườn. Đi kèm với đó là phần đèn định vị dọc sống yếm cũng khác nhau.
        </Paragraph>

        <Space className='image-reviewarticle'>
          <ImageComponent
          src={'https://xedienvietthanh.com/wp-content/uploads/2024/02/xe-dien-vespa-espero-classic-pro-2024-2.jpg'}
          alt="Xe máy điện Yadea U Like Trắng"
          className="image-reviewarticle-i"
          preview={preview}
          />
        </Space>

        <Paragraph className='reviewarticle-title-Paragraph'>
          Điểm nhấn của xe vespa Espero Classic Pro phiên bản 2024 này là phần mặt đồng hồ. Màn hình tinh thể lỏng được trang bị đa dạng sắc màu. Hiển thị đầy đủ các thông số: vận tốc, ODO, chế độ di chuyển, lượng điện và báo pin thu hồi điện năng. Màn hình còn tích hợp chip điện tử. Có thể khởi động xe bằng thẻ từ NFC.
        </Paragraph>

        <Space className='image-reviewarticle'>
          <ImageComponent
          src={'https://xedienvietthanh.com/wp-content/uploads/2022/06/xe-dien-vespa-espero-classic-se-2023-3.jpg'}
          alt="Xe máy điện Yadea U Like Trắng"
          className="image-reviewarticle-i"
          preview={preview}
          />
        </Space>
        
        <Paragraph className='reviewarticle-title-Paragraph'>
          <h3 href="#">Khả năng vận hành của xe điện vespa Espero Classic Pro</h3> 
          Động cơ xe đạt công suất tối đa là 1600W. Nhờ đó, vận tốc tối đa xe đạt mức di chuyển thoải mái, phù hợp trên phố phường. Đặc biệt, xe được trang bị khả năng thu hồi điện năng. Nhờ vậy sẽ giúp xe đi quãng đường xa hơn. Đạt khoảng 90 – 95km trong mỗi lần sạc. Lưu ý, để đạt được quãng đường lý tưởng này, bạn nên đi chậm ở chế độ Eco và tải nhẹ.
        </Paragraph>
        
        <Paragraph className='reviewarticle-title-Paragraph'>
          Đồng thời, do vậy điện trong xe có khả năng chống cháy, chịu được nhiệt lớn giúp bảo vệ an toàn cho người dùng khi đi trời mưa, ngập nước. Lớp vỏ bảo vệ ắc quy cũng tăng khả năng chống trầy xước.
        </Paragraph>

        <Paragraph className='reviewarticle-title-Paragraph'>
          Các bạn muốn sở hữu chiếc xe Classic Pro có thể liên hệ Xe Điện Việt Thanh. Với hệ thống hơn 20 cửa hàng trên toàn quốc, dễ dàng cho bạn trải nghiệm xe. Ngoài ra, nếu cần bảo dưỡng xe. Bạn cũng có thể thuận tiện ghé bất kỳ chi nhánh nào, cũng được bảo hành chính hãng. Gọi hotline 1900.2082 để được tư vấn miễn phí.
        </Paragraph>
      </Space>
      </div>
      
       
    );
  };

  return (
    <>
    {/* Thêm dữ liệu bảng: products ở đây */} 
    <Space className="all--details">
      {/* Hình ảnh */}
      <Space direction="vertical" size="middle" className="details--img">
        <Space className="all--img-big">{renderImage()}</Space>
        <Space className="all--img-small">
          <Radio.Group
            className="all--img-small-i"
            onChange={(e) => onImageChange(e.target.value)}
            value={imageValue}
          >
            {Object.keys(images).map((key) => (
              <Radio.Button key={key} className="all--img-small-ii" value={key}>
                <ImageComponent
                  src={images[key].src}
                  alt={`Hình ${key}`}
                  preview={preview}
                  className="img--small"
                  onClick={() => onImageChange(key)}
                />
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
      </Space>

      {/* Chi tiết và nút */}
      <Space className="title--button">
        {/* Tiêu đề và lựa chọn màu sắc */} 
        <Space direction="vertical" className="details--title">
          <h1 className="title--h1">YADEA Ossy</h1>
          <h2 className="title--h2">Chọn màu sắc</h2>
          <Space className="all--color">
            <Radio.Group
              className="all--color-i"
              onChange={(e) => onImageChange(e.target.value)}
              value={imageValue}
            >
              <Space>
                <Radio.Button
                  className="all--color-ii"
                  style={{ backgroundColor: '#80ED99' }}
                  value="img1"
                />
              </Space>

              <Space>
                <Radio.Button
                  className="all--color-ii"
                  style={{ backgroundColor: '#faf0e6' }}
                  value="img2"
                />
              </Space>

              <Space>
                <Radio.Button
                  className="all--color-ii"
                  style={{ backgroundColor: '#000000' }}
                  value="img3"
                />
              </Space>

              <Space>
                <Radio.Button
                  className="all--color-ii"
                  style={{ backgroundColor: '#9370DB' }}
                  value="img4"
                />
              </Space>
            </Radio.Group>

            {/* Hiển thị tên màu đã chọn */}
            <Space className="title--color">{selectedColorName}</Space>
          </Space>
          <Space classname="remainingquantity">
              <h3 classname="remainingquantity-1">Số lượng còn:</h3>
              <h3 classname="remainingquantity-2">1</h3>
          </Space>
        </Space>
        
        {/* Tổng số tiền thanh toán */}
        <Space className="total-payment-amount">
          <Space className="payment-price-title">
            <h3 className="payment-price-title-i">Số tiền thanh toán</h3>
          </Space>
          <Space className="amount">
            <h3 className="amount-i">21,990,000</h3>
            <h3 className="amount-i money-unit">VNĐ</h3>
          </Space>
        </Space>

        {/* Nút */}
        <Space className="setrow--button">
          <ButtonComponent
            className="oder--button"
            type="primary"
            buttonText="Chọn mua sản phẩm"
            href="/orders"
          />
        </Space>
      </Space>

      <Space className='custom-all-title-price' direction="vertical">
        <Space className="custom-title-price">
            <h3 className="custom-title-price-1">Giá gốc:</h3>
            <h3 className="custom-title-price-2">5000000 VNĐ</h3>
        </Space>
        {/* Hiển thị phần trăm giảm giá */}
        <Space className="custom-title-discount-percent">
          <h4 className="custom-title-discount-percent-1">Giảm:</h4>
          <h4 className="custom-title-discount-percent-2">10%</h4>
        </Space>
        <Space className="custom-title-price">
            <h3 className="custom-title-price-1">Giá khuyến mãi:</h3>
            <h3 className="custom-title-price-2">5000000 VNĐ</h3>
        </Space>
        <Space className="custom-purchased">
            <h3 className="custom-purchased-1">Số lượng mua</h3>
            <h3 className="custom-purchased-2">1</h3>
        </Space>
       
      </Space>
    </Space>

    {/* Phần 2 */}
    <Space className="all-product-details">
      <Space className="product-details" direction="vertical" size="large">
        {/* Nút Thông số kỹ thuật và Bài viết đánh giá */}
        <Tabs className='title-tabs' 
              activeKey={activeTab}
              onChange={key => setActiveTab(key)} 
            
        >
          <TabPane className='title-tabs-i' tab="Thông số kỹ thuật" key="1">
          {/* Gọi hàm renderSpecs() để hiển thị thông số kỹ thuật */}
          {renderSpecs()}
          </TabPane>
          <TabPane className='title-tabs-i' tab="Bài viết đánh giá" key="2">
              {/* Gọi hàm renderReviews() để hiển thị bài viết đánh giá */}
              {renderReviews()}
          </TabPane>
        </Tabs>
      </Space>
    </Space>
    </>
    
  );
};

export default ProductdetailsPage;