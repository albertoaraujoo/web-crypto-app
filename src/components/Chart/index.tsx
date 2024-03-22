import ReactApexChart from "react-apexcharts";
import { formatPrice } from "../../utils/formatPrice";

export const Chart = ({ prices }: { prices: number[][] | null }) => {
  const dates = prices?.map((priceInfo) =>
    new Date(priceInfo[0]).toISOString()
  );

  const priceData = prices?.map((priceInfo) => priceInfo[1]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "straight",
      colors: ["var(--green-500)"],
      width: [2, 2],
    },
    title: {
      text: "BITCOIN price trend last 24 hours",
      align: "left",
    },

    yaxis: {
      labels: {
        formatter: function (val: number) {
          return formatPrice(val);
        },
      },
      title: {
        text: "PRICES",
      },
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val: number) {
          return new Date(val).toLocaleString(undefined, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
        },
      },
      y: {
        formatter: function (val: number) {
          return `$${formatPrice(val)}`;
        },
      },
    },
  };

  const series = [
    {
      name: "Price",
      data: priceData,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series.map((serie) => ({
        name: serie.name,
        data: serie.data || [],
      }))}
      height={350}
      style={{ width: "100%" }}
    />
  );
};
