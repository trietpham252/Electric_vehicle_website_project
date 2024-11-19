import React, { useState } from 'react';
import { Space, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';  // Import icon mũi tên
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import './Style.scss';

const ElectricbicycleComponent = () => {
    const preview = false;
  
    // Dữ liệu sản phẩm với id, label, discountPercent
    const products = [
      { 
        id: 1, 
        name: 'YADEA iFUN', 
        originalPrice: 21990000, 
        discountPercent: 5,  // Phần trăm giảm
        image: 'https://www.yadea.com.vn/wp-content/uploads/2024/08/YADEA-iFUN-anh-chinh-480x389.webp', 
        label: 'Hot'
      },
      { 
        id: 2, 
        name: 'YADEA i8', 
        originalPrice: 22990000, 
        discountPercent: 10,  // Phần trăm giảm
        image: 'https://www.yadea.com.vn/wp-content/uploads/2023/11/i8-anh-dai-dien-480x361.png', 
        label: 'Mới'
      },
      { 
        id: 3, 
        name: 'YADEA I6', 
        originalPrice: 23990000, 
        discountPercent: 15,  // Phần trăm giảm
        image: 'https://www.yadea.com.vn/wp-content/uploads/2023/09/product-i6-pin-lithium-480x389.png', 
        label: 'Bán chạy'
      },
      { 
        id: 4, 
        name: 'YADEA IGO', 
        originalPrice: 24990000, 
        discountPercent: 7,  // Phần trăm giảm
        image: 'https://www.yadea.com.vn/wp-content/uploads/2023/11/igo-pink-1-480x389.png', 
        label: 'Hot'
      },
      { 
        id: 5, 
        name: 'YADEA i8', 
        originalPrice: 22990000, 
        discountPercent: 10,  // Phần trăm giảm
        image: 'https://www.yadea.com.vn/wp-content/uploads/2023/11/i8-anh-dai-dien-480x361.png', 
        label: 'Mới'
      },
      { 
        id: 6, 
        name: 'YADEA iFUN', 
        originalPrice: 21990000, 
        discountPercent: 5,  // Phần trăm giảm
        image: 'https://www.yadea.com.vn/wp-content/uploads/2024/08/YADEA-iFUN-anh-chinh-480x389.webp', 
        label: 'Hot'
      },
    ];
  
    // State quản lý trang
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
  
    // Xác định các sản phẩm hiển thị cho trang hiện tại
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Chuyển đến trang tiếp theo
    const nextPage = () => {
      if (currentPage < Math.ceil(products.length / productsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    // Chuyển về trang trước đó
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    return (
      <Space direction='vertical' className='card'>
        <h1 className='tt'>XE ĐẠP ĐIỆN</h1>
        <Space className='card-card'>
          {currentProducts.map((product) => {
            // Tính giá khuyến mãi
            const discountPrice = product.originalPrice * (1 - product.discountPercent / 100);
  
            return (
              <Space key={product.id} className='card-i' direction='vertical'>
                {/* Cụm 1 */}
                <Space className='card-c1'>
                  <Space className='card-bt'>
                    {product.label}  {/* Hiển thị giá trị của thuộc tính label */}
                  </Space>
                </Space>
  
                {/* Cụm 2 */}
                <ImageComponent className='card-img' alt="Ảnh xe" src={product.image} preview={preview} />
  
                {/* Cụm 3 */}
                <Space direction='vertical' className='card-c2'>
                  <Space className='card-ii'>
                    <h2>{product.name}</h2>
                  </Space>
                  <Space className='card-ii-i'>
                    <Space className='item1'>
                      <h3>Giá gốc:</h3>
                    </Space>
                    <Space className='item2'>
                      <h3>{product.originalPrice.toLocaleString()} VNĐ</h3> {/* Hiển thị giá gốc */}
                    </Space>
                    {/* Hiển thị phần trăm giảm giá */}
                    {product.discountPercent > 0 && (
                      <Space className="custom-discount-percent">
                        <h4>Giảm: {product.discountPercent}%</h4>
                      </Space>
                    )}
                  </Space>
                  <Space className='card-ii-i'>
                    <Space className='item1'>
                      <h3>Giá khuyến mãi:</h3>
                    </Space>
                    <Space className='item2'>
                      <h3>{discountPrice.toLocaleString()} VNĐ</h3> {/* Hiển thị giá khuyến mãi */}
                    </Space>
                  </Space>
                  <Space className="card-button">
                    <ButtonComponent className="card-button-i" type="primary" to={`/productdetails/${product.id}`} buttonText="Xem chi tiết sản phẩm" />
                  </Space>
                </Space>
              </Space>
            );
          })}
        </Space>
  
        {/* Phân trang với mũi tên */}
        <Space className="pagination">
          <Button 
            onClick={prevPage} 
            disabled={currentPage === 1} 
            icon={<LeftOutlined />} // Icon mũi tên trái
            aria-label="Trang trước"
          />
          <Button 
            onClick={nextPage} 
            disabled={currentPage === Math.ceil(products.length / productsPerPage)} 
            icon={<RightOutlined />} // Icon mũi tên phải
            aria-label="Trang tiếp"
          />
        </Space>
      </Space>
    );
  };
  
  export default ElectricbicycleComponent;
