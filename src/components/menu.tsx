import "antd/es/card/Meta";
import { Button, Card, Col, Divider, Modal, Row } from "antd";
import { useState } from "react";
import CalculadoraComponent from "./calculadora";
import imagenes from "../styles/img/imagenes";

const { Meta } = Card;

const MenuComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className={open ? "menuContainer menuOpen" : "menuContainer"}>
        <Card className="menu-component">
          <div>
            <h1>Portafolio</h1>
            <Divider></Divider>
            <Row gutter={[20, 20]}>
              <Col xs={12} md={12}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="example" src={imagenes.CalculadoraRoyal} />}
                >
                  <Meta
                    title="Calculadora"
                    description="Diseño de Calculadora Royal"
                  />
                  <div className="menu-box">
                    <Button
                      className="btn-menu"
                      type="primary"
                      onClick={() => setOpen(true)}
                    >
                      Abrir App
                    </Button>
                    <Modal
                      title="Calculadora"
                      centered
                      open={open}
                      onOk={() => setOpen(false)}
                      onCancel={() => setOpen(false)}
                      width={1000}
                    >
                      <div className="menu-modal-content">
                        <p>
                          Se realiza maquetado de Calculadora Royal utilizando
                          CSS.. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Perspiciatis aspernatur minima quis
                          cum reprehenderit molestias mollitia rem amet quaerat
                          quia nulla exercitationem blanditiis perferendis,
                          cumque quibusdam et ipsum consequuntur inventore.
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Illum asperiores, odio maxime consequuntur
                          nostrum, adipisci nam obcaecati dicta quis totam
                          voluptate sunt suscipit excepturi doloribus eaque nemo
                          autem! Culpa, voluptatum?
                        </p>
                        <CalculadoraComponent />
                      </div>
                    </Modal>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="example" src={imagenes.CalculadoraRoyal} />}
                >
                  <Meta
                    title="Calculadora"
                    description="Diseño de Calculadora Royal"
                  />
                  <div className="menu-box">
                    <Button
                      className="btn-menu"
                      type="primary"
                      onClick={() => setOpen(true)}
                    >
                      Abrir App
                    </Button>
                    <Modal
                      title="Calculadora"
                      centered
                      open={open}
                      onOk={() => setOpen(false)}
                      onCancel={() => setOpen(false)}
                      width={1000}
                    >
                      <div className="menu-modal-content">
                        <p></p>
                        <CalculadoraComponent />
                      </div>
                    </Modal>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </section>
    </>
  );
};

export default MenuComponent;
