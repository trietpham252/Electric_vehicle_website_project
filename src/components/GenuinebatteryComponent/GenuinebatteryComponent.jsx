import React, { useEffect, useState } from 'react';
import { Space, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Import các icon mũi tên
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom'; // Để sử dụng Link cho điều hướng
import './Style.scss';

const GenuinebatteryComponent = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6); // Mỗi trang sẽ hiển thị 6 sản phẩm

  const preview = false;

  // Dữ liệu mặc định với sản phẩm là Ắc quy
  const defaultProducts = [
    {
      id: 1, 
      name: 'Ắc quy Thiên Năng chịu nhiệt 60V – 27Ah',
      originalPrice: 1200000, // Giá gốc
      discountPercent: 5, // Phần trăm giảm
      image: 'https://xedienvietthanh.com/wp-content/uploads/2024/10/ac-quy-thien-nang-tne-60v-27ah.jpg',
      link: '/productdetails',
    },
    {
      id: 2, 
      name: 'Ắc quy Thiên Năng chịu nhiệt 60V – 25Ah',
      originalPrice: 5000000,
      discountPercent: 10,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2024/04/ac-quy-xe-may-dien-thien-nang-60v25ah-chiu-nhiet.jpg',
      link: '/productdetails',
    },
    {
      id: 3, 
      name: 'Ắc quy TIANNENG (Thiên Năng) 48V-12 Ah',
      originalPrice: 800000,
      discountPercent: 15,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2024/03/ac-quy-thien-nang-tne-12-15-48v.jpg',
      link: '/productdetails',
    },
    {
      id: 4, 
      name: 'ẮC QUY TIANNENG (THIÊN NĂNG) TNE 60V-20AH',
      originalPrice: 1500000,
      discountPercent: 5,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2021/08/ac-quy-thien-nang-tne-60v-20ah.jpg',
      link: '/productdetails',
    },
    {
      id: 5, 
      name: 'ẮC QUY XE MÁY ĐIỆN TIANNENG 48V – 20AH',
      originalPrice: 2200000,
      discountPercent: 20,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2020/07/ac-quy-thien-nang-tne-48v-20ah.jpg',
      link: '/productdetails',
    },
    {
      id: 6, 
      name: 'ẮC QUY XE ĐIỆN YADEA 60V – 22AH TTFAR',
      originalPrice: 950000,
      discountPercent: 8,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2023/04/ac-quy-yadea-60v-22ah-dai-dien.jpg',
      link: '/productdetails',
    },
    {
      id: 7, 
      name: 'Ắc quy TIANNENG (Thiên Năng) 48V-12 Ah',
      originalPrice: 800000,
      discountPercent: 15,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2024/03/ac-quy-thien-nang-tne-12-15-48v.jpg',
      link: '/productdetails',
    },
    {
      id: 8, 
      name: 'ẮC QUY TIANNENG (THIÊN NĂNG) TNE 60V-20AH',
      originalPrice: 1500000,
      discountPercent: 5,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2021/08/ac-quy-thien-nang-tne-60v-20ah.jpg',
      link: '/productdetails',
    },
  ];

  // Lưu dữ liệu mặc định vào localStorage nếu chưa có
  const saveDataToLocalStorage = () => {
    localStorage.setItem('batteries', JSON.stringify(defaultProducts));
  };

  // Lấy dữ liệu từ localStorage
  useEffect(() => {
    const storedProducts = localStorage.getItem('batteries');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      saveDataToLocalStorage();
      setProducts(defaultProducts);
    }
  }, []);

  // Hàm chuyển trang
  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1)); // Giới hạn không cho trang nhỏ hơn 1
  };

  const nextPage = () => {
    const totalPages = Math.ceil(products.length / pageSize);
    setCurrentPage(prev => Math.min(prev + 1, totalPages)); // Giới hạn không cho trang lớn hơn tổng số trang
  };

  // Tính toán giá khuyến mãi từ giá gốc và phần trăm giảm giá
  const calculateDiscountPrice = (originalPrice, discountPercent) => {
    return originalPrice - (originalPrice * discountPercent / 100);
  };

  // Tính toán sản phẩm hiển thị theo trang
  const currentProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <Space direction="vertical" className="custom-card">
      <h1 className="custom-tt">ẮC QUY</h1>
      <Space className="custom-card-wrapper">
        {currentProducts.map((product) => {
          const discountPrice = calculateDiscountPrice(product.originalPrice, product.discountPercent);
          return (
            <Space key={product.id} className="custom-card-item" direction="vertical">
              {/* Cụm 1: Nút với nhãn sản phẩm */}
              <Space className="custom-card-header">
                <Space className="custom-card-button">{product.label}</Space>
              </Space>

              {/* Cụm 2: Hình ảnh */}
              <ImageComponent
                className="custom-card-img"
                alt="Ảnh ắc quy"
                src={product.image} // Sử dụng hình ảnh từ state
                preview={preview}
                to={product.link}
              />

              {/* Cụm 3: Thông tin sản phẩm */}
              <Space direction="vertical" className="custom-card-body">
                <Space className="custom-card-title">
                  <h2>{product.name}</h2>
                </Space>
                <Space className="custom-card-price">
                  <Space className="custom-price-label">
                    <h3>Giá gốc:</h3>
                  </Space>
                  <Space className="custom-price-value">
                    <h3>{product.originalPrice.toLocaleString()} VNĐ</h3>
                  </Space>
                  {/* Hiển thị phần trăm giảm giá */}
                  {product.discountPercent > 0 && (
                    <Space className="custom-discount-percent">
                      <h4>Giảm {product.discountPercent}%</h4>
                    </Space>
                  )}
                </Space>
                <Space className="custom-card-price">
                  <Space className="custom-price-label">
                    <h3>Giá khuyến mãi:</h3>
                  </Space>
                  <Space className="custom-price-value">
                    <h3>{discountPrice.toLocaleString()} VNĐ</h3>
                  </Space>
                </Space>
                <Space className="custom-card-btn-wrapper">
                  <ButtonComponent
                    className="custom-card-btn"
                    type="primary"
                    to={`/productdetails/${product.id}`} // Sử dụng ID trong URL
                    buttonText="Xem chi tiết sản phẩm"
                  />
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
          disabled={currentPage === Math.ceil(products.length / pageSize)} 
          icon={<RightOutlined />} // Icon mũi tên phải
          aria-label="Trang tiếp"
        />
      </Space>
    </Space>
  );
};

export default GenuinebatteryComponent;
