import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  // Mock data
  const mockData = {
    values: [41, 17]
  };

  // Chart configuration using the provided data
  const chartConfig = {
    options: {
      chart: {
        type: 'donut',
        background: 'transparent', // Transparent background
        toolbar: {
          show: false // Hide toolbar
        }
      },
      stroke: {
        curve: 'smooth', // Smooth curve
        width: 0.1 // Width of the line
      },
      labels: ['', ''], // Labels for the categories
      plotOptions: {
        pie: {
          donut: {
            size: '60%' // Adjust size of the donut hole
          }
        }
      },
      legend: {
        show: false // Hide legend
      },
      dataLabels: {
        enabled: true // Disable data labels inside the chart for cleaner look
      },
      fill: {
        opacity: 1 // Adjust fill opacity for the donut segments
      },
      colors: ['#3b7cb6', '#f29d42'] // Custom colors for the chart
    },
    series: mockData.values // Data for the donut chart
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 py-4 space-y-4 md:space-y-0">
      {/* Side Cards */}
      <div className="flex flex-col space-y-4 mb-24 max-md:hidden">
        <div className="flex flex-col items-center justify-center bg-white border-2 border-blue-500 rounded-lg p-4 shadow-md">
          <h3 className="text-2xl font-bold">{mockData.values.reduce((a, b) => a + b, 0)}</h3>
          <p className="text-sm text-gray-500">Total Organization</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white border-2 border-yellow-500 rounded-lg p-4 shadow-md">
          <h3 className="text-2xl font-bold">{mockData.values[1]}</h3>
          <p className="text-sm text-gray-500">This Month</p>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="w-full max-w-xl h-auto md:w-96 md:h-96">
        <Chart options={chartConfig.options} series={chartConfig.series} type="donut" />
      </div>
    </div>
  );
};

export default DonutChart;
