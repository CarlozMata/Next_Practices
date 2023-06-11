import React from "react";
import { Card } from "antd";
import "../styles/practices.scss";
import "../styles/scsComponents/calculadora.scss";

import MenuComponent from "../components/menu";

const PracticesContainer = () => {
  return (
    <div className="Box-Components">
      <Card className="Card-First">
        <MenuComponent />
      </Card>
    </div>
  );
};
export default PracticesContainer;
