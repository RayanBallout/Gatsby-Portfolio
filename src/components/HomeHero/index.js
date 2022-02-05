import React from 'react';

import { Container } from '../Layout/GlobalStyles.styles';
import { Content, ImageContainer, TextContainer } from './HomeHero.styles';

import { StaticImage } from 'gatsby-plugin-image';

function HomeHero() {
    return (
        <Container>
            <Content>
                <TextContainer>
                    <h2>Hello, I'm</h2>
                    <h1>Rayan Ballout</h1>
                    <h4>I am a <span>Web Developer</span></h4>
                </TextContainer>
                <ImageContainer>
                    <StaticImage
                        src='../../images/programmer.png'
                        alt='Programmmer'
                        placeholder='tracedSVG'
                        className='hero-img'
                    />
                </ImageContainer>
            </Content>
        </Container>
    );
}

export default HomeHero;
