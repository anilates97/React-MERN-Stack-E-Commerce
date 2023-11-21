import { Button, Popconfirm, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";

function AdminUserPage() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => {
        return (
          <img
            src={imgSrc}
            alt="avatar"
            style={{ width: "50px", borderRadius: "50%", height: "50px" }}
          />
        );
      },
    },

    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Kullanıcıyı Sil"
            description="Kullanıcıyı silmek istediğinizden emin misiniz?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteUser(record.email)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`);

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

  const deleteUser = async (userEmail) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Kullanıcı başarıyla silindi");
        fetchUsers();
      } else message.error("Silme işlemi başarısız");
    } catch (err) {
      console.log("Silme hatası:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
}

export default AdminUserPage;
