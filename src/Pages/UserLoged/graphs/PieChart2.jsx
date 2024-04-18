import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const PieChart2 = () => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        let currentInstance = null;

        if (chartInstance) {
            // Destrói o gráfico existente antes de criar um novo
            chartInstance.destroy();
        }

        const data = {
            labels: '',
            datasets: [{
                label: ['Entradas', 'Sáidas'],
                data: [60, 40],
                backgroundColor: [
                    '#0DCAF0',
                    '#DC3545'

                ],
                hoverOffset: 4
            }]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false
        };

        const ctx = chartRef.current.getContext('2d');
        currentInstance = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options
        });

        // Atualiza o estado com a instância do gráfico
        setChartInstance(currentInstance);

        // Retorne uma função de limpeza para destruir o gráfico ao desmontar o componente
        return () => {
            if (currentInstance) {
                currentInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="ms-5 mt-5">
            <h3>Seu saldo mensal consolidado:</h3>
            <div className="chart-container" style={{ width: '200px', height: '200px' }}>
                <canvas ref={chartRef} />
            </div>
            <div className="mt-3 card cardTextDashboard border-0">
                <div className="ms-3">
                    <h5 className="mt-3">
                        <i>Você esta com dinheiro</i>
                    </h5>
                    <h5>
                        <i>sobrando neste mês.</i>
                    </h5>
                    <h5>
                        Parabens!
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default PieChart2;