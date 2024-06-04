"use client"

import { BgRegister, ButtonGroup, FormsColumn, FormsContent, FormsRow, InputContent, RegisterComponent } from "@/app/styles/register.styles"
import Header from "@/components/Header"
import React from "react"

export default function Register() {
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
                <FormsColumn>
                    <FormsRow>
                        <InputContent>
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" id="nome" name="nome" placeholder="Digite o nome completo" />
                        </InputContent>
                        <InputContent>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Digite o email" />
                        </InputContent>
                    </FormsRow>
                    <FormsRow>
                        <InputContent>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" name="cpf" placeholder="Digite o CPF" />
                        </InputContent>
                        <InputContent>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" name="cep" placeholder="Digite o CEP" />
                        </InputContent>
                    </FormsRow>
                    {/* Select */}
                    <label htmlFor="opcao">Selecione a opção de registro</label>
                    <select id="opcao" name="opcao">
                        <option value="opcao1">Primeira opção</option>
                        <option value="opcao2">Segunda opção</option>
                        <option value="opcao3">Terceira opção</option>
                    </select>
                    {/* Text Area */}
                    <label htmlFor="descricao">Escreva uma descrição para o registro</label>
                    <textarea id="descricao" name="descricao" placeholder="Conte um pouco pra gente o que aconteceu!" />
                    {/* Files */}
                    <label htmlFor="arquivo">Caso tenha algum arquivo pra anexar, como imagens e outros fique à vontade!</label>
                    <input type="file" id="arquivo" name="arquivo" />
                </FormsColumn>
                <ButtonGroup>
                    <button type="button">CANCELAR</button>
                    <button type="submit">ENVIAR</button>
                </ButtonGroup>
            </FormsContent>
        </RegisterComponent>
    )
}