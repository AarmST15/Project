import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, BarElment, CategoryScale, LineScale } from 'chart.js/auto';
import './LineChart.css'



const data = {
  labels:['sale', 'full','order','full'],
  datasets: [
    
    {
      data: [80, 100,0,0],
      backgroundColor: [ '#19A7CE','#F6F1F1','#ff5e96','#F6F1F1'],
      borderWidth: 5,
      weight: 1, // will be half as thick
    },
    {
      
      data: [0,0,20, 100],
      backgroundColor: ['#19A7CE','#F6F1F1','#ff5e96','#F6F1F1'],
      borderWidth: 5,
      weight: 1
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};


const LineChart = () => {
  return (
    <div>
      <h6>Analytics</h6>
      <Doughnut data={data} options={options}/>
      
    </div>
  );
};

export default LineChart;