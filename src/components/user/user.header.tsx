"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function UserHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/logo.png"
            width="130"
            height="55"
            alt="React Bootstrap logo"
            style={{ marginTop: -10 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ gap: 5 }}>
            <Nav.Link href="#home">TRANG CHỦ</Nav.Link>
            <NavDropdown title="DANH MỤC" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">GIỚI THIỆU</Nav.Link>
            <Nav.Link href="#link">LIÊN HỆ</Nav.Link>
            <Form>
              <Row style={{ alignItems: "center" }}>
                <Col xs="auto" style={{ width: 400 }}>
                  <Form.Control
                    type="text"
                    placeholder="Hôm nay bạn muốn mua gì?"
                  />
                </Col>
                <Col xs="auto" style={{ marginLeft: -50, marginTop: -5 }}>
                  <div>
                    <IoSearch size={20} />
                  </div>
                </Col>
              </Row>
            </Form>
            <Nav.Link href="#link">
              <FaCartShopping size={20} />
            </Nav.Link>
            <Nav.Link href="#link">
              <FaRegUser size={20} /> Đăng nhập
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserHeader;
