import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

export default function useAuth () {
    const context = useContext(AuthContext);

    return context;
}