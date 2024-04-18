import React from "react";
import InputSection from "../components/inputSection"
import InputSection2 from "../components/InputSection2";
import PieChart2 from "../graphs/PieChart2"


export default function FinanceControl() {
    return (
        <div>
            <div className="container d-flex flex-row">
                <div className="m-5">
                    <InputSection />
                </div>
                <div className="m-5">
                    <InputSection2 />
                </div>
                <PieChart2 />
            </div>
        </div>
    )
}