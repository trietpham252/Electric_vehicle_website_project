import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Button, Spin, Alert } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import './Style.scss';

const { Title, Paragraph } = Typography;

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // State loading
  const itemsPerPage = 12;

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/api/news');
      setNewsList(response.data.newsList || []);
    } catch (error) {
      setError('Lỗi khi tải dữ liệu tin tức');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    fetchNews();
  }, [fetchNews]);

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="news-page">
      <Title level={3} data-aos="fade-up">Tin Tức</Title>
      
      {loading ? (
        <div className="loading-spinner"><Spin size="large" /></div>
      ) : error ? (
        <Alert message={error} type="error" showIcon />
      ) : currentNews.length > 0 ? (
        currentNews.map((news) => (
          <div key={news.news_id} className="news-item" data-aos="fade-up">
            <div className="news-image">
              {news.news_image && (
                <ImageComponent
                  src={news.news_image}
                  alt={news.news_title}
                  width={600}
                  preview={false}
                />
              )}
            </div>
            <div className="news-content">
              <h3>{news.news_title}</h3>
              <Paragraph>{news.news_content}</Paragraph>
              <Button type="primary">XEM THÊM</Button>
            </div>
          </div>
        ))
      ) : (
        <p>Không có tin tức nào để hiển thị.</p>
      )}

      <div className="pagination">
        <Button 
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} 
          disabled={currentPage === 1}
          icon={<LeftOutlined />}
        />
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
