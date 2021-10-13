import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "services/Route";
import { Spin } from "antd";
import { WEB } from "constant/web";

// global styles
import "styles/global.scss";

// import pages
const TicketList = React.lazy(() => import("views/Tickets/TicketList/index"));
const Ticket = React.lazy(() => import("views/Tickets/Ticket/index"));
const NewTicket = React.lazy(() => import("views/Tickets/NewTicket/index"));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Spin size="large" />}>
        <Switch>
          <PublicRoute exact path={WEB.newTicket} component={NewTicket} />
          <PublicRoute exact path={WEB.ticket} component={Ticket} />
          <PublicRoute exact path={WEB.root} component={TicketList} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
