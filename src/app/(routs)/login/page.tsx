"use client"

import { LoginBox, LoginContainer } from "../../styles/login.styles"
import Header from "@/components/Header"

export default function Login() {
    return (
        <LoginContainer>
            <Header />
            <LoginBox>
                <h2>Painel de Administrador</h2>
                <form>
                    <label htmlFor="credencial">Credencial</label>
                    <input type="text" name="username" id="credencial" placeholder="Digite a credencial:" />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite a senha de acesso:" />
                    <button type="submit">Button</button>
                </form>
            </LoginBox>
        </LoginContainer>
    )
}