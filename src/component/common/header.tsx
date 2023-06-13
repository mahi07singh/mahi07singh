import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/jio.png";
import HeaderStyle from "../../style/common/header.module.css";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <Navbar className={HeaderStyle.navbar} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className={HeaderStyle.logo} src={logo} alt="Jio Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} className={HeaderStyle.menuBar} to="/mobile">
                Mobile
              </Nav.Link>
              <Nav.Link as={Link} className={HeaderStyle.menuBar} to="/5g">
                True 5G
              </Nav.Link>
              <Nav.Link as={Link} className={HeaderStyle.menuBar} to="/Fiber">
                JioFiber
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={HeaderStyle.menuBar}
                to="/business"
              >
                business
              </Nav.Link>
              <Nav.Link as={Link} className={HeaderStyle.menuBar} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} className={HeaderStyle.menuBar} to="/apps">
                Apps
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={HeaderStyle.menuBar}
                to="/suppoerted"
              >
                Supported
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                className={`${HeaderStyle.inputBox} me-2`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
            <h2 >
              <Link className={HeaderStyle.headIcon} to="/selfcare/login/">
                <BiUserCircle />
              </Link>
            </h2>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
