import React from 'react';

import { Content, SkillsContainer, Skill } from './Skills.styles';

import { Container } from "../Layout/GlobalStyles.styles";

function Skills() {
    return (
        <SkillsContainer>
            <Container>
                <h3>Here is a few things i'm good at</h3>
                <Content>
                    <Skill fill={9}>
                        <h4>HTML</h4>
                        <div className="container">
                            <div className="fill"></div>
                        </div>
                    </Skill>
                    <Skill fill={8}>
                        <h4>CSS</h4>
                        <div className="container">
                            <div className="fill"></div>
                        </div>
                    </Skill>
                    <Skill fill={7}>
                        <h4>JavaScript</h4>
                        <div className="container">
                            <div className="fill"></div>
                        </div>
                    </Skill>
                    <Skill fill={7}>
                        <h4>React</h4>
                        <div className="container">
                            <div className="fill"></div>
                        </div>
                    </Skill>
                    <Skill fill={7}>
                        <h4>SQL</h4>
                        <div className="container">
                            <div className="fill"></div>
                        </div>
                    </Skill>
                </Content>
            </Container>
        </SkillsContainer>
    );
}

export default Skills;
