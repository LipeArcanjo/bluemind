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

export default function Home() {
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
            <button>
              Button
            </button>
          </TextContent>
          <ImageContent>
            <Image
              src={FirstContentImage}
              alt="Corais coloridos brilhando em neon"
            />
          </ImageContent>
        </FirstContent>
        <SecondContent>
          <h2>Produtos</h2>
          <CardsWrapper>
            <CardContent>
              <p>imagem</p>
              <h3>Card 1</h3>
            </CardContent>
            <CardContent>
              <p>imagem</p>
              <h3>Card 2</h3>
            </CardContent>
            <CardContent>
              <p>imagem</p>
              <h3>Card 3</h3>
            </CardContent>
            <CardContent>
              <p>imagem</p>
              <h3>Card 4</h3>
            </CardContent>

          </CardsWrapper>
        </SecondContent>
      </MainContent>
      <Footer />
    </React.Fragment>
  );
}
