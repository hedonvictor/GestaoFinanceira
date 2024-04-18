import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
  
    useEffect(() => {
      let currentInstance = null;
  
      if (chartInstance) {
        // Destrói o gráfico existente antes de criar um novo
        chartInstance.destroy();
      }
  
      const data = {
        labels: ['Poupança', 'Renda fixa', 'Renda variável', 'Cripto Moedas',],
        datasets: [{
          label: 'percentual carteira',
          data: [20, 40, 30, 10],
          backgroundColor: [
            'orange',
            '#6456e8',
            'red',
            '#6dba49',
            'purple',
  
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
      <div className="chart-container" style={{ width: '400px', height: '400px' }}>
        <canvas ref={chartRef} />
      </div>
    );
  }
  
  export default PieChart;