import React, { useEffect, useState } from "react";
import Topheader from "../Components/Topheader";
import Loginregister from "../Components/setButtons/Loginregister";
import Footer from "../Components/Footer";

import AboutUs from "./Sessions/AboutUS"
import SuportPage from "./Sessions/SuportPage";
import Home from "./Sessions/Home";

const HomeScreen = () => {

    const [section, setSection] = useState(<Home/>);

    useEffect(() => {
        switch (section) {
            case 'Home':
                setSection(<Home/>)
                break;
                case 'About':
                    setSection(<AboutUs />)
                    break;
            case 'Suporte':
                setSection(<SuportPage />)
                break;
            default:
                break;
        }
    }, [section])


    return (
        <div className="d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
            {/* <Topheader navElements={["Home", "Produtos", "Sobre nós", "Suporte"]}  */}
            <Topheader navElements={[
                <span onClick={() => { setSection('Home') }}>Home</span>,
                <span onClick={() => { setSection('Produtos') }}>Produtos</span>,
                <span onClick={() => { setSection('About') }}>Sobre nós</span>,
                <span onClick={() => { setSection('Suporte') }}>Suporte</span>,
            ]} 
            finalItem={<Loginregister />} />
            {section}
            <Footer />
        </div>
    )
}

export default HomeScreen;