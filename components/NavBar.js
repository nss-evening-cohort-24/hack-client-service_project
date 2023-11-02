/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="navTitle">SERVICE PROJECTS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link className="navLinks">Home</Nav.Link>
            </Link>
            <Link passHref href="/projects">
              <Nav.Link className="navLinks">View All Projects</Nav.Link>
            </Link>
            <Link passHref href="/project/new">
              <Nav.Link className="navLinks">Add A Project</Nav.Link>
            </Link>
            <Link passHref href="/">
              <Nav.Link className="navLinks">My Profile</Nav.Link>
            </Link>
            <Nav>
              <Button className="signOut" variant="danger" onClick={signOut}>
                Sign Out
              </Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
