"use client";

import React from "react";
import { FooterBg, FooterColumn, FooterRow, StyledFooter, StyledLink } from "./index.styles"
import Link from "next/link";

export default function Header() {
    return (
        <FooterBg>
            <StyledFooter>
                {/* Flex column */}
                <FooterColumn>
                    <h3>BlueMind</h3>
                    {/* Precisa colocar os icones */}
                    <p>icones</p>
                </FooterColumn>
                {/* Flex row */}
                <FooterRow>
                    <>
                    {/* Precisa fazer um map aqui */}
                        <ul>
                            <li>Felipe Arcanjo - RM 554018 </li>
                            <li>Gustavo Rabelo - RM553326</li>
                            <li>Marcelo Vieira - RM553640</li>
                        </ul>
                    </>
                    <>
                    {/* Precisa fazer um map aqui */}
                        <ul>
                            <li>
                                <StyledLink href="/about-us">Sobre nós</StyledLink>
                            </li>
                            <li>
                                <StyledLink href="/login">Painel Adm</StyledLink>
                            </li>
                            <li>
                                <StyledLink href="/register">Registro</StyledLink>
                            </li>
                        </ul>
                    </>
                </FooterRow>
            </StyledFooter>
        </FooterBg>
    );
};
