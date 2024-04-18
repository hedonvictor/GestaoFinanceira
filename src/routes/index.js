import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Pages/Home/HomeScreen";
import Register from "../Pages/Register";
import LoginScreen from "../Pages/LoginScreen";
import LoggedScreen from "../Pages/UserLoged/LoggedScreen";
import useAuth from "../hooks/useAuth";


const Private = ({Item}) => {
    const  { signed } = useAuth();

    return signed > 0 ? <Item/> : <LoginScreen/>;
}

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/LoggedScreen" element={<Private Item={LoggedScreen}/>} />
                    <Route exact path="/" element={<HomeScreen/>} />
                    <Route exact path="/Register" element={<Register/>} />
                    <Route exact path="/LoginScreen" element={<LoginScreen/>} />
                    <Route path="*" element={<HomeScreen/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}