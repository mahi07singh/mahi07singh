import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterStyle from "../../style/common/footer.module.css";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import appStoreIcon from "../../images/AppStore.svg";
import playStoreIcon from "../../images/G-Play.svg";

const Footer = () => {
  return (
    <>
      <footer className={FooterStyle.footer}>
        <Container>
          <Row>
            <Col>
              <h6 className={FooterStyle.paraOne}>Our offerings</h6>
              <ListGroup variant="flush">
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/mobile"
                >
                  Mobile
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/Fiber"
                >
                  Fiber
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/business"
                >
                  Business
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/apps"
                >
                  Apps
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/shop"
                >
                  Shop
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/5g"
                >
                  5G Network
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h6 className={FooterStyle.paraOne}>Support</h6>
              <ListGroup variant="flush">
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/explore-support"
                >
                  Explore Support
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/locate-us"
                >
                  Locate us
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/faq"
                >
                  FAQ
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/track-order"
                >
                  Track order
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/contact-us"
                >
                  Contact Us
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h6 className={FooterStyle.paraOne}>Our company</h6>
              <ListGroup variant="flush">
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/reliance-industries"
                >
                  Reliance Industries
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/reliance-foundation"
                >
                  Reliance Foundation
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/jiolife"
                >
                  JioLife
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/careers"
                >
                  Careers
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/investor-relations"
                >
                  Investor Relations
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h6 className={FooterStyle.paraOne}>Useful links</h6>
              <ListGroup variant="flush">
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/get-jio-sim"
                >
                  Get Jio Sim
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/choice-number"
                >
                  Choice Number
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/Jio-fiber"
                >
                  Get JioFiber
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/recharge"
                >
                  Recharge
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/pay-bills"
                >
                  Pay Bills
                </ListGroup.Item>
                <ListGroup.Item
                  className={FooterStyle.listItem}
                  as={Link}
                  to="/log-in"
                >
                  login
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <h3 className={FooterStyle.lastHeading}>Connect with us</h3>
              <Nav>
                <Nav.Link
                  className={FooterStyle.socialLink}
                  as={Link}
                  to="https://twitter.com/reliancejio"
                >
                  <AiFillTwitterCircle className={FooterStyle.Icons}/>
                </Nav.Link>
                <Nav.Link
                  className={FooterStyle.socialLink}
                  as={Link}
                  to="https://www.instagram.com/reliancejio/"
                >
                  <AiOutlineInstagram className={FooterStyle.Icons}/>
                </Nav.Link>
                <Nav.Link
                  className={FooterStyle.socialLink}
                  as={Link}
                  to="https://www.facebook.com/Jio"
                >
                  <BsFacebook className={FooterStyle.Icons}/>
                </Nav.Link>
                <Nav.Link
                  className={FooterStyle.socialLink}
                  as={Link}
                  to="https://www.youtube.com/channel/UC7x7gqeQQ5dazPAvDgC7TIw"
                >
                  <AiFillYoutube className={FooterStyle.Icons}/>
                </Nav.Link>
                <Nav.Link
                  className={FooterStyle.socialLink}
                  as={Link}
                  to="https://in.linkedin.com/company/jio?trk=nav_type_overview"
                >
                  <AiFillLinkedin className={FooterStyle.Icons}/>
                </Nav.Link>
              </Nav>
              <h3 className={FooterStyle.lastHeading}>Download MyJio</h3>
              <a href="https://play.google.com/store/apps/details?id=com.jio.myjio">
                <img src={playStoreIcon} alt="" />
              </a>
              <a href="https://apps.apple.com/us/app/myjio/id1074964262">
                <img src={appStoreIcon} alt="" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="text-center p-5">
              <p>© 2023 {process.env.REACT_APP_NAME}, All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
