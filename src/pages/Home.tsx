import Carousel from "react-bootstrap/Carousel";
import HomeStyle from "../style/home.module.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {
  BsFillPersonVcardFill,
  BsFillQuestionSquareFill,
} from "react-icons/bs";
import { AiFillMessage, AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

const Home = () => {
  return (
    <>
      <section className={HomeStyle.sectionOne}>
        <Carousel>
          <Carousel.Item>
            <img
              className={HomeStyle.banner}
              src={require("../images/jio-desktop-bg.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={HomeStyle.banner}
              src={require("../images/jios.png")}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Second slide label</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={HomeStyle.banner}
              src={require("../images/jpn.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Third slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className={HomeStyle.sectionTwo}>
        <Container>
          <Row className="justify-content-center">
            <Col className={HomeStyle.colIcon} md={10}>
              <BsFillPersonVcardFill className={HomeStyle.IconOne} />
              <BsFillPersonVcardFill className={HomeStyle.Icon} />
              <BsFillPersonVcardFill className={HomeStyle.Icon} />
              <BsFillPersonVcardFill className={HomeStyle.Icon} />
              <BsFillPersonVcardFill className={HomeStyle.Icon} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={HomeStyle.sectionThree}>
        <Container>
          <Row>
            <Col>
              <h2 className={HomeStyle.headingJio}>Jio True 5G is live</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className={HomeStyle.headingtwo}>
                Let's check the status of True 5G in your city/towns
              </h2>
              <Form className="d-flex">
                <Form.Control
                  className={`${HomeStyle.inputBox} me-2`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Col>
              <h3 className={HomeStyle.headingtwo}>
                Cities/Towns 36 States/UT Nidadavole, Lanka, Madhepura,
                Akaltara, and many more.
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs lg="4">
              <p className={HomeStyle.paraOne}>
                Can't wait to know more about True 5G?
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className={HomeStyle.coloumn} xs lg="4">
              <Button className={HomeStyle.btnButton}>Explore Now</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={HomeStyle.sectionFour}>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h2 className={HomeStyle.myHeading}>
                Discover new possibilities
              </h2>
              <p className={HomeStyle.paraGraph}>
                Planning a digital transformation for home, business, or
                personal experiences? You're just a step away.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className={HomeStyle.colCard}>
                <Card.Img variant="top" src={require("../images/colOne.png")} />
                <Card.Body className={HomeStyle.cardBody}>
                  <Card.Title className={HomeStyle.cardThree}>
                    Card Title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={HomeStyle.cardBtn}>Explore Mobile</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={HomeStyle.colCard}>
                <Card.Img variant="top" src={require("../images/coltwo.png")} />
                <Card.Body className={HomeStyle.cardBody}>
                  <Card.Title className={HomeStyle.cardThree}>
                    Card Title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={HomeStyle.cardBtn}>Explore Mobile</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={HomeStyle.colCard}>
                <Card.Img
                  variant="top"
                  src={require("../images/colThree.png")}
                />
                <Card.Body className={HomeStyle.cardBody}>
                  <Card.Title className={HomeStyle.cardThree}>
                    Card Title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={HomeStyle.cardBtn}>Explore Mobile</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h2 className={HomeStyle.sectionHeading}>
                Enrich your digital life
              </h2>
              <p className={HomeStyle.paraGraph}>
                Stream, shop, connect, and do much more on the go with Jio apps
                and services.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={HomeStyle.sectionThree}>
        <Container>
          <Row>
            <Col md={4}>
              <h3 className={HomeStyle.vedioHead}>
                Explore a world of exclusive, binge-worthy content
              </h3>
              <Button className={HomeStyle.btnButton}>Know More</Button>
            </Col>
            <Col md={8}></Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Card className={HomeStyle.oneCard}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={HomeStyle.btnButton}>Explore</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={HomeStyle.twoCard}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={HomeStyle.btnButton}>Explore</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={HomeStyle.threeCard}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={HomeStyle.btnButton}>Explore</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={HomeStyle.fourCard}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={HomeStyle.btnButton}>Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h3 className={HomeStyle.sportHeading}>In the spotlight</h3>
              <p className={HomeStyle.paraGraph}>
                The best deals, news, and products.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className={HomeStyle.oneContainer}>
          <Row className="justify-content-md-center">
            <Col md={5}>
              <h3 className={HomeStyle.exploreHeading}>
                Explore the world of virtual reality
              </h3>
              <p>Immerse into movies, live TV content, apps, and games.</p>
              <Button className={HomeStyle.btnButton}>
                Buy JioDive for ₹1299
              </Button>
            </Col>
            <Col md={5}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                className={HomeStyle.ImageCol}
                src={require("../images/div.webp")}
                alt="This image is not supported"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/firstCol.png")}
                />
                <Card.Body className={HomeStyle.bodycard}>
                  <h4 className={HomeStyle.headingGet}>
                    Get free delivery on your first order
                  </h4>
                  <Button className={HomeStyle.btnButton}>
                    Order on NetMeds
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/secondCol.png")}
                />
                <Card.Body className={HomeStyle.bodycard}>
                  <h4 className={HomeStyle.headingGet}>
                    Get free delivery on your first order
                  </h4>
                  <Button className={HomeStyle.btnButton}>
                    Go to Urban Ladder
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/threeCol.png")}
                />
                <Card.Body className={HomeStyle.bodycard}>
                  <h4 className={HomeStyle.headingGet}>
                    Get free delivery on your first order
                  </h4>
                  <Button className={HomeStyle.btnButton}>Shop at Ajio</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={HomeStyle.footerSection}>
        <Container>
          <Row>
            <Col>
              <h2 className={HomeStyle.footerHeading}>Need guidance?</h2>
              <p className={HomeStyle.footerPara}>We’d love to help you.</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className={HomeStyle.footercoloum}>
              <Button className={HomeStyle.footerButtonone}>
                <BsFillQuestionSquareFill className={HomeStyle.footerIcon}/>
                Support
              </Button>
              <Button className={HomeStyle.footerButton}>
                <AiFillMessage className={HomeStyle.footerIcon}/>
                Chat with us
              </Button>
              <Button className={HomeStyle.footerButton}>
                <IoIosCall className={HomeStyle.footerIcon}/>
                call Us
              </Button>
              <Button className={HomeStyle.footerButton}>
                <AiOutlineAppstoreAdd className={HomeStyle.footerIcon}/>
                Find a Store
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
