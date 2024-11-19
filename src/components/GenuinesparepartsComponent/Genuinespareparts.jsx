import React, { useEffect, useState } from 'react';
import { Space, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Import các icon mũi tên
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import './Style.scss';

const GenuinesparepartsComponent = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6); // Mỗi trang sẽ hiển thị 6 sản phẩm

  const preview = false;

  // Dữ liệu mặc định với ID và phần trăm giảm giá
  const defaultProducts = [
    {
      id: 1, // Thêm ID cho mỗi sản phẩm
      name: 'BỘ KHÓA XE NIJIA',
      originalPrice: 21990000, // Giá gốc
      discountPercent: 5, // Phần trăm giảm
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/bo-khoa-xe-nijia.jpg',
      link: '/productdetails/1',
    },
    {
      id: 2, 
      name: 'TAY GA BA CHẾ ĐỘ',
      originalPrice: 22990000,
      discountPercent: 10,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/tay-ga-ba-che-do-xedienvietthanh.jpg',
      link: '/productdetails/2',
    },
    {
      id: 3, 
      name: 'TAY GA XE NIJIA',
      originalPrice: 20990000,
      discountPercent: 15,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/xe-dien-viet-thanh-linh-kien-gia-re-xe-tay-ga-nijia.jpg',
      link: '/productdetails/3',
    },
    {
      id: 4, 
      name: 'SẠC 48V – 20AH CAO CẤP',
      originalPrice: 18990000,
      discountPercent: 5,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/sac-xe-dien-48v-20ah.jpg',
      link: '/productdetails/4',
    },
    {
      id: 5, 
      name: 'SẠC XE VESPA ROMA',
      originalPrice: 23990000,
      discountPercent: 20,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/xe-dien-viet-thanh-linh-kien-gia-re-1-e1625279074277.png',
      link: '/productdetails/5',
    },
    {
      id: 6, 
      name: 'SẠC XE XMEN YADEA (bản mới)',
      originalPrice: 25990000,
      discountPercent: 8,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/sac-xe-xmen-yadea-chinh-hang.png',
      link: '/productdetails/6',
    },
    {
      id: 7, 
      name: 'TAY GA XE NIJIA',
      originalPrice: 20990000,
      discountPercent: 15,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/xe-dien-viet-thanh-linh-kien-gia-re-xe-tay-ga-nijia.jpg',
      link: '/productdetails/7',
    },
    {
      id: 8, 
      name: 'SẠC 48V – 20AH CAO CẤP',
      originalPrice: 18990000,
      discountPercent: 5,
      image: 'https://xedienvietthanh.com/wp-content/uploads/2019/10/sac-xe-dien-48v-20ah.jpg',
      link: '/productdetails/8',
    },
  ];

  // Lưu dữ liệu mặc định vào localStorage nếu chưa có
  const saveDataToLocalStorage = () => {
    localStorage.setItem('electricBikes', JSON.stringify(defaultProducts));
  };

  // Lấy dữ liệu từ localStorage
  useEffect(() => {
    const storedProducts = localStorage.getItem('electricBikes');
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
      <h1 className="custom-tt">PHỤ TÙNG</h1>
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
                alt="Ảnh xe"
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
                      <h4>Giảm: {product.discountPercent}%</h4>
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
                    href={product.link} // Sử dụng link với ID
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

export default GenuinesparepartsComponent;
