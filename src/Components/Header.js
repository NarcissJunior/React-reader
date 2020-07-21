import React from 'react';
import LinkWrapper from '../Utils/LinkWrapper';

import gm from '../img/gamemaster.gif';


import { Navbar, Nav } from 'react-bootstrap'


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={gm}
                    width="30"
                    height="30"
                />{' '}
                React Reader
            </Navbar.Brand>

            <Nav>
                <Nav.Link>
                    <LinkWrapper to='/'>Home</LinkWrapper>
                </Nav.Link>
                <Nav.Link>
                    <LinkWrapper to='/personagem'>Personagem</LinkWrapper>
                </Nav.Link>
                <Nav.Link>
                    <LinkWrapper to='/sobre'>Sobre</LinkWrapper>
                </Nav.Link>
            </Nav>

        </Navbar>
    );
}

export default Header;