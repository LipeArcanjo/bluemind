"use client"

import React from "react";

export default function Dashboard() {
    const token = sessionStorage.getItem("userToken");
    const fullname = sessionStorage.getItem("fullname");

    return (
        <React.Fragment>
            {token ? (
                <h1>Hello, {fullname}!</h1>
            ) : (
                <h1>Você não está autorizado a acessar esta página, por favor faça login e tente novamente.</h1>
            )}
        </React.Fragment>
    );
}
