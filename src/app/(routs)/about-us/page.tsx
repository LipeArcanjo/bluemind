"use client"

import Footer from "@/components/Footer"
import { BrainImage, Card, CardContent, CardsWrapper, Container, Content, MainContent, TextContent } from "../../styles/aboutus.styles"
import Header from "@/components/Header"
import React from "react"
import Arcanjo from "../../../../public/images/Arcanjo.png";
import Rabelo from "../../../../public/images/Rabelo.png";
import Celo from "../../../../public/images/Celo.png";
import Image from "next/image"


export default function AboutUs() {

    const teamMembers = [
        {
            name: "Felipe Arcanjo M. S.",
            role: "Full-stack Developer",
            age: "20 anos",
            imageSrc: Arcanjo,
            imageAlt: "Imagem de um dos criadores do projeto, Felipe Arcanjo Matos dos Santos."
        },
        {
            name: "Gustavo Rabelo F.",
            role: "Backend Developer",
            age: "20 anos",
            imageSrc: Rabelo,
            imageAlt: "Imagem de um dos criadores do projeto, Gustavo Rabelo Freire."
        },
        {
            name: "Marcelo Vieira J.",
            role: "Full-stack Developer",
            age: "26 anos",
            imageSrc: Celo,
            imageAlt: "Imagem de um dos criadores do projeto, Marcelo Vieira Junior."
        }
    ];

    return (
        <React.Fragment>

            <Container>
                <Header />
                <BrainImage />
                <Content>
                    <h1><span>WE ARE </span>BlueMind</h1>
                </Content>
            </Container>

            <MainContent>
                <TextContent>
                    <h2>
                        Quem somos?
                    </h2>
                    <p>
                        Na BlueMind, utilizamos tecnologia e inovação para proteger nossos oceanos. Nosso aplicativo permite que pescadores, mergulhadores, surfistas e outros usuários reportem incidentes de poluição marinha em tempo real, usando GPS e fotos. Essas informações alimentam bancos de dados científicos e ajudam órgãos responsáveis a identificar e tratar rapidamente áreas afetadas.
                    </p>
                    <p>
                        Nosso painel de administrador oferece uma visualização em tempo real dos dados coletados, facilitando o monitoramento e a gestão eficiente dos recursos marinhos. Acreditamos que a colaboração e a tecnologia são essenciais para garantir um futuro sustentável para os oceanos. Junte-se a nós e ajude a proteger nossos mares para as futuras gerações.
                    </p>
                </TextContent>
                <React.Fragment>
                    <h2>Integrantes</h2>
                    <CardsWrapper>
                        {teamMembers.map((member, index) => (
                            <Card key={index}>
                                <CardContent>
                                    <h3>{member.name}</h3>
                                    <h3>{member.role}</h3>
                                    <h3>{member.age}</h3>
                                </CardContent>
                                <Image
                                    src={member.imageSrc}
                                    alt={member.imageAlt}
                                    className="image-card"
                                />
                            </Card>
                        ))}
                    </CardsWrapper>
                </React.Fragment>
            </MainContent>
            <Footer />
        </React.Fragment>
    )
}
