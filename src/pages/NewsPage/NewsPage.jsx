import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Import biểu tượng mũi tên
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import './Style.scss';

const { Title, Paragraph } = Typography;

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]); // Danh sách tin tức
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 12; // Số lượng tin tức trên mỗi trang

  // Hàm lấy tất cả tin tức từ API
  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/news');
      setNewsList(response.data.newsList || []); // Đảm bảo lấy đúng 'newsList' từ API
    } catch (error) {
      setError('Lỗi khi tải dữ liệu tin tức');
      console.error(error);
    }
  };

  useEffect(() => {
    // Khởi tạo AOS để có hiệu ứng cuộn
    AOS.init({
      duration: 2000,
      once: true,
    });

    // Gọi API lấy tin tức
    fetchNews();
  }, []);

  // Tính toán các tin tức cần hiển thị trên trang hiện tại
  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews);

  // Tính toán số lượng trang
  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  // Hàm để xử lý thay đổi trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="news-page">
      <Title level={3} data-aos="fade-up">Tin Tức</Title>
      
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        currentNews.length > 0 ? (
          currentNews.map((news) => (
            <div
              key={news.news_id}
              className="news-item"
              data-aos="fade-up"
            >
              <div className="news-image">
                {news.news_image && (
                  <ImageComponent
                    src={news.news_image}
                    alt={news.news_title}
                    width={600} // Thay đổi kích thước hình ảnh nếu cần
                    preview={false} // Tắt chế độ preview
                  />
                )}
              </div>
              <div className="news-content">
                <h3 style={{ color: '#1890ff' }}>{news.news_title}</h3>
                <Paragraph style={{ whiteSpace: 'pre-line' }}>{news.news_content}</Paragraph>
                <Button type="primary">XEM THÊM</Button>
              </div>
            </div>
          ))
        ) : (
          <p>Không có tin tức nào để hiển thị.</p> // Hiển thị khi danh sách tin tức trống
        )
      )}

      {/* Phân trang với mũi tên */}
      <div className="pagination">
        <Button 
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} 
          disabled={currentPage === 1}
          icon={<LeftOutlined />}
        />
        
        {/* Hiển thị các số trang */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1} 
            type={currentPage === index + 1 ? 'primary' : 'default'}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}

        <Button 
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} 
          disabled={currentPage === totalPages}
          icon={<RightOutlined />}
        />
      </div>
    </div>
  );
};

export default NewsPage;
