import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/img/bb-logo.png"
            alt="BrainBounce-logo"
            style={{ height: "50px", marginLeft: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#another-action">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#something-else-here">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default NavBar;
