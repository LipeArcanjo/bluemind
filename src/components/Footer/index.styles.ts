import styled from "styled-components";
import { colors } from "../../app/styles/colors"
import { inter } from "@/app/fonts";
import Link from "next/link";

export const FooterBg = styled.footer`
    margin-top: 5vh;
    width: 100%;
    background-color: ${colors.background.footer};
    border-top: ${colors.commom.gray};
`

export const StyledFooter = styled.div`
    padding: 9vh 0;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.commom.white};
    font-family: ${inter.style.fontFamily};
    gap: 2em;

    @media screen and (max-width: 530px) {
        flex-direction: column;
        gap: 3em;
    }
`;


export const FooterColumn = styled.div`
    height: 15vh;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FooterIcons = styled.div`
    display: flex;
    gap: 0.5em;

    & a {
        color: ${colors.commom.white};
    }

    .icon {
        font-size: 2rem;
    }
`

export const FooterRow = styled.div`
    display: flex;
    gap: 3rem;

    & li:not(:last-child) {
        margin-bottom: 4vh;
    };

    @media screen and (max-width: 530px) {
        gap: 1em;
        font-size: 0.8rem;
    }
`

export const StyledLink = styled(Link)`
    color: ${colors.commom.white};
    text-decoration: underline;

    &:hover{
        text-decoration: underline;
    }
`
