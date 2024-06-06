import { antonio } from "@/app/fonts";
import { colors } from "@/app/styles/colors";
import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header`
    position: absolute;
    left: 2vw;
    padding: 2vh 0;
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuButton = styled.button`
    background: ${colors.major.main};
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: ${colors.commom.white};
`;

export const HamburgerIcon = styled.span`
    font-size: 2rem;
`;

export const CloseIcon = styled.span`
    font-size: 3rem;
    z-index: 1;
    position: absolute;
    top: 8vh;
    right: 1vw;
`;

export const MenuContent = styled.div`
    position: absolute;
    top: 6vh;
    right: 0;
    background-color: ${colors.major.main};
    padding: 10px;
    border-radius: 20px;
    font-family: ${antonio.style.fontFamily};
    font-size: 2rem;
    z-index: 0;

    :first-child{
        margin-top: 10vh;
    }

    .link-menu {
        padding: 10px;
    }

    .link-menu:hover{
        background-color: ${colors.commom.white};
        color: ${colors.major.main};
        border-radius: 10px;
        text-decoration: none;
    }
`;

export const StyledLink = styled(Link)`
    color: ${colors.commom.white};
    text-decoration: none;
    display: block;
    margin: 10px 0;

    &:hover {
        text-decoration: underline;
    }
`;