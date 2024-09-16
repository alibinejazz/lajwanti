import React from 'react';
import Chart from 'react-apexcharts';

const StackedBarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: true,  
        tools: {
          download: false,  
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 4,
        
      },
    },
    stroke: {
      width: 0,
      colors: ['#36489e',]
    },
    xaxis: {
      categories: [
        '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', 
        '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'
      ],
    },
    yaxis: {
        tickAmount: 10, 
        max: 1000
      },
      grid: {
       
        strokeDashArray: 12, 
        borderColor: '#e0e0e0',
      },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
      
    },
    dataLabels: {
        enabled: false,
      },
      colors:['#36489e', '#d84848'],
      legend:{
        show:false
      },
      
      
      
  };

  const series = [
    {
      name: 'Cached Responses',
      data: [400, 200, 150, 300, 400, 510, 120, 120, 410, 400, 300, 350]
    },
    {
      name: 'Total Queries',
      data: [200, 300, 300, 200, 150, 230, 700, 400, 500, 150, 100, 350]
    }
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default StackedBarChart;
