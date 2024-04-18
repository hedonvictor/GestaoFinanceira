import React from "react";
import { useNavigate } from "react-router-dom"

const Loginregister = () => {
    const navigate = useNavigate();

    return (
        <form className="m-4 d-flex flex-row" style={{ color: "white" }}>
            <button
                onClick={() => navigate("/LoginScreen")}
                className="btn"
                style={{
                    fontSize: "24px",
                }}>
                Entrar
            </button>
            <button
                onClick={() => navigate("/Register")}
                className="btn btn-primary">
                Crie sua conta
            </button>
        </form>
    )
}


export default Loginregister;