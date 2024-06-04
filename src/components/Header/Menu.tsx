"use client";

import { useState } from "react";
import { CloseIcon, HamburgerIcon, MenuButton, MenuContent, StyledLink } from "./index.styles";
import React from "react";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <React.Fragment>
            <MenuButton onClick={toggleMenu}>
                {isOpen ? <CloseIcon>&times;</CloseIcon> : <HamburgerIcon>&#9776;</HamburgerIcon>}
            </MenuButton>
            {isOpen && (
                <MenuContent>
                    <StyledLink href="/about-us">SOBRE NÓS</StyledLink>
                    <StyledLink href="/login">PAINEL ADM</StyledLink>
                    <StyledLink href="/register">REGISTRO</StyledLink>
                </MenuContent>
            )}
        </React.Fragment>
    )
}