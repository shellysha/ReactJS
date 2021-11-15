//Main navigation code
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tabs } from "../../Helpers/Tabs";
import SignOutUser from "../Sign-out/SignOutComp";

function NavigationBarComp({ user }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user._id
              ? tabs
                  .filter((x) => x.displayForLoggedin)
                  .map((tab, index) => (
                    <Nav.Link key={index} to={tab.href} as={Link}>
                      {tab.icon} {tab.name}
                    </Nav.Link>
                  ))
              : tabs
                  .filter((x) => !x.hideForLoggedOut)
                  .map((tab, index) => (
                    <Nav.Link key={index} to={tab.href} as={Link}>
                      {tab.icon} {tab.name}
                    </Nav.Link>
                  ))}
          </Nav>
          {/*left side is a condition && means true for left side */}
          {user._id && <SignOutUser></SignOutUser>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarComp;
