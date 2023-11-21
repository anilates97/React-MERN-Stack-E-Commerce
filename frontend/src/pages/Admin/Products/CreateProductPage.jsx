import { Button, Form, Input, InputNumber, Select, Spin, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateProductPage() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else message.error("Veri getirme işlemi başarısız");
      } catch (err) {
        console.log("Veri hatası:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [apiUrl]);

  const onFinish = async (values) => {
    const imgLinks = values.img.split("\n").map((link) => link.trim());

    const colors = values.colors.split("\n").map((link) => link.trim());

    const sizes = values.sizes.split("\n").map((link) => link.trim());

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          price: {
            current: values.current,
            discount: values.discount,
          },
          colors,
          sizes,
          img: imgLinks,
        }),
      });

      if (response.ok) {
        message.success("Ürün başarıyla oluşturuldu");
        form.resetFields();
      } else message.error("Ürün oluştururken bir hata oluştu");
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
          label="Product name"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen ürün adını girin",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Categories"
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen bir kategori girin",
            },
          ]}
        >
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="current"
          rules={[
            {
              required: true,
              message: "Lütfen ürün fiyatını girin",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Product Discount"
          name="discount"
          rules={[
            {
              required: false,
              message: "Lütfen ürün indirim oranını girin",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            {
              message: "Lütfen bir ürün açıklaması girin",
            },
          ]}
        >
          <ReactQuill theme="snow" style={{ backgroundColor: "white" }} />
        </Form.Item>

        <Form.Item
          label="Product Images"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen en az 4 ürün görsel linki girin",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir görsel linkini yeni bir satıra yazın"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Product Colors (RGB Code)"
          name="colors"
          rules={[
            {
              required: true,
              message: "Lütfen en az 1 ürün rengi girin",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir RGB kodunu yeni bir satıra yazın"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Product Sizes"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Lütfen en az 1 ürün beden ölçüsü girin",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir beden ölçüsünü yeni bir satıra yazın"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </Spin>
  );
}

export default CreateProductPage;
