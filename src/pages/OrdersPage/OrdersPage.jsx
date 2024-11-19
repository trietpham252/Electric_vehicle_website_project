import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Typography, Space, Divider, Row, Col, Card } from 'antd';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import xemaydien1_xanhtruc from '../../assets/Images/xemaydien1_xanhtruc.png';
import './Style.scss'; // Import file SCSS

const { Title, Text } = Typography;
const { Option } = Select;

const OrderPage = () => {
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
    <Space className='form-order'>
      <Row gutter={24} className="customer-form-layout">
        {/* Form nhập thông tin khách hàng */}
        <Col xs={24} lg={16}>
          <Space direction="vertical" className="customer-form-container">
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

            <Title level={3} className="section-title">Thông tin khách hàng</Title>
            <Form
              form={form}  // Gán form này với đối tượng form đã tạo
              layout="vertical"
              onFinish={onFinish}  // Gọi hàm onFinish khi form submit
              initialValues={{ agreement: false }}
              className="customer-form"
            >
              <div className="customer-info">
                <Form.Item
                  name="fullName"
                  label="Họ và tên"
                  rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}

                >
                  <Input placeholder="Nhập họ và tên" />
                </Form.Item>

                <Form.Item
                  name="idCard"
                  label="CMND / CCCD"
                  rules={[{ required: true, message: 'Vui lòng nhập CMND / CCCD' }]}

                >
                  <Input placeholder="Nhập CMND / CCCD" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}

                >
                  <Input placeholder="Nhập số điện thoại" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Địa chỉ email"
                  rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email' }, { type: 'email', message: 'Địa chỉ email không hợp lệ' }]}

                >
                  <Input placeholder="Nhập địa chỉ email" />
                </Form.Item>
              </div>

              <Divider className="form-divider" />

              <Title level={3} className="section-title">Showroom nhận xe</Title>
              <div className="showroom-info">
                <Form.Item
                  name="province"
                  label="Chọn Tỉnh / Thành Phố"
                  rules={[{ required: true, message: 'Vui lòng chọn Tỉnh / Thành Phố' }]}

                >
                  <Select placeholder="Chọn Tỉnh / Thành Phố">
                    <Option value="hcm">Hồ Chí Minh</Option>
                    <Option value="hn">Hà Nội</Option>
                    <Option value="dn">Đà Nẵng</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="district"
                  label="Chọn Quận / Huyện"
                  rules={[{ required: true, message: 'Vui lòng chọn Quận / Huyện' }]}

                >
                  <Select placeholder="Chọn Quận / Huyện">
                    <Option value="quan1">Quận 1</Option>
                    <Option value="quan2">Quận 2</Option>
                    <Option value="quan3">Quận 3</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="showroom"
                  label="Chọn showroom"
                  rules={[{ required: true, message: 'Vui lòng chọn showroom' }]}

                >
                  <Select placeholder="Chọn showroom">
                    <Option value="showroom1">Showroom 1</Option>
                    <Option value="showroom2">Showroom 2</Option>
                    <Option value="showroom3">Showroom 3</Option>
                  </Select>
                </Form.Item>
              </div>

              <Divider className="form-divider" />

              <Title level={3} className="section-title">Thông tin bổ sung</Title>

              <Form.Item name="note" label="Ghi chú">

                <Input.TextArea rows={4} placeholder="Nhập ghi chú của bạn" />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Bạn phải đồng ý với các điều khoản')) }]}

              >
                <Checkbox>
                  Tôi đã đọc và đồng ý với <a href="#">điều khoản và điều kiện</a> của website
                </Checkbox>
              </Form.Item>
            </Form>
          </Space>
        </Col>

        {/* Thông tin đơn hàng */}
        <Col xs={24} lg={8}>
          <Card className="order-summary" bordered={false}>
            <Title level={4} className="order-title">Đơn hàng của bạn</Title>
            <div className="order-item">
              <ImageComponent src={xemaydien1_xanhtruc} alt="Yadea Orla 2024" className="product-image" />
              <div className="product-info">
                <Text className="product-name">YADEA ORLA 2024</Text><br />
                <Text className="product-color">Màu: Xanh trúc</Text><br />
                <Text className="product-quantity">Số lượng: 1</Text>
              </div>
            </div>
            <Divider />
            <div className="order-total">
              <Text className="total-label">Tổng</Text>
              <Text className="total-amount">20,490,000 VND</Text>
            </div>
            <Button type="primary" onClick={() => form.submit()} className="order-button">Đặt hàng</Button>
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default OrderPage;
