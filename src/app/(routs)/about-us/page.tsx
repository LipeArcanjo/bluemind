"use client"

import Footer from "@/components/Footer"
import { BrainImage, Card, CardContent, CardsWrapper, Container, Content, MainContent, TextContent } from "../../styles/aboutus.styles"
import Header from "@/components/Header"
import React from "react"


export default function AboutUs() {
    return (
        <React.Fragment>

            <Container>
                <Header />
                <BrainImage />
                <Content>
                    <h1><strong>WE ARE </strong>BlueMind</h1>
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
                        <Card>
                            <CardContent>
                                <h3>Felipe Arcanjo M. S.</h3>
                                <h3>Full-stack Developer</h3>
                                <h3>20 anos</h3>
                            </CardContent>
                            <p>imagem</p>
                        </Card>
                        <Card>
                            <CardContent>
                                <h3>Gustavo Rabelo F.</h3>
                                <h3>Dev</h3>
                                <h3>Idade</h3>
                            </CardContent>
                            <p>imagem</p>
                        </Card>
                        <Card>
                            <CardContent>
                                <h3>Marcelo Vieira J.</h3>
                                <h3>Dev</h3>
                                <h3>Idade</h3>
                            </CardContent>
                            <p>imagem</p>
                        </Card>
                    </CardsWrapper>
                </React.Fragment>
            </MainContent>
            <Footer />
        </React.Fragment>
    )
}