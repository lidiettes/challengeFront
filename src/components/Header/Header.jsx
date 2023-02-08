import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Header.module.css"

const Header = () => {
  return (
    		<>
	
			<Navbar expand="lg" className={style.header}>
				<Container className="">
					<Navbar.Brand className={style.brand} href="/">Gifitos</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className={style.nav}>
							<Nav.Link href="/cats">CATS</Nav.Link>
							<Nav.Link href="/babyPage">CRAZYBABIES</Nav.Link>
							<Nav.Link href="/nicolascagefaces">NICOLASCAGEFACES</Nav.Link>
							<>
							<NavDropdown title="USER"id="basic-nav-dropdown">
								<NavDropdown.Item href="/upload">UPLOAD</NavDropdown.Item>
								<NavDropdown.Item href="/myorders">
									MY FILES
								</NavDropdown.Item>
								
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link to="/login">Log out</Link>
								</NavDropdown.Item>
							</NavDropdown>
							</>	
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
  )
}

export default Header