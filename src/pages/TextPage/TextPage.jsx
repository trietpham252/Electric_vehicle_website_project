import React, { useState, useEffect } from 'react';
import { Radio, Space, Tabs, Typography, Spin, Alert } from 'antd';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import axios from 'axios';
import './Style.scss';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const ProductdetailsPage = ({ productId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('1'); // Tab mặc định hiển thị Thông số kỹ thuật

  // Lấy dữ liệu sản phẩm từ API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/productdetails/${productId}`);
        setProductData(response.data.data);
        setSelectedImage(response.data.data.imagesAndColors[0]?.image_url); // Hình ảnh mặc định
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const renderImage = () => {
    if (!selectedImage) return null;
    return (
      <ImageComponent
        src={selectedImage}
        preview={false}
        alt="Product Image"
        className="img--big"
      />
    );
  };

  const renderSpecs = () => {
    const { dimensionsAndWeight, engine, battery, otherSpecs } = productData;

    return (
      <Space className="product-details" direction="vertical" size="large">
        {dimensionsAndWeight && (
          <div className="details-section">
            <table className="details-table">
              <thead>
                <tr>
                  <th>KÍCH THƯỚC, TRỌNG LƯỢNG</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dài x rộng x cao (mm)</td>
                  <td>{dimensionsAndWeight.dimensions}</td>
                </tr>
                <tr>
                  <td>Màn hình</td>
                  <td>{dimensionsAndWeight.screen}</td>
                </tr>
                <tr>
                  <td>Khoảng sáng xe</td>
                  <td>{dimensionsAndWeight.ground_clearance}</td>
                </tr>
                <tr>
                  <td>Chiều cao yên</td>
                  <td>{dimensionsAndWeight.seat_height}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {engine && (
          <div className="details-section">
            <table className="details-table">
              <thead>
                <tr>
                  <th>ĐỘNG CƠ</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loại động cơ</td>
                  <td>{engine.engine_type}</td>
                </tr>
                <tr>
                  <td>Công suất danh định</td>
                  <td>{engine.nominal_power} W</td>
                </tr>
                <tr>
                  <td>Công suất tối đa</td>
                  <td>{engine.max_power} W</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {battery && (
          <div className="details-section">
            <table className="details-table">
              <thead>
                <tr>
                  <th>ẮC QUY</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loại ắc quy</td>
                  <td>{battery.battery_type}</td>
                </tr>
                <tr>
                  <td>Dung lượng</td>
                  <td>{battery.battery_capacity}</td>
                </tr>
                <tr>
                  <td>Độ dài quãng đường</td>
                  <td>{battery.range}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {otherSpecs && (
          <div className="details-section">
            <table className="details-table">
              <thead>
                <tr>
                  <th>THÔNG SỐ KHÁC</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loại vành</td>
                  <td>{otherSpecs.rim_type}</td>
                </tr>
                <tr>
                  <td>Hệ thống phanh</td>
                  <td>{otherSpecs.brake_system}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </Space>
    );
  };

  const renderReviews = () => {
    const { reviewArticles } = productData;

    if (!reviewArticles || !reviewArticles.length) return null;

    return (
      <Space direction="vertical" size="large" className="review-article">
        {reviewArticles.map((review, index) => (
          <div key={index} className="review-item">
            <Title level={4}>{review.title}</Title>
            <Paragraph>{review.content}</Paragraph>
            {review.image_url && (
              <ImageComponent
                src={review.image_url}
                alt="Review Image"
                className="review-image"
                preview={false}
              />
            )}
          </div>
        ))}
      </Space>
    );
  };

  if (loading) {
    return <Spin size="large" tip="Loading product details..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <Space className="all--details" direction="vertical" size="large">
      <Space className="details--img" direction="vertical">
        <Space className="all--img-big">{renderImage()}</Space>
        <Space className="all--img-small">
          <Radio.Group
            className="all--img-small-i"
            onChange={(e) => setSelectedImage(e.target.value)}
            value={selectedImage}
          >
            {productData.imagesAndColors.map((item, index) => (
              <Radio.Button key={index} value={item.image_url}>
                <ImageComponent
                  src={item.image_url}
                  alt={item.color_name}
                  className="img--small"
                  preview={false}
                />
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
      </Space>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Thông số kỹ thuật" key="1">
          {renderSpecs()}
        </TabPane>
        <TabPane tab="Bài viết đánh giá" key="2">
          {renderReviews()}
        </TabPane>
      </Tabs>
    </Space>
  );
};

export default ProductdetailsPage;
