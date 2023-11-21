import { Button, Form, Input, Spin, message } from "antd";
import { useState } from "react";

function CreateCategoryPage() {
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Kategori başarıyla oluşturuldu");
        form.resetFields();
      } else message.error("Kategori oluştururken bir hata oluştu");
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
          label="Category name"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen kategori adını girin",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category Image"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen kategori görsel linkini girin",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </Spin>
  );
}

export default CreateCategoryPage;
