import React from "react";
import PieChart from "../graphs/PieChart"

import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {

    const { logUser } = useAuth();

        console.log(logUser)
return (
    <>
        <div className="card border-0 d-flex flex-row " style={{ width: '95%' }}>
            <PieChart />
            <div className="ms-5 card-text d-flex flex-column justify-content-center">
                <div className="card border-0 p-3 me-5 ms-3">
                    <h5 className="cardTextDashboard">
                        <i>
                            Olá , {}
                        </i>
                    </h5>
                    <h5>
                        <i>este é seu patrimonio hoje:</i>
                    </h5>
                    <h4>R$: 17.389,53</h4>
                </div>
            </div>
            <div className="ms-5">
                <h2 className="mb-3 ">Novo Investimento</h2>
                <form
                // onSubmit={this.handleSubmit}
                >
                    <div className="mb-3">
                        <label htmlFor="Type">Tipo:</label>
                        <input
                            type=""
                            className="form-control"
                            placeholder=""
                            id="type"
                            name="type"
                            // value={email}
                            // onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Valor:</label>
                        <input
                            type="Value"
                            className="form-control"
                            placeholder="Valor aplicado"
                            id="value"
                            name="value"
                            // value={password}
                            // onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Data de aplicação:</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder=""
                            id="date"
                            name="date"
                            // value={password}
                            // onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Atualizar</button>
                </form>
                {/* <Form>
            <Form.Group>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Digite sua mensagem aqui..."
                />
            </Form.Group>
            <Button variant="primary" >
                Enviar Email
            </Button>
        </Form> */}
            </div>
        </div>
    </>
)
}

export default Dashboard;