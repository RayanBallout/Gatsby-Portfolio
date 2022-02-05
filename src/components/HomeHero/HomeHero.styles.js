import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;

    @media (max-width:768px){
        flex-direction: column;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    color: var(--blue);

    h2,h1{
        font-size: 3.5rem;
    }

    h4{
        font-size: 1.5rem;

        span{
            color: var(--white);
        }
    }

    @media (max-width:768px){
        width: 100%;
        justify-content: center;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .hero-img{
        width: 100%;
        z-index: -1;
    }
`