// import React, { useState } from 'react';
// import { Radio, Space, Button, Flex } from 'antd';
// import ImageComponent from '../../components/ImageComponent/ImageComponent';
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
// import xemaydien1_xanhtruc from '../../assets/Images/xemaydien1_xanhtruc.png';
// import xemaydien2_beige from '../../assets/Images/xemaydien2_beige.png';
// import xemaydien3_den from '../../assets/Images/xemaydien3_den.png';
// import xemaydien4_xamtinhvan from '../../assets/Images/xemaydien4_xamtinhvan.png';
// import './Style.scss';

// const ProductdetailsPage = () => {
//   const preview = false;

//   // Hình ảnh
//   const [imageValue, setImageValue] = useState('img1');
//   const [selectedColorName, setSelectedColorName] = useState('Xanh lá cây'); // Tên màu mặc định


//   const onImageChange = (e) => {
//     setImageValue(e.target.value);

//      // Cập nhật tên màu dựa trên lựa chọn
//      switch (e.target.value) {
//       case 'img1':
//         setSelectedColorName('Xanh trúc');
//         break;
//       case 'img2':
//         setSelectedColorName('Beige');
//         break;
//       case 'img3':
//         setSelectedColorName('Đen');
//         break;
//       case 'img4':
//         setSelectedColorName('Tím nhạt');
//         break;
//       default:
//         setSelectedColorName('Xanh trúc'); // Tên màu mặc định
//         break;
//     }
//   };

//   const handleImageClick = (value) => {
//     setImageValue(value);

//     // Cập nhật tên màu tương ứng khi click vào hình ảnh
//     switch (value) {
//       case 'img1':
//         setSelectedColorName('Xanh trúc');
//         break;
//       case 'img2':
//         setSelectedColorName('Beige');
//         break;
//       case 'img3':
//         setSelectedColorName('Đen');
//         break;
//       case 'img4':
//         setSelectedColorName('Xám tinh vân');
//         break;
//       default:
//         setSelectedColorName('Xanh trúc');
//         break;
//     }
//   };



//   const renderImage = () => {
//     let imageSrc;
//     switch (imageValue) {
//       case 'img1':
//         imageSrc = xemaydien1_xanhtruc;
//         break;
//       case 'img2':
//         imageSrc = xemaydien2_beige;
//         break;
//       case 'img3':
//         imageSrc = xemaydien3_den;
//         break;
//       case 'img4':
//         imageSrc = xemaydien4_xamtinhvan;
//         break;
//       default:
//         imageSrc = xemaydien1_xanhtruc; 
//         break;
//     }

//     return (
//       <ImageComponent src={imageSrc} preview={preview} alt={selectedColorName} className='img--big' />
//     );
//   };

//   return (
//     <Space className='all--details'>
//       <Space direction="vertical" size="middle" className='details--img'>
//         <Space className='all--img-big'>
//           {renderImage()}
//         </Space>

//         <Space className='all--img-small'>

//           <Radio.Group className='all--img-small-i' onChange={onImageChange} value={imageValue}>
//             <Radio.Button className='all--img-small-ii' value="img1">
//               <ImageComponent src={xemaydien1_xanhtruc} alt="Hình 1" preview={preview} className='img--small'  onClick={() => handleImageClick('img1')}  />
//             </Radio.Button>
//             <Radio.Button className='all--img-small-ii' value="img2">
//               <ImageComponent src={xemaydien2_beige} alt="Hình 2" preview={preview} className='img--small'  onClick={() => handleImageClick('img2')}  />
//             </Radio.Button>
//             <Radio.Button className='all--img-small-ii' value="img3">
//               <ImageComponent src={xemaydien3_den} alt="Hình 3" preview={preview} className='img--small'  onClick={() => handleImageClick('img3')} />
//             </Radio.Button>
//             <Radio.Button className='all--img-small-ii' value="img4">
//               <ImageComponent src={xemaydien4_xamtinhvan} alt="Hình 4" preview={preview} className='img--small'  onClick={() => handleImageClick('img4')} />
//             </Radio.Button>
//           </Radio.Group>
//         </Space>
//       </Space>

