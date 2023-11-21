import { Table } from "antd";
import { useCallback, useEffect, useState } from "react";

const columns = [
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
];

function AdminUserPage() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      }
    } catch (err) {
      console.log("Giriş hatası:", err);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

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
