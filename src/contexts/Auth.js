import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, [user]);

    const signin = (email, password, firstName, lastName) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));
        const hasUser = usersStorage?.filter((user) => user.email === email);


        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("users_token", JSON.stringify({ email, token }));
                setUser({ email, password, firstName, lastName });

                return;
            } else {
                return "E-mail ou senha incorretos"
            }
        } else {
            return "Usuário não encontrado";
        }

    };

    const signup = (email, password, firstName, lastName) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Este e-mail já esta sendo utilizado";
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password, firstName, lastName }];
        } else {
            newUser = [{ email, password, firstName, lastName }];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout, user }}
        >
            {children}
        </AuthContext.Provider>
    )
}