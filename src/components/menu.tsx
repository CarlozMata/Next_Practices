import "antd/es/card/Meta";
import { Button, Card, Divider, Modal } from "antd";
import { useState } from "react";
import CalculadoraComponent from "./calculadora";

const { Meta } = Card;
const websiteUrl = "https://www.google.com";

const redirectToWebsite = () => {
  window.open(websiteUrl, "_blank");
};
const redirectToCalculadora = () => {
  window.open("/ruta-de-la-calculadora", "_blank");
};
const MenuComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section>
        <Card>
          <div>
            <h1>Portafolio</h1>
            <Divider></Divider>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <h2>Calculadora</h2>
              <Meta title="" description="Google" />
              <div>
                <Button type="primary" onClick={() => setOpen(true)}>
                  Open Modal
                </Button>
                <Modal
                  title="Modal 1000px width"
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={1000}
                >
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <CalculadoraComponent />
                </Modal>
              </div>
            </Card>
          </div>
        </Card>
      </section>
    </>
  );
};

export default MenuComponent;