//       {/* Title and button */}
//       <Space className='title--button'>
//         {/* Title */}
//         <Space direction="vertical" className='details--title'>
//           <h1 className='title--h1'>YADEA Ossy</h1>
//           <h2 className='title--h2'>Chọn màu sắc</h2>

//           <Space className='all--color'>
//             <Radio.Group className='all--color-i' onChange={onImageChange} value={imageValue}>
//               <Space>
//                 <Radio.Button className='all--color-ii' style={{ backgroundColor: '#80ED99' }} value="img1"></Radio.Button>
//               </Space>
//               <Space>
//                 <Radio.Button className='all--color-ii' style={{ backgroundColor: '#faf0e6' }} value="img2"></Radio.Button>
//               </Space>
//               <Space>
//                 <Radio.Button className='all--color-ii' style={{ backgroundColor: '#000000' }} value="img3"></Radio.Button>
//               </Space>
//               <Space>
//                 <Radio.Button className='all--color-ii' style={{ backgroundColor: '#9370DB' }} value="img4"></Radio.Button>
//               </Space>
//             </Radio.Group>

//               {/* Hiển thị tên màu đã chọn */}
//               <Space className='title--color'>
//                 {selectedColorName}
//               </Space>
//           </Space>
//         </Space>

//         <Space className='total-payment-amount'>
//           <Space className='payment-price-title'>
//             <h3 className='payment-price-title-i'>Số tiền thanh toánn</h3>
//           </Space>

//           <Space className='amount'>
//             <h3 className='amount-i'>21,990,000</h3>
//             <h3 className='amount-i money-unit'>VNĐ</h3>
//           </Space>
         
//         </Space>

//         {/* Button */}
//         <Space className='setrow--button'>
//           <ButtonComponent className="oder--button" type="primary" href="/text" buttonText="Chọn mua sản phẩm" />
//         </Space>
//       </Space>
//     </Space>
//   );
// };

// export default ProductdetailsPage;

// import React, { useState } from 'react';
// import { Space, Typography } from 'antd';
// import ImageComponent from '../../components/ImageComponent/ImageComponent';
// import xemaydien1_xanhtruc from '../../assets/Images/xemaydien1_xanhtruc.png';

// const { Title, Paragraph } = Typography;

// const NewsPage = () => {
//   const [preview, setPreview] = useState(false);

//   return (
//     <Space>
//         <Space size="large">
       
//           <Space direction="vertical">
//             <Title level={3}>Tin tức</Title>
//             {/* Đoạn 1 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>Xe Đạp Điện Là Gì? Cấu Tạo Và Nguyên Lý Hoạt Động Xe Đạp Điện</h3> 
//                     Xe đạp điện là gì, có cấu tạo như thế nào? Rất nhiều người có ý định sử dụng xe
//                 </Paragraph>
//             </Space>


//             {/* Đoạn 2 */}
//             <Space>
//             <Space>
//                 <ImageComponent
//                 src={xemaydien1_xanhtruc}
//                 alt="Xe máy điện Yadea U Like Trắng"
//                 width={300}
//                 style={{ marginBottom: '20px' }}
//                 preview={preview}
//                 />
//             </Space>

//             <Paragraph direction="vertical">
//                 <h3 href="#" style={{ color: '#1890ff' }}>Bảng Giá Xe Máy 50cc, Xe Điện DKBike 2024</h3> 
//                 Với mục đích giúp khách hàng tiếp cận gần hơn với thương hiệu DKBike, hiểu rõ các mẫu xe cùng giá thành, chúng tôi đã tổng hợp bảng giá xe máy 50cc, xe điện DKBike mới nhất trong tháng 7 này.
//             </Paragraph>
//         </Space>

//             {/* Đoạn 3 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>Nên Mua Dòng Xe Đạp Điện Nào Giá 13 triệu?</h3> 
//                     Với mức giá khoảng 13 triệu thì bạn có vô vàn lựa chọn mẫu xe đạp điện. Nhưng trong bài viết này chúng tôi xin giới thiệu với các bạn mẫu xe đạp điện đạt chất lượng quốc tế đến từ hãng DKBike - xe đạp điện Sparta.
//                 </Paragraph>
//             </Space>

