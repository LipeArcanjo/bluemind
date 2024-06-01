"use client";

import React from "react";
import { StyledHeader } from "./index.styles"

import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    );
};
