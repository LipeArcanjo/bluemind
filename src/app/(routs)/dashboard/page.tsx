"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NotAuthorized, Container, Nav, Card, Stats, StatItem, Loading } from "../../styles/dashboard.styles"
import Header from "@/components/Header";

interface Report {
    id: number;
    userReportId: number;
    nomeCompleto: string;
    email: string;
    cpf: string;
    cep: string;
    tipo: string;
    descricao: string;
    latitude: number | null;
    longitude: number | null;
    dataHora: string;
    midia: string | null;
}

export default function Dashboard() {
    const token = sessionStorage.getItem("userToken");
    const fullname = sessionStorage.getItem("fullname");
    const router = useRouter();

    const [reports, setReports] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("fullname");
        router.push("/");
    };

    const getReports = async () => {
        const url = "http://localhost:8080/relatorios";

        setIsLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setReports(data);
        } catch (error) {
            console.error("Falha ao buscar registros:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getReports();
    }, []);

    // Para termos a contagem por tipo!
    const getCountByType = (tipo: string) => reports.filter(reports => reports.tipo === tipo).length;

    return (
        <React.Fragment>
            {token ? (
                <React.Fragment>
                    <Header />
                    <Container>
                        <Nav>
                            <h1>Olá, {fullname}!</h1>
                            <button onClick={handleLogout}>
                                Sair
                            </button>
                        </Nav>
                        <Stats>
                            <StatItem>
                                <h2>Quantidade Total:</h2>
                                <p>Acidente: {getCountByType("acidente")}</p>
                                <p>Incidente: {getCountByType("incidente")}</p>
                                <p>Vida Marinha: {getCountByType("vida marinha")}</p>
                            </StatItem>
                            <StatItem>
                                <h2>Acidentes em aberto</h2>
                                <p className="stat-number">0</p>
                            </StatItem>
                            <StatItem>
                                <h2>Incidentes em aberto</h2>
                                <p className="stat-number">0</p>
                            </StatItem>
                        </Stats>
                        {isLoading ? (
                            <Loading>Carregando...</Loading>
                        ) : (
                            reports.map((report, index) => (
                                <Card key={index}>
                                    <p><strong>Tipo:</strong> {report.tipo}</p>
                                    <p><strong>Descrição:</strong> {report.descricao}</p>
                                    <p><strong>Latitude:</strong> {report.latitude} <strong>Longitude:</strong> {report.longitude}</p>
                                    <p><strong>Data e Hora:</strong> {report.dataHora}</p>
                                    {report.midia ? (
                                        <a href={report.midia} download className="link-download">Baixar arquivo</a>
                                    ) : (
                                        <p className="link-download">Não existe anexo</p>
                                    )}
                                </Card>
                            ))
                        )}
                    </Container>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Header />
                    <NotAuthorized>
                        <h1>Você não está autorizado a acessar esta página, por favor faça login e tente novamente.</h1>
                    </NotAuthorized>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}
