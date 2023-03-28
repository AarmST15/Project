import React from 'react'
import {Bar} from 'react-chartjs-2'



const data = {
    
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'income',
        data: [1500, 1800, 2000, 1900, 2200, 2400, 2300, 2500, 2700, 3000, 2800, 3200],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgb(54, 162, 235)'],      
        borderWidth: 1
      },
      
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

const Barchart = () => {

  return (
    <div>
      <h6>Total Spent</h6>
      <Bar data={data} options={options} />
    </div>
  )
}

export default Barchart
