import styled from "styled-components";

export const Content = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 70px;
`;

export const LeftContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:40px;

    img{
        width:140px;
    }
`

export const Navigation = styled.nav`

    ul{
        list-style:none;
        display:flex;
        gap:45px;
        align-items:center;

        li{
            font-size: 1.2rem;
            color:var(--blue);

            a{
                position: relative;
                &:after{
                    content:"";
                    width: 0%;
                    height:2px;
                    background-color:var(--white);
                    position: absolute;
                    bottom: 3px;
                    left: 0;
                }
                
                &:hover{
                    color: var(--white);
                    &:after{
                        width:100%;
                        transition: .2s ease-out;
                    }
                }
            }

            .contact-menu-btn{
                display:none;

                @media (max-width: 768px){
                    display:block;
                }
            }

        }

        .active{
            color:var(--white);
            position: relative;
            
            &:after{
                content:"";
                width: 100%;
                height:2px;
                background-color:var(--white);
                position: absolute;
                bottom: 3px;
                left: 0;
            }
        }
    }

    @media (max-width: 768px){
        transform: ${({ state }) => state ? 'translateX(100%)' : 'translateX(0%)'};
        transition: .25s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:var(--midGreen);
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        ul{
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
`;

export const ToggleNavigation = styled.button`
    border-radius: 50%;
    position: absolute;
    top: 15px;
    right: 10px;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 5px;
    background-color: var(--blue);
    border:none;
    width: 40px;
    height: 40px;
    display: none;
    overflow: hidden;

    .upper,.mid,.bottom{
        background-color: var(--white);
        width: 20px;
        height: 2px;
        transition:.2s ease-in;
    }

    .upper{
        transform-origin: 100%;
        transform:${({ state }) => state ? 'rotateZ(0deg)' : 'translateX(-3px)rotateZ(-45deg)'};
    }

    .bottom{
        transform-origin: 100%;
        transform:${({ state }) => state ? 'rotateZ(0deg)' : 'translateX(-3px)rotateZ(45deg)'};
    }

    .mid{
        transform:${({ state }) => state ? 'translateX(0)' : 'translateX(200%)'};
    }

    @media (max-width:768px){
        display: flex;
    }
`;

export const RightContent = styled.div`
    .contact-btn{
        background-color: var(--blue);
        padding: 10px 20px;
        color: var(--white);

        @media (max-width: 768px){
            display:none;
        }

        &:hover{
            background-color: var(--white);
            color: var(--blue);
        }
    }
`;