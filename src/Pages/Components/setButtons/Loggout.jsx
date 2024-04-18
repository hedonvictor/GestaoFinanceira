import React from "react";
import { useNavigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth";

const Loggout = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target.id === "logoutButton") {
            signout();
            navigate("/")
        }
    }

    return (
        <form className="m-4">
            <button
            id="lougoutButton"
                className="btn btn-danger ps-5 pe-5 p-2"
                onClick={handleClick}>
                Sair
            </button>
        </form>
    )
}


export default Loggout;