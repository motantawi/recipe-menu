import { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

const NavBar = ({ filterSearch }) => {
  const [word, setWord] = useState("");

  const filterBySearch = (e) => {
    filterSearch(word);
  };

  return (
    <Row>
      <Navbar dir="rtl" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <FormControl
                value={word}
                onChange={(e) => setWord(e.target.value)}
                type="text"
                placeholder="ابحث.."
                className="mx-2"
              />
              <button
                type="submit"
                onClick={() => filterBySearch()}
                className="btn-search ps-3 pe-3"
              >
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
