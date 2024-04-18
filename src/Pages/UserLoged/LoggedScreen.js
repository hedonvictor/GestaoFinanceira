import React, { useEffect, useState } from "react";


import Footer from "../Components/Footer";
import Topheader from "../Components/Topheader";
import Loggout from "../Components/setButtons/Loggout";
import "./UserLoged.css"
import Dashboard from "./components/Dashboard";
import WalletDetail from "./components/WalletDetail";
import Evolution from "./components/Evolution";
import FinanceControl from "./components/FinanceControl";

const LoggedScreen = () => {


    var [section, setSection] = useState(<Dashboard />)
    var [titleSection, setTitleSection] = useState('Sua posição em investimentos')

    useEffect(() => {
        switch (section) {
            case 'Dashboard':
                setSection(<Dashboard />)
                setTitleSection("Sua posição em investimentos")
                break;
            case 'Carteira':
                setSection(<WalletDetail />)
                setTitleSection("Seus ativos em Carteira")
                break;
            case 'Evolucao':
                setSection(<Evolution />)
                setTitleSection("Evolução de patrimônio")
                break;
            case 'Entradas':
                setSection(<FinanceControl />)
                setTitleSection("Controle Financeiro")
                break;
            default:
                break;
        }
    }, [section, titleSection])

    return (
        <div className="d-flex flex-column justify-content-between" style={{height: "100vh",}}>
            <Topheader navElements={[
                <span onClick={() => { setSection('Dashboard') }}>Dashboard</span>,
                <span onClick={() => { setSection('Carteira') }}>Carteira</span>,
                <span onClick={() => { setSection('Evolucao') }}>Evolução</span>,
                <span onClick={() => { setSection('Entradas') }}>Entradas</span>,
            ]}
            finalItem={<Loggout/>}
             />
            <h2 className="mt-5 " style={{marginLeft: '8%',}}>{titleSection}</h2>
            <hr className="mb-4"/>
            <section className="container mt-5 mb-5 ">
                {section}
            </section>
            <Footer />
        </div>
    )
}

export default LoggedScreen;
