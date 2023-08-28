import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const SecBarChart = ({countryData}) => {

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
            <Bar options={options} data={countryData}/>
    </div>
  )
}

export default SecBarChart
