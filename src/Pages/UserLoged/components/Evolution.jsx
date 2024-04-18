import React from "react";
import ColumnChart from "../graphs/ColumnChart";

const Evolution = () => {
    return (
        <>
            <div className="card border-0 d-flex flex-row justify-content-center" style={{ width: '95%' }}>
                <ColumnChart />
                <div className="ms-5 card-text d-flex flex-column justify-content-center">
                    <div className="card border-0 p-3">
                        <h3>No periodo:</h3>
                        <h5 className="mt-3 cardTextDashboard">
                            <i>
                                Rendimento
                            </i>
                        </h5>
                        <h4 style={{ color: '#0B8944' }}>R$: 5.820,53</h4>
                    </div>
                    <div className="card border-0 p-3 ">
                        <h5 className="cardTextDashboard">
                            <i>
                                Rentablididade
                            </i>
                        </h5>
                        <h4 style={{ color: '#0B8944' }}>53,27%</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evolution;