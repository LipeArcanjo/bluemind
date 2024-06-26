"use client";

import React from "react";
// Import dos componentes
import Header from "../components/Header";
import Footer from "@/components/Footer";
// Import dos estilos
import { BackgroundHome, CardContent, CardsWrapper, FirstContent, ImageContent, MainContent, MainTitle, SecondContent, TextContent } from "./styles/home.styles"
// Import das imagens
import Image from "next/image";
import FirstContentImage from "../../public/images/First-content-Homepage-IMG.jpg";
import monitorizacao from "../../public/images/monitorizacao.png";
import conscicentizacao from "../../public/images/conscientizacao.png";
import tratar from "../../public/images/tratar.png";
import cientista from "../../public/images/cientista.png";
import { Button } from "@/components/Button/index";

export default function Home() {

  const cardData = [
    {
      title: "Facilita a monitorização contínua e proativa dos recursos marinhos",
      imageSrc: monitorizacao,
      imageAlt: "Imagem representando a monitorização oceânica."
    },
    {
      title: "Promove a conscientização da comunidade na preservação marinha",
      imageSrc: conscicentizacao,
      imageAlt: "Imagem representando a conscientização da comunidade na preservação marinha."
    },
    {
      title: "Ajuda os órgãos responsáveis a tratar áreas afetadas rapidamente",
      imageSrc: tratar,
      imageAlt: "Imagem representando os órgãos responsáveis tratando áreas afetadas."
    },
    {
      title: "Contribuição para bancos de dados científicos robustos",
      imageSrc: cientista,
      imageAlt: "Imagem representando um Oceanógrafo."
    }
  ];

  return (
    <React.Fragment>
      {/* BG IMAGE */}
      <BackgroundHome>
        {/* HEADER */}
        <Header />

        <MainTitle>
          <h1>Criando soluções <strong>azuis</strong></h1>
          <h1> para um futuro</h1>
          <h1><strong>sustentável.</strong></h1>
        </MainTitle>

      </BackgroundHome>
      <MainContent>
        <FirstContent>
          <TextContent>
            <p>
              BlueMind é uma plataforma inovadora para monitoramento marinho, permitindo que pescadores, mergulhadores, surfistas entre outros entusiastas marinhos compartilhem observações sobre a vida marinha e reportem poluição em tempo real. Utilizando tecnologia de ponta, a plataforma contribui para a preservação dos oceanos, fornecendo dados valiosos para pesquisas científicas e órgãos ambientais, ajudando na tomada de decisões.
            </p>
            <p>
              Nossa missão é conectar a comunidade marinha, fornecer dados valiosos para cientistas e ajudar órgãos responsáveis a tratar áreas afetadas, com conscientização, engajamento e sustentabilidade dos recursos marinhos.
            </p>
            <Button size={"large"} color={"green"}>
              Saiba mais!
            </Button>
          </TextContent>
          <ImageContent>
            <Image
              src={FirstContentImage}
              alt="Corais coloridos brilhando em neon"
            />
          </ImageContent>
        </FirstContent>
        <SecondContent>
          <h2>Benefícios</h2>
          <CardsWrapper>
            {cardData.map((card, index) => (
              <CardContent key={index}>
                <h3>{card.title}</h3>
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="image-card"
                />
              </CardContent>
            ))}
          </CardsWrapper>
        </SecondContent>
      </MainContent>
      <Footer />
    </React.Fragment>
  );
}
