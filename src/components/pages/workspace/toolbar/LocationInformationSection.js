import * as React from "react";
import ReactApexChart from "react-apexcharts";

export default function LocationInformationSection() {
  const series = [1, 2, 2];
  const options = {
    tooltip: {
      fillSeriesColor: false,
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: "75%",
        },
        expandOnClick: false,
      },
    },
    colors: ["#6DB95A", "#DD5E5E", "#5F5F5F"],
    stroke: {
      colors: ["#6DB95A", "#DD5E5E", "#5F5F5F"],
      width: "1",
    },
    height: "256",
    labels: ["Confirmed", "Unconfirmed", "Pending"],
    dataLabels: {
      enabled: false,
    },
    subtitle: {
      text: "5 scenes",
      align: "center",
      offsetY: 110,
      floating: false,
      style: {
        fontSize: "12px",
        fontWeight: "normal",
        fontFamily: "Mulish",
        color: "#FFFFFF",
      },
    },
    borderColor: "#ff0000",
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "12px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: "#FFFFFF",
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="flex flex-col border-y border-[#2B2B2B] divide-y divide-[#2B2B2B] max-h-[calc(100vh-154px)] overflow-scroll">
      <div className="w-full h-68 p-4">
        <h1 className="uppercase text-[9px] text-white font-extrabold leading-5 tracking-[.21rem]">
          Confirmation Statistics
        </h1>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 ">
        <h3 className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
          Total Budget Details
        </h3>
        <div className="w-full flex flex-row">
          <p className="w-1/2 text-[12px] text-white leading-5">Locations:</p>
          <p className="w-1/2 text-[12px] text-white leading-5">$21600</p>
        </div>
        <div className="w-full flex flex-row">
          <p className="w-1/2 text-[12px] text-white leading-5">
            Dressing Room:
          </p>
          <p className="w-1/2 text-[12px] text-white leading-5">$21600</p>
        </div>
        <div className="w-full flex flex-row">
          <p className="w-1/2 text-[12px] text-white leading-5">Make-up:</p>
          <p className="w-1/2 text-[12px] text-white leading-5">$21600</p>
        </div>
      </div>
    </div>
  );
}
