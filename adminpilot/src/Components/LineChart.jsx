import React from "react";
import Chart from "react-apexcharts";

const mockData = [
  { year: 1991, value: 30, otherInfo: "Sample info 1" },
  { year: 1992, value: 40, otherInfo: "Sample info 2" },
  { year: 1993, value: 45, otherInfo: "Sample info 3" },
  { year: 1994, value: 50, otherInfo: "Sample info 4" },
  { year: 1995, value: 49, otherInfo: "Sample info 5" },
  { year: 1996, value: 60, otherInfo: "Sample info 6" },
  { year: 1997, value: 70, otherInfo: "Sample info 7" },
  { year: 1998, value: 91, otherInfo: "Sample info 8" }
];

const years = mockData.map(item => item.year);
const values = mockData.map(item => item.value);

const chartConfig = {
  options: {
    chart: {
      id: "basic-bar",
      background: "transparent", // Transparent background
      toolbar: {
        show: false, // Hide toolbar
      },
    },
    xaxis: {
      categories: years
    },
    colors: ['#3b7cb6'],
    grid: {
      show: true, // Show grid lines
      borderColor: 'rgba(255, 255, 255, 0.1)', // Transparent grid lines
    },
    plotOptions: {
      bar: {
        columnWidth: '20%', // Reduces the bar width (50% of default)
        borderRadius: 1.5 // Optional: adds rounded corners to bars
      }
    },
    fill: {
      opacity: 1
    },
    dataLabels: {
      enabled: false // Disable data labels for a cleaner look
    }
  },
  series: [
    {
      name: "Value Series",
      data: values
    }
  ]
};

const LineChart = () => {
  return (
    <div className="app">
      <div className="mixed-chart w-full h-auto"> {/* Tailwind's full width and automatic height */}
        <Chart
          options={chartConfig.options}
          series={chartConfig.series}
          type="bar"
          width="100%" // Set to 100% to make it responsive
        />
      </div>
    </div>
  );
};

export default LineChart;
