import React from 'react'
import {Chart as ChartJS} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const SecLineChart = ({topicData}) => {
  const options ={
    plugins: {
      title: {
          display: true,
          text: 'Bar Chart', 
          font: {
              size: 30, 
              weight: 'bold' 
          },
          color: 'white' 
      }
  },
    scales: {
      x: {
  
          ticks: {
              color: 'white' 
          },
     
      },
      y: {
          ticks: {
              color: 'white' 
          },
          grid: {
            display: true,
            color: '#FFFFFF',
            lineWidth: 0.3
        }
      }
  }
  }
  return (
    <div>
       <Bar options={options} data={topicData} />
    </div>
  )
}

export default SecLineChart;
