import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CouponPage() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Coupon Code",
      dataIndex: "code",
      key: "code",
      render: (code) => {
        return <b>{code}</b>;
      },
    },

    {
      title: "Discount",
      dataIndex: "discountPercent",
      key: "discountPercent",
      render: (discount) => <span>%{discount}</span>,
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
              onClick={() => navigate(`/admin/coupons/update/${record._id}`)}
            >
              Edit
            </Button>

            <Popconfirm
              title="Kategori Sil"
              description="Kategoriyi silmek istediğinizden emin misiniz?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => deleteCoupon(record._id)}
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

  const fetchCoupons = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`);

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

  const deleteCoupon = async (couponId) => {
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Kupon başarıyla silindi");
        fetchCoupons();
      } else message.error("Silme işlemi başarısız");
    } catch (err) {
      console.log("Silme hatası:", err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
}

export default CouponPage;
