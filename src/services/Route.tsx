import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

import { Spin } from "antd";
import PublicLayout from "layout/PublicLayout";

interface ComponentProps {
  component: React.FC;
}

const DefaultLayout: FC<RouteProps & ComponentProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <PublicLayout>
      <React.Suspense fallback={<Spin size="large" />}>
        <Component {...rest} />
      </React.Suspense>
    </PublicLayout>
  );
};

const PublicRoute: FC<RouteProps & ComponentProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => <DefaultLayout {...props} component={Component} />}
    />
  );
};

export { PublicRoute };
