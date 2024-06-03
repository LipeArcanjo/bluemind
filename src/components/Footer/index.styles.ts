import styled from "styled-components";
import { colors } from "../../app/styles/colors"
import { inter } from "@/app/fonts";
import Link from "next/link";

export const StyledFooter = styled.div`
    padding: 9vh 0;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.commom.white};
    font-family: ${inter.style.fontFamily};
`;

export const FooterBg = styled.footer`
    margin-top: 5vh;
    width: 100%;
    background-color: ${colors.background.footer};
    border-top: ${colors.commom.gray};
`

export const FooterColumn = styled.div`
    height: 15vh;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FooterRow = styled.div`

    display: flex;
    gap: 3rem;

    & li:not(:last-child) {
        margin-bottom: 4vh;
    };
`

export const StyledLink = styled(Link)`
    color: ${colors.commom.white};
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`
