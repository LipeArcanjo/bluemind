"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { NotAuthorized } from "../../styles/dashboard.styles"
import Header from "@/components/Header";

export default function Dashboard() {
    const token = sessionStorage.getItem("userToken");
    const fullname = sessionStorage.getItem("fullname");
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("fullname");
        router.push("/");
    };

    return (
        <React.Fragment>
            {token ? (
                <>
                    <h1>Hello, {fullname}!</h1>
                    <span id="logout" onClick={handleLogout}>Sair</span>
                </>
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
