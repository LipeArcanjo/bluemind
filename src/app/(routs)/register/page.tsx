"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    BgRegister,
    ButtonGroup,
    FormsColumn,
    FormsContent,
    FormsRow,
    InputContent,
    RegisterComponent,
} from "@/app/styles/register.styles";
import Header from "@/components/Header";
import { Button } from "@/components/Button";

export default function Register() {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [tipo, setTipo] = useState("acidente");
    const [descricao, setDescricao] = useState("");
    const [midia, setMidia] = useState<File | null>(null);

    const router = useRouter();

    const handleNomeCompleto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNomeCompleto(value);
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCpf(value);
    };

    const handleCep = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCep(value);
    };

    const handleTipo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setTipo(value);
    };

    const handleDescricao = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setDescricao(value);
    };

    const handleMidia = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setMidia(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const currentDateTime = new Date().toISOString();

        const url = "http://localhost:8080/relatorios";

        const payload = {
            nomeCompleto: nomeCompleto,
            email: email,
            cpf: cpf,
            cep: cep,
            tipo: tipo,
            descricao: descricao,
            dataHora: currentDateTime,
            midia: midia ? midia.name : null
        };

        console.log("Payload enviado:", payload);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Erro do servidor:", errorText);
                return;
            }

            const data = await response.json();
            console.log("Resposta do servidor:", data); // Mensagem de sucesso ou outra resposta do servidor
            alert("Seus dados foram enviados juntamente com sua localização, obrigado por contribuir com o meio ambiente!");

            // Limpar os campos após o envio
            setNomeCompleto("");
            setEmail("");
            setCpf("");
            setCep("");
            setTipo("Acidente");
            setDescricao("");
            setMidia(null);

        } catch (error) {
            console.error("Erro durante a requisição:", error);
        }
    };

    return (
        <RegisterComponent>
            <Header />
            <BgRegister>
                <h1>
                    O PLANETA PRECISA DE
                    <strong> VOCÊ! </strong>
                    CONTRIBUA
                </h1>
            </BgRegister>
            <FormsContent>
                <form onSubmit={handleSubmit}>
                    <FormsColumn>
                        <FormsRow>
                            <InputContent>
                                <label htmlFor="nome">Nome Completo</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Digite o nome completo"
                                    value={nomeCompleto}
                                    onChange={handleNomeCompleto}
                                    required
                                />
                            </InputContent>
                            <InputContent>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Digite o email"
                                    value={email}
                                    onChange={handleEmail}
                                    required
                                />
                            </InputContent>
                        </FormsRow>
                        <FormsRow>
                            <InputContent>
                                <label htmlFor="cpf">CPF</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    placeholder="Digite o CPF"
                                    value={cpf}
                                    onChange={handleCpf}
                                    required
                                />
                            </InputContent>
                            <InputContent>
                                <label htmlFor="cep">CEP</label>
                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    placeholder="Digite o CEP"
                                    value={cep}
                                    onChange={handleCep}
                                    required
                                />
                            </InputContent>
                        </FormsRow>
                        {/* Select */}
                        <label htmlFor="opcao">Selecione a opção de registro</label>
                        <select
                            id="opcao"
                            name="opcao"
                            onChange={handleTipo}
                            required>
                            <option value="acidente">Acidente</option>
                            <option value="incidente">Incidente</option>
                            <option value="vida marinha">Vida Marinha</option>
                        </select>
                        {/* Text Area */}
                        <label htmlFor="descricao">Escreva uma descrição para o registro</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            placeholder="Conte um pouco pra gente o que aconteceu!"
                            value={descricao}
                            onChange={handleDescricao}
                            required
                        />
                        {/* Files */}
                        <label htmlFor="arquivo">Caso tenha algum arquivo pra anexar, como imagens e outros fique à vontade!</label>
                        <input
                            type="file"
                            id="arquivo"
                            name="arquivo"
                            onChange={handleMidia}
                        />
                        <ButtonGroup>
                            <Button type="button" onClick={() => router.push("/")} size={"small"} color={"green"}>CANCELAR</Button>
                            <Button type="submit" size={"small"} color={"blue"}>ENVIAR</Button>
                        </ButtonGroup>
                    </FormsColumn>
                </form>
            </FormsContent>
        </RegisterComponent>
    );
}
