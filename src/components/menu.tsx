import "antd/es/card/Meta";
import { Card } from "antd";

const { Meta } = Card;
const websiteUrl = "https://www.google.com";

const redirectToWebsite = () => {
  window.open(websiteUrl, "_blank");
};
const redirectToCalculadora = () => {
  window.open("/ruta-de-la-calculadora", "_blank");
};
const MenuComponent = () => {
  return (
    <>
      <section>
        <Card>
          <div>
            <h1>portafolio</h1>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description={
                  <a href="/ruta-de-la-calculadora">www.instagram.com</a>
                }
              />
            </Card>
            <Card
              hoverable
              style={{ width: 200 }}
              onClick={redirectToWebsite}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Europe Street beat" description="Google" />
            </Card>
          </div>
        </Card>
      </section>
    </>
  );
};

export default MenuComponent;
