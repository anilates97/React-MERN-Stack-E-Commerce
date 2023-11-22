import { Button, Form, Input, InputNumber, Spin, message } from "antd";
import { useState } from "react";

function CreateCouponPage() {
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Kupon başarıyla oluşturuldu");
        form.resetFields();
      } else message.error("Kupon oluştururken bir hata oluştu");
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Coupon Code"
          name="code"
          rules={[
            {
              required: true,
              message: "Lütfen bir kupon kodu girin",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Discount"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: "Lütfen indirim oranını girin",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </Spin>
  );
}

export default CreateCouponPage;
