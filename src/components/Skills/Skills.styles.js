import styled from "styled-components";


export const SkillsContainer = styled.div`
    background-color: var(--lightGreen);
    padding: 20px 0;

    h3{
        font-size: 1.5rem;
    }
`

export const Content = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`;

export const Skill = styled.div`
    h4{
        font-size:1.2rem;
    }
    
    .container{
        background-color: var(--white);
        padding: 2px;
        width: 50%;

        .fill{
            height: 20px;
            background-color: var(--blue);
            width: ${({ fill }) => `${fill * 10}%`};
            position: relative;

            &:after{
                position: absolute;
                content:"${({ fill }) => `${fill}/10`}";
                top: -8px;
                bottom:0;
                left: 10px;
                color: white;
                font-size: 1.2rem;
            }
        }
    }
`;