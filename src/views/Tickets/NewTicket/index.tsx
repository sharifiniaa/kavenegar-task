import { useState } from "react";
import { Button, Card, Col, Input, Row, Form, notification } from "antd";
import { FormData } from "./interfaces";
import dayjs from "dayjs";
import { Post } from "../TicketList/interfaces";
import { WEB } from "constant/web";
import { useHistory } from "react-router";

const NewTicket = () => {
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const handleSubmitForm = (values: FormData) => {
    setLoading(true);

    const db = JSON.parse(localStorage.getItem("db") || "{}");
    const post: Post = {
      status: "در حال انتظار",
      message: values.message,
      title: values.title,
      received: dayjs().format("YYYY-MM-DD hh:mm:ss"),
      id: db.length ? db[db.length - 1].id + 1 : 1,
    };

    if (db.length) {
      localStorage.setItem("db", JSON.stringify([...db, post]));
    } else {
      localStorage.setItem("db", JSON.stringify([post]));
    }

    setTimeout(() => {
      notification["success"]({
        message: "موفق",
        description: `تیکت جدید با عنوان ${values.title} با موفقیت ثبت شد`,
      });
      setLoading(false);
      history.push(WEB.root);
    }, 1000);
  };

  return (
    <Card title="ایجاد تیکت جدید">
      <Row justify="center">
        <Col span={11}>
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmitForm}
          >
            <Form.Item
              label="عنوان"
              name="title"
              rules={[{ required: true, message: "عنوان الزامی میباشد" }]}
            >
              <Input placeholder="عنوان خود را وارد نمایید" />
            </Form.Item>

            <Form.Item
              label="متن پیام"
              name="message"
              rules={[{ required: true, message: "متن پیام الزامی میباشد" }]}
            >
              <Input.TextArea
                placeholder="متن پیام خود را وارد نمایید"
                style={{ width: "100%" }}
                rows={5}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10 }}>
              <Button
                type="primary"
                loading={loading}
                disabled={loading}
                htmlType="submit"
              >
                ثبت درخواست
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default NewTicket;
