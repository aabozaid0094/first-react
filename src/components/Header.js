import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.svg";

const Header = (props) => {
    return (
        <Navbar bg={props.dark_schema?"dark":"light"} variant={props.dark_schema?"dark":"light"} expand="lg" className="shadow" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="react-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Form.Check className="p-2 color-schema-switch" type="switch" id="color_schema_switch">
                        <Form.Check.Label>Light</Form.Check.Label>
                        <Form.Check.Input className="mx-0" type="checkbox" checked={props.dark_schema} onChange={props.handle_schema} />
                        <Form.Check.Label>Dark</Form.Check.Label>
                    </Form.Check>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
