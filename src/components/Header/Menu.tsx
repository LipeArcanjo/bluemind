"use client";

import { useState } from "react";
import { CloseIcon, HamburgerIcon, MenuButton, MenuContent, StyledLink } from "./index.styles";
import React from "react";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuLinks = [
        { href: "/about-us", text: "SOBRE NÓS" },
        { href: "/login", text: "PAINEL ADM" },
        { href: "/register", text: "REGISTRO" },
    ];

    return (
        <React.Fragment>
            <MenuButton onClick={toggleMenu}>
                {isOpen ? <CloseIcon>&times;</CloseIcon> : <HamburgerIcon>&#9776;</HamburgerIcon>}
            </MenuButton>
            {isOpen && (
                <MenuContent>
                    {menuLinks.map((link, index) => (
                        <StyledLink key={index} href={link.href} className="link-menu">
                            {link.text}
                        </StyledLink>
                    ))}
                </MenuContent>
            )}
        </React.Fragment>
    )
}