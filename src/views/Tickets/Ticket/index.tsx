import { Card } from "antd";
import { useEffect, useState } from "react";
import { Post } from "../TicketList/interfaces";

const Ticket = (props: any) => {
  const [ticketData, setTicketData] = useState<Post | undefined>();

  useEffect(() => {
    const id = props.match.params?.id;
    const data = JSON.parse(localStorage.getItem("db") || "{}");
    if (data.length) {
      const findTicket = data.find((el: Post) => el.id === +id);
      setTicketData(findTicket);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(ticketData);

  return (
    <section>
      <Card title={ticketData?.title}>
        <p>
          وضعیت: <strong>{ticketData?.status}</strong>
        </p>
        <p>{ticketData?.message}</p>
      </Card>
    </section>
  );
};

export default Ticket;