//             {/* Đoạn 4 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>4. Giá Cả Cạnh Tranh và Chính Sách Thanh Toán Linh Hoạt</h3> 
//                     Đưa ra giá bán hợp lý, cạnh tranh trong phân khúc xe điện, đi kèm các chương trình ưu đãi và khuyến mãi thường xuyên.
//                     Cho phép thanh toán linh hoạt qua các hình thức trả góp, thẻ tín dụng, hoặc hỗ trợ vay vốn lãi suất thấp, nhằm đáp ứng nhu cầu tài chính của khách hàng.
//                 </Paragraph>
//             </Space>

//             {/* Đoạn 5 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>4. Giá Cả Cạnh Tranh và Chính Sách Thanh Toán Linh Hoạt</h3> 
//                     Đưa ra giá bán hợp lý, cạnh tranh trong phân khúc xe điện, đi kèm các chương trình ưu đãi và khuyến mãi thường xuyên.
//                     Cho phép thanh toán linh hoạt qua các hình thức trả góp, thẻ tín dụng, hoặc hỗ trợ vay vốn lãi suất thấp, nhằm đáp ứng nhu cầu tài chính của khách hàng.
//                 </Paragraph>
//             </Space>

//             {/* Đoạn 6 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>6. Trải nghiệm Khách hàng và Hỗ trợ Kỹ thuật</h3> 
//                     Xây dựng hệ thống chăm sóc khách hàng thân thiện, luôn sẵn sàng giải đáp thắc mắc và hỗ trợ nhanh chóng qua hotline, website, và các kênh mạng xã hội.
//                     Cung cấp trải nghiệm lái thử để khách hàng có thể trực tiếp cảm nhận chất lượng và tính năng của xe.
//                 </Paragraph>
//             </Space>

//              {/* Đoạn 7 */}
//              <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>6. Trải nghiệm Khách hàng và Hỗ trợ Kỹ thuật</h3> 
//                     Xây dựng hệ thống chăm sóc khách hàng thân thiện, luôn sẵn sàng giải đáp thắc mắc và hỗ trợ nhanh chóng qua hotline, website, và các kênh mạng xã hội.
//                     Cung cấp trải nghiệm lái thử để khách hàng có thể trực tiếp cảm nhận chất lượng và tính năng của xe.
//                 </Paragraph>
//             </Space>


//           {/* Đoạn 8 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>6. Trải nghiệm Khách hàng và Hỗ trợ Kỹ thuật</h3> 
//                     Xây dựng hệ thống chăm sóc khách hàng thân thiện, luôn sẵn sàng giải đáp thắc mắc và hỗ trợ nhanh chóng qua hotline, website, và các kênh mạng xã hội.
//                     Cung cấp trải nghiệm lái thử để khách hàng có thể trực tiếp cảm nhận chất lượng và tính năng của xe.
//                 </Paragraph>
//             </Space>

//          {/* Đoạn 9 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>6. Trải nghiệm Khách hàng và Hỗ trợ Kỹ thuật</h3> 
//                     Xây dựng hệ thống chăm sóc khách hàng thân thiện, luôn sẵn sàng giải đáp thắc mắc và hỗ trợ nhanh chóng qua hotline, website, và các kênh mạng xã hội.
//                     Cung cấp trải nghiệm lái thử để khách hàng có thể trực tiếp cảm nhận chất lượng và tính năng của xe.
//                 </Paragraph>
//             </Space>

//         {/* Đoạn 10 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>6. Trải nghiệm Khách hàng và Hỗ trợ Kỹ thuật</h3> 
//                     Xây dựng hệ thống chăm sóc khách hàng thân thiện, luôn sẵn sàng giải đáp thắc mắc và hỗ trợ nhanh chóng qua hotline, website, và các kênh mạng xã hội.
//                     Cung cấp trải nghiệm lái thử để khách hàng có thể trực tiếp cảm nhận chất lượng và tính năng của xe.
//                 </Paragraph>
//             </Space>

//             {/* Đoạn 11 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>6. Trải nghiệm Khách hàng và Hỗ trợ Kỹ thuật</h3> 
//                     Xây dựng hệ thống chăm sóc khách hàng thân thiện, luôn sẵn sàng giải đáp thắc mắc và hỗ trợ nhanh chóng qua hotline, website, và các kênh mạng xã hội.
//                     Cung cấp trải nghiệm lái thử để khách hàng có thể trực tiếp cảm nhận chất lượng và tính năng của xe.
//                 </Paragraph>
//             </Space>

