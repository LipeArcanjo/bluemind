"use client";

import React from "react";
import { FooterBg, FooterColumn, FooterIcons, FooterRow, StyledFooter, StyledLink } from "./index.styles"
import { FaSquareXTwitter, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

export default function Header() {

    const teamMembers = [
        { name: "Felipe Arcanjo", rm: "554018" },
        { name: "Gustavo Rabelo", rm: "553326" },
        { name: "Marcelo Vieira", rm: "553640" }
    ];

    const footerLinks = [
        { href: "/about-us", text: "Sobre nós" },
        { href: "/login", text: "Painel Adm" },
        { href: "/register", text: "Registro" }
    ];

    const socialIcons = [
        { href: "https://github.com/LipeArcanjo/bluemind", icon: <FaSquareGithub className="icon" /> },
        { href: "https://www.instagram.com/", icon: <FaSquareInstagram className="icon" /> },
        { href: "https://x.com", icon: <FaSquareXTwitter className="icon" /> }
    ];

    return (
        <FooterBg>
            <StyledFooter>
                {/* Flex column */}
                <FooterColumn>
                    <h3>BlueMind</h3>
                    <h3>1TDSPR</h3>
                    {/* Precisa colocar os icones */}
                    <FooterIcons>
                        {socialIcons.map((social, index) => (
                            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                                {social.icon}
                            </a>
                        ))}
                    </FooterIcons>
                </FooterColumn>
                {/* Flex row */}
                <FooterRow>
                    <React.Fragment>
                        <ul>
                            {teamMembers.map((member, index) => (
                                <li key={index}>
                                    {member.name} - RM {member.rm}
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                    <React.Fragment>
                        <ul>
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <StyledLink href={link.href}>{link.text}</StyledLink>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                </FooterRow>
            </StyledFooter>
        </FooterBg>
    );
};
