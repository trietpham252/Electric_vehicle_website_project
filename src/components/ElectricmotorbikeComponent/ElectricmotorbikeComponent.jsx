import React, { useState, useEffect } from 'react';
import { Space, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';  
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import './Style.scss';

const ElectricmotobikeComponent = () => {
  const [products, setProducts] = useState([]); // Lưu trữ sản phẩm
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const productsPerPage = 4; // Số sản phẩm mỗi trang

  // Fetch products from API with parent_type_id=1
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products?parent_type_id=1'); // API của bạn
        const data = await response.json();
        setProducts(data); // Lưu trữ dữ liệu vào state products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Gọi hàm fetch khi component mount
  }, []);

  // Xác định các sản phẩm sẽ hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1); // Tăng trang lên 1
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Giảm trang xuống 1
    }
  };

  return (
    <Space direction='vertical' className='card'>
      <h1 className='tt'>XE MÁY ĐIỆN</h1>
      <Space className='card-card'>
        {currentProducts.map((product) => {
          const discountPrice = product.originalPrice 
            ? product.originalPrice * (1 - (product.discountPercent || 0) / 100) 
            : 0;

          // Tạo link chi tiết của sản phẩm sử dụng product.id
          const productDetailLink = `/productdetails/${product.id}`;

          return (
            <Space key={product.id} className='card-i' direction='vertical'>
              <Space className='card-c1'>
                {/* Hiển thị name_special_group thay vì name_special */}
                <Space className='card-bt'>
                  {product.name_special_group} {/* Hiển thị name_special_group */}
                </Space>
              </Space>

              <ImageComponent className='card-img' alt="Ảnh xe" src={product.product_image} preview={false} />

              <Space direction='vertical' className='card-c2'>
                <Space className='card-ii'>
                  <h2>{product.product_name}</h2> {/* Hiển thị name_special_group */}
                </Space>
                <Space className='card-ii-i'>
                  <Space className='item1'>
                    <h3>Giá gốc:</h3>
                  </Space>
                  <Space className='item2'>
                    <h3>{product.originalPrice ? product.originalPrice.toLocaleString() : 'Không xác định'} VNĐ</h3>
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
                    <h3>{discountPrice > 0 ? discountPrice.toLocaleString() : 'Không xác định'} VNĐ</h3>
                  </Space>
                </Space>
                <Space className="card-button">
                  <Link to={productDetailLink}>
                    <ButtonComponent className="card-button-i" type="primary" buttonText="Xem chi tiết sản phẩm" />
                  </Link>
                </Space>
              </Space>
            </Space>
          );
        })}
      </Space>

      <Space className="pagination">
        <Button 
          onClick={prevPage} 
          disabled={currentPage === 1} 
          icon={<LeftOutlined />} 
        />
        <Button 
          onClick={nextPage} 
          disabled={currentPage === Math.ceil(products.length / productsPerPage)} 
          icon={<RightOutlined />} 
        />
      </Space>
    </Space>
  );
};

export default ElectricmotobikeComponent;
