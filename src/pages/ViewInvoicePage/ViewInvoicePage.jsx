import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Typography, Space, Divider, Row, Col, Card } from 'antd';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import './Style.scss';

const { Title, Text } = Typography;
const { Option } = Select;

const ViewInvoicePage = () => {

    const [orderSummary] = useState({
        productName: 'YADEA ORLA 2024',
        productColor: 'Xanh trúc',
        quantity: 1,
        totalAmount: 20490000,
      });
    
      const [form] = Form.useForm();  // Tạo form với hook useForm
    
      // Hàm xử lý khi form được submit
      const onFinish = (values) => {
        // Lưu thông tin đơn hàng vào localStorage
        const orderData = {
          ...values,
          orderTime: new Date().toISOString(), // Lưu thời gian đặt hàng
          orderSummary: orderSummary, // Thông tin đơn hàng
        };
        localStorage.setItem('order', JSON.stringify(orderData)); // Lưu vào localStorage
        console.log('Order saved to LocalStorage:', orderData);
    
        // Gửi thông tin đơn hàng qua email
        sendOrderEmail(orderData);
      };
    
      // Mô phỏng gửi email
      const sendOrderEmail = (orderData) => {
        // Mô phỏng gửi email. Thực tế bạn sẽ cần tích hợp với dịch vụ gửi email như EmailJS hoặc backend để gửi email thực sự.
        console.log('Sending order details to email...', orderData);
      };
    
      const applyDiscount = (values) => {
        console.log('Discount code applied:', values.discountCode);
      };
    

  return (
    <Space className='all-product-details'>
        <Space className='product-details'>
            <Space>
            <Col xs={24} lg={16}>
            <Space direction="vertical" className="customer-form-container">
  
              <Title level={3} className="section-title">Thông tin khách hàng</Title>

                    {/* Mã ưu đãi */}
              <Text className="promo-code-text">
              Bạn có mã ưu đãi? <a href="#">Ấn vào đây để nhập mã</a>
            </Text>

            {/* Form nhập mã giảm giá */}
            <Form layout="inline" onFinish={applyDiscount} className="discount-code-form">
              <Form.Item
                name="discountCode"
                label="Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới."
                className="discount-code-label"
              >
                <Input placeholder="Mã ưu đãi" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="apply-button">
                  Áp dụng
                </Button>
              </Form.Item>
            </Form>

             {/* hhhh*/} 
            </Space>
          </Col>
            </Space>
        </Space>
    </Space>
  )
}

export default ViewInvoicePage