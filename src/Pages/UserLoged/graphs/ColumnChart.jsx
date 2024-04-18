import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const ColumnChart = () => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
  
    useEffect(() => {
      let currentInstance = null;
  
      if (chartInstance) {
        // Destrói o gráfico existente antes de criar um novo
        chartInstance.destroy();
      }
  
      const data = {
        labels: ['nov/23','dez/23','jan/24', 'fev/24', 'mai/24', 'abr/24',],
        datasets: [{
          label: 'Evolução mês a mês',
          data: [11.569, 11.435 ,12.528, 11.789, 14.200, 17.389],
          backgroundColor: [
            '#2a81bf'
          ],
          borderColor: [
            'green',
            'red',
            'green',
            'red',
            'green',
            'green'
          ],
          borderWidth: 1
        }]
      };
  
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
              beginAtZero: true
            }
          }
      };
  
      const ctx = chartRef.current.getContext('2d');
      currentInstance = new Chart(ctx, {
        type: 'bar',
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
      <div className="chart-container" style={{ width: '600px', height: '350px' }}>
        <canvas ref={chartRef} />
      </div>
    );
  }
  
  export default ColumnChart;