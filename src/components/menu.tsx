import "antd/es/card/Meta";
import { Button, Card, Col, Divider, Modal, Row } from "antd";
import { useState } from "react";
import CalculadoraComponent from "./calculadora";
import imagenes from "../styles/img/imagenes";

const { Meta } = Card;

const MenuComponent = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpenApp = () => {
    window.open("https://www.carlozmata.com", "_blank");
  };

  const handleOpenApp2 = () => {
    window.open("https://carlozmata.github.io/test-Frontend/#", "_blank");
  };

  return (
    <>
      <section
        className={
          open
            ? "menuContainer menuOpen"
            : open2
            ? "menuContainer menuOpen"
            : open3
            ? "menuContainer menuOpen"
            : "menuContainer"
        }
      >
        <Card className="menu-component">
          <div>
            <h1>Portafolio</h1>
            <Divider></Divider>
            <Row className="menu-row" gutter={[20, 20]}>
              <Col xs={8} md={8}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="example" src={imagenes.cv} />}
                >
                  <Meta
                    title="Página Personal"
                    description="Sitio web personal"
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
                      title="Página Personal"
                      centered
                      open={open}
                      onOk={handleOpenApp}
                      onCancel={() => setOpen(false)}
                      okText="Abrir Página"
                      cancelText="Cancelar"
                      width={1000}
                    >
                      <div className="menu-modal-content">
                        <img alt="example" src={imagenes.cv} />
                        <div className="menu-modal-text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque deserunt laborum quibusdam harum
                            optio amet magni, sapiente quam, iste, blanditiis
                            sunt! Itaque iure ullam earum explicabo nesciunt
                            animi magni nemo!
                          </p>
                        </div>
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
                      onClick={() => setOpen2(true)}
                    >
                      Abrir App
                    </Button>
                    <Modal
                      title="Calculadora"
                      centered
                      open={open2}
                      onOk={() => setOpen2(false)}
                      onCancel={() => setOpen2(false)}
                      width={1000}
                      cancelText="Cancelar"
                    >
                      <div className="menu-modal-content">
                        <CalculadoraComponent />

                        <div className="menu-modal-text">
                          <p>
                            Se realiza maquetado de Calculadora Royal utilizando
                            CSS.. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Perspiciatis aspernatur minima
                            quis cum reprehenderit molestias mollitia rem amet
                            quaerat quia nulla exercitationem blanditiis
                            perferendis, cumque quibusdam et ipsum consequuntur
                            inventore. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illum asperiores, odio maxime
                            consequuntur nostrum, adipisci nam obcaecati dicta
                            quis totam voluptate sunt suscipit excepturi
                            doloribus eaque nemo autem! Culpa, voluptatum?
                          </p>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="example" src={imagenes.storeSamsung} />}
                >
                  <Meta
                    title="Tienda Online"
                    description="Sitio web de venta de celulares"
                  />
                  <div className="menu-box">
                    <Button
                      className="btn-menu"
                      type="primary"
                      onClick={() => setOpen3(true)}
                    >
                      Abrir App
                    </Button>
                    <Modal
                      title="Tienda Online de Celulares"
                      centered
                      open={open3}
                      onOk={handleOpenApp2}
                      onCancel={() => setOpen3(false)}
                      okText="Abrir Página"
                      cancelText="Cancelar"
                      width={1000}
                    >
                      <div className="menu-modal-content">
                        <img alt="example" src={imagenes.storeSamsung} />
                        <div className="menu-modal-text">
                          <p></p>
                        </div>
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