//             {/* Đoạn 12 */}
//             <Space>
//                 <Space>
//                     <ImageComponent
//                     src={xemaydien1_xanhtruc}
//                     alt="Xe máy điện Yadea U Like Trắng"
//                     width={300}
//                     style={{ marginBottom: '20px' }}
//                     preview={preview}
//                     />
//                 </Space>

//                 <Paragraph direction="vertical">
//                     <h3 href="#" style={{ color: '#1890ff' }}>6. Trải nghiệm Khách hàng và Hỗ trợ Kỹ thuật</h3> 
//                     Xây dựng hệ thống chăm sóc khách hàng thân thiện, luôn sẵn sàng giải đáp thắc mắc và hỗ trợ nhanh chóng qua hotline, website, và các kênh mạng xã hội.
//                     Cung cấp trải nghiệm lái thử để khách hàng có thể trực tiếp cảm nhận chất lượng và tính năng của xe.
//                 </Paragraph>
//             </Space>
//           </Space>
//         </Space>
//     </Space>
//   )
// }

// export default NewsPage

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


  const [imageValue, setImageValue] = useState('product_image_1');
  const [selectedColorName, setSelectedColorName] = useState('color_name1'); // Tên màu mặc định
  
  //Màu {/* Thêm dữ liệu bảng: product_images_and_colors ở đây */} 
  const images = {
    img1: { src: product_image_1, color: 'color_name1' },
    img2: { src: product_image_2, color: 'color_name2' },
    img3: { src: product_image_3, color: 'color_name3' },
    img4: { src: product_image_4, color: 'color_name4' },
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
                <td className='section-content-i'>dimensions mm</td> 
              </tr>
              <tr>
                <td className='section-content-l'>Màn hình</td>
                <td className='section-content-i'>screen inch</td>
              </tr>
              <tr>
                <td className='section-content-l'>Khoảng sáng xe</td>
                <td className='section-content-i'>ground_clearance mm</td>
              </tr>
              <tr>
                <td className='section-content-l'>Chiều cao yên</td>
                <td className='section-content-i'>seat_height mm</td>
              </tr>
              <tr>
                <td className='section-content-l'>Khối lượng bản thân</td>
                <td className='section-content-i'>self_weight Kg</td>
              </tr>
              <tr>
                <td className='section-content-l'>Khối lượng cho phép chở</td>
                <td className='section-content-i'>max_load_capacity Kg</td>
              </tr>
              <tr>
                <td className='section-content-l'>Dung tích cốp xe</td>
                <td className='section-content-i'>trunk_capacity L</td>
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
                <td className='section-content-i'>engine_type</td>
              </tr>
              <tr>
                <td className='section-content-l'>Công suất danh định</td>
                <td className='section-content-i'>nominal_power W</td>
              </tr>
              <tr>
                <td className='section-content-l'>Công suất tối đa</td>
                <td className='section-content-i'>max_power W</td>
              </tr>
              <tr>
                <td className='section-content-l'>Tốc độ tối đa</td>
                <td className='section-content-i'>max_speed km/h</td>
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
                <td className='section-content-i'>battery_type</td>
              </tr>
              <tr>
                <td className='section-content-l'>Dung lượng ắc quyc</td>
                <td className='section-content-i'>battery_capacity</td>
              </tr>
              <tr>
                <td className='section-content-l'>Độ dài quãng đường</td>
                <td className='section-content-i'>range</td>
              </tr>
              <tr>
                <td className='section-content-l'>Trọng lượng/ Kích thước PIN/ẮC QUY</td>
                <td className='section-content-i'>battery_weight_size</td>
              </tr>
              <tr>
                <td className='section-content-l'>Thời gian sạc</td>
                <td className='section-content-i'>charging_time</td>
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
                <td className='section-content-i'>rim_type</td>
              </tr>
              <tr>
                <td className='section-content-l'>Đường kính vành trước/sau</td>
                <td className='section-content-i'>rim_diameter</td>
              </tr>
              <tr>
                <td className='section-content-l'>Hệ thống phanh</td>
                <td className='section-content-i'>brake_system</td>
              </tr>
              <tr>
                <td className='section-content-l'>Loại lốp</td>
                <td className='section-content-i'>tire_type</td>
              </tr>
              <tr>
                <td className='section-content-l'>Thông số lốp (trước/sau)</td>
                <td className='section-content-i'>tire_spec</td>
              </tr>
              <tr>
                <td className='section-content-l'>Hệ thống đèn</td>
                <td className='section-content-i'>lighting_system</td>
              </tr>
              <tr>
                <td className='section-content-l'>Chế độ lái</td>
                <td className='section-content-i'>driving_mode</td>
              </tr>
              <tr>
                <td className='section-content-l'>Cách khởi động xe</td>
                <td className='section-content-i'>start_method</td>
              </tr>
              <tr>
                <td className='section-content-l'>Tính Năng</td>
                <td className='section-content-i'>features</td>
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
        <Title className='reviewarticle-titile' level={3}>main_title</Title>
        <Paragraph className='reviewarticle-title-Paragraph'>
          <h3 href="#">title_1</h3> 
          content_1
        </Paragraph>

        <Space className='image-reviewarticle'>
          <ImageComponent
          src={image_1}
          alt="Xe máy điện Yadea U Like Trắng"
          className="image-reviewarticle-i"
          preview={preview}
          />
        </Space>
        

        <Paragraph className='reviewarticle-title-Paragraph'>
          <h3 href="#">title_2</h3> 
          content_2
        </Paragraph>

        <Space className='image-reviewarticle'>
          <ImageComponent
          src={image_2}
          alt="Xe máy điện Yadea U Like Trắng"
          className="image-reviewarticle-i"
          preview={preview}
          />
        </Space>

        <Paragraph className='reviewarticle-title-Paragraph'>
          <h3 href="#">title_3</h3> 
          content_3
        </Paragraph>

        <Space className='image-reviewarticle'>
          <ImageComponent
          src={image_3}
          alt="Xe máy điện Yadea U Like Trắng"
          className="image-reviewarticle-i"
          preview={preview}
          />
        </Space>

        <Paragraph className='reviewarticle-title-Paragraph'>
        conclusion_content	
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
          <h1 className="title--h1">product_name</h1>
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
                  style={{ backgroundColor: 'color_1' }}
                  value="img1"
                />
              </Space>

              <Space>
                <Radio.Button
                  className="all--color-ii"
                  style={{ backgroundColor: 'color_2' }}
                  value="img2"
                />
              </Space>

              <Space>
                <Radio.Button
                  className="all--color-ii"
                  style={{ backgroundColor: 'color_3' }}
                  value="img3"
                />
              </Space>

              <Space>
                <Radio.Button
                  className="all--color-ii"
                  style={{ backgroundColor: 'color_4' }}
                  value="img4"
                />
              </Space>
            </Radio.Group>

            {/* Hiển thị tên màu đã chọn */}
            <Space className="title--color">{selectedColorName}</Space>
          </Space>
          <Space classname="remainingquantity">
              <h3 classname="remainingquantity-1">Số lượng còn:</h3>
              <h3 classname="remainingquantity-2">product_quantity</h3>
          </Space>
        </Space>
        
        {/* Tổng số tiền thanh toán */}
        <Space className="total-payment-amount">
          <Space className="payment-price-title">
            <h3 className="payment-price-title-i">Số tiền thanh toán</h3>
          </Space>
          <Space className="amount">
            <h3 className="amount-i">(product_price-discount_percentage%) * Số lượng mua</h3>
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
            <h3 className="custom-title-price-2">product_price VNĐ</h3>
        </Space>
        {/* Hiển thị phần trăm giảm giá */}
        <Space className="custom-title-discount-percent">
          <h4 className="custom-title-discount-percent-1">Giảm:</h4>
          <h4 className="custom-title-discount-percent-2">	discount_percentage	%</h4>
        </Space>
        <Space className="custom-title-price">
            <h3 className="custom-title-price-1">Giá khuyến mãi:</h3>
            <h3 className="custom-title-price-2">(product_price-discount_percentage%) VNĐ</h3>
        </Space>
        <Space className="custom-purchased">
            <h3 className="custom-purchased-1">Số lượng mua</h3>
            <h3 className="custom-purchased-2">1</h3>  {/* Cho phép tăng giảm */}
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