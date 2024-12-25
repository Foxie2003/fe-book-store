"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderComponent() {
  return (
    <Navbar style={{ height: 60 }} className="bg-white">
      <Container style={{ padding: 0 }}>
        <Navbar.Brand href="#home">
          <Image
            src="/logo.png"
            width="155"
            height="60"
            alt="React Bootstrap logo"
            style={{ marginTop: -10 }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#" className="fs-5 text-dark">
            ĐĂNG NHẬP
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
