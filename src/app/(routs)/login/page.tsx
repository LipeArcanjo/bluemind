"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginBox, LoginContainer } from "../../styles/login.styles"
import Header from "@/components/Header"
import { Button } from "@/components/Button";

export default function Login() {

    const [credencial, setCredencial] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();

    const handleLogin = async (event: any) => {
        event.preventDefault();

        const url = "http://localhost:8000/login";

        const payload = {
            credencial: credencial,
            senha: senha
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                if (response.status === 404) {
                    alert("Credencial e/ou senha inválidos.");
                } else {
                    const error = await response.json();
                    console.log(error);
                }
                return;
            }

            const data = await response.json();

            if (data) {
                sessionStorage.setItem("userToken", data.token);
                sessionStorage.setItem("fullname", data.fullname);
                router.push("/dashboard");
            }

        } catch (error) {
            console.log(error);
        } finally {
            console.log("Credencial:", credencial);
            console.log("Senha:", senha);
        }
    };

    return (
        <LoginContainer>
            <Header />
            <LoginBox>
                <h2>Painel de Administrador</h2>
                <form onSubmit={handleLogin}>
                    {/* Credencial */}
                    <label htmlFor="credencial">Credencial</label>
                    <input
                        type="text"
                        name="username"
                        id="credencial"
                        placeholder="Digite a credencial:"
                        value={credencial}
                        onChange={(e) => setCredencial(e.target.value)}
                    />
                    {/* Senha */}
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite a senha de acesso:"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <Button type="submit" size={"small"} color={"blue"}>Button</Button>
                </form>
            </LoginBox>
        </LoginContainer>
    )
}