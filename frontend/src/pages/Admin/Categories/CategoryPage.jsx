import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoryPage() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Category Image",
      dataIndex: "img",
      key: "img",
      render: (imgSrc) => {
        return (
          <img src={imgSrc} alt="category img" style={{ width: "100px" }} />
        );
      },
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <b>{text}</b>,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => navigate(`/admin/categories/update/${record._id}`)}
            >
              Edit
            </Button>

            <Popconfirm
              title="Kategori Sil"
              description="Kullanıcıyı silmek istediğinizden emin misiniz?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => deleteCategory(record._id)}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const fetchCategory = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/categories`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else message.error("Veri getirme işlemi başarısız");
    } catch (err) {
      console.log("Veri hatası:", err);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Kategori başarıyla silindi");
        fetchCategory();
      } else message.error("Silme işlemi başarısız");
    } catch (err) {
      console.log("Silme hatası:", err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
}

export default CategoryPage;
