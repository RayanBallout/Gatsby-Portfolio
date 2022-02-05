import React, { useState } from 'react';

// Styles
import { Container } from '../Layout/GlobalStyles.styles';
import { Content, LeftContent, Navigation, RightContent, ToggleNavigation } from './header.styles';

import Logo from '../../images/Logo.svg';
import { Link } from 'gatsby';

function Header() {

    const [menuState, setMenuState] = useState(true);

    return (
        <header>
            <div>
                <Container>
                    <Content>
                        <LeftContent>
                            <img src={Logo} alt="Logo" />
                            <Navigation state={menuState}>
                                <ul>
                                    <li>
                                        <Link to='/' activeClassName='active'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about' activeClassName='active'>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/projects' activeClassName='active'>
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact' className='contact-menu-btn'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </Navigation>
                        </LeftContent>
                        <RightContent>
                            <ToggleNavigation onClick={() => setMenuState(!menuState)} state={menuState}>
                                <div className="upper"></div>
                                <div className="mid"></div>
                                <div className="bottom"></div>
                            </ToggleNavigation>
                            <Link to='/contact' className='contact-btn'>Contact</Link>
                        </RightContent>
                    </Content>
                </Container>
            </div>
        </header>
    );
}

export default Header;
