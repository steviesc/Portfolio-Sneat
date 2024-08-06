import React from "react";
import Chart from "react-apexcharts";

const RevenueChart = () => {
  const series = [
    {
      name: "2023",
      data: [10, 15, 20, 25, 30, 35, 40],
    },
    {
      name: "2022",
      data: [-5, -10, -15, -20, -25, -30, -35],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "Revenue",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val} thousands`,
      },
    },
    colors: ["#6851f1", "#20c997"],
  };

  return <Chart options={options} series={series} type="bar" height={312} />;
};

export default RevenueChart;
