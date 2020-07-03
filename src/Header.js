import React from 'react';
import LinkWrapper from './LinkWrapper';

import Gm from './gamemaster.gif';


import { Navbar, Nav } from 'react-bootstrap'


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={Gm}
                    width="30"
                    height="30"
                />{' '}
                React Reader
            </Navbar.Brand>
            //consertar isso
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