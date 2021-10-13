import { useEffect, useState } from "react";
import { Button, Card, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { Post } from "./interfaces";

const columns = [
  {
    title: "شناسه",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
  },
  {
    title: "تاریخ ثبت",
    dataIndex: "received",
    key: "received",
    sorter: {
      compare: (a: any, b: any) =>
        new Date(a.received)?.getTime() - new Date(b.received)?.getTime(),
    },
  },
  {
    title: "عنوان",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "پیام",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "وضعیت",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "عملیات",
    key: "action",
    render: (el: Post) => (
      <Space size="middle">
        <Button type="primary">
          <Link to={`ticket/${el.id}`}>مشاهده</Link>
        </Button>
      </Space>
    ),
  },
];

const TicketList = () => {
  const [ticketData, setTicketData] = useState();

  useEffect(() => {
    const db = JSON.parse(localStorage.getItem("db") || "{}");
    if (db?.length) {
      setTicketData(db);
    }
  }, []);

  return (
    <Card title="لیست تیکت ها" bordered>
      <Table key="id" columns={columns} dataSource={ticketData} />
    </Card>
  );
};

export default TicketList;
