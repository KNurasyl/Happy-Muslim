import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { WorkSpace } from "./components/WorkSpace";

export const App = () => {
  return (
    <BrowserRouter>
      <WorkSpace />
    </BrowserRouter>
  );
};