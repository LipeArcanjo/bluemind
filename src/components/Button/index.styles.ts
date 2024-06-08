import styled from 'styled-components';
import { colors } from '../../app/styles/colors';
import { ButtonHTMLAttributes } from 'react';
import { inter } from "../../app/fonts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: "large" | "small";
    color: "green" | "blue";
}

export const StyledButton = styled.button<ButtonProps>`
    margin: 0 auto;
    border: none;
    cursor: pointer;
    color: ${colors.commom.white};
    font-family: ${inter.style.fontFamily};
    background-color: ${props => props.color === "green" ? colors.green.dark : colors.major.main};
    padding: ${props => props.size === "small" ? '10px 20px' : '1vh 1.5vw'};
    border-radius: ${props => props.size === "large" ? '50px' : '5px'};
    font-size: ${props => props.size === "large" ? '1.5rem' : '1rem'};

    &:hover {
        background-color: ${props => props.color === "green" ? colors.major.main : colors.green.dark};
        transition: 200ms ease-in-out;
    }
`;