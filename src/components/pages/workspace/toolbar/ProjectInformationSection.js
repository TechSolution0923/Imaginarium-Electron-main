import * as React from "react";
import ReactApexChart from "react-apexcharts";

// core components
import { Dropdown } from "../../../core/dropdown";

export default function ProjectInformationSection() {
  const menus = ["Trait 1", "Trait 2", "Trait 3"];
  const series1 = [15, 13];
  const options1 = {
    tooltip: {
      fillSeriesColor: false,
    },
    chart: {
      redrawOnWindowResize: true,
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
    colors: ["#1BA1E2", "#AA00FF"],
    stroke: {
      colors: ["#1BA1E2", "#AA00FF"],
      width: "1",
    },
    labels: ["Male", "Female"],
    dataLabels: {
      enabled: false,
    },
    subtitle: {
      text: "15 M / 13 F",
      align: "center",
      offsetY: 100,
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
      lineHeight: 20,
      formatter: undefined,
      inverseOrder: false,
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
        strokeColor: "#FFFFFF",
        fillColors: "#FFFFFF",
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
      onItemClick: {
        toggleDataSeries: true,
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

  const series2 = [18, 25, 20, 12];
  const options2 = {
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
    chart: {
      type: "donut",
    },
    colors: ["#008A00", "#A4C400", "#F0A30A", "#825A2C"],
    stroke: {
      colors: ["#008A00", "#A4C400", "#F0A30A", "#825A2C"],
      width: "1",
    },
    labels: ["Kid-18", "19-25", "26-40", "41-Older"],
    dataLabels: {
      enabled: false,
    },
    subtitle: {
      text: "18 / 25 / 20 / 12",
      align: "center",
      offsetY: 115,
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
      lineHeight: 20,
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
      onItemClick: {
        toggleDataSeries: true,
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

  const series3 = [30, 25, 20];
  const options3 = {
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
    chart: {
      type: "donut",
    },
    colors: ["#FFFFFF", "#2B2B2B", "#E3C800"],
    stroke: {
      colors: ["#FFFFFF", "#2B2B2B", "#E3C800"],
      width: "1",
    },
    labels: ["White", "Black", "Asian"],
    dataLabels: {
      enabled: false,
    },
    subtitle: {
      text: "30 / 25 / 20",
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
      lineHeight: 20,
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
      onItemClick: {
        toggleDataSeries: true,
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
    <div className="flex flex-col divide-y divide-[#2B2B2B] max-h-[calc(100vh-154px)] overflow-scroll">
      <div className="w-full h-16 p-4">
        <div className="grid grid-cols-2 gap-2">
          <Dropdown menus={menus} />
          <Dropdown menus={menus} />
        </div>
      </div>
      <div id="chart1">
        <div className="w-full h-68 p-4">
          <h1 className="uppercase text-[9px] text-white font-extrabold leading-5 tracking-[.21rem]">
            Gender
          </h1>
          <ReactApexChart options={options1} series={series1} type="donut" />
        </div>
      </div>
      <div id="chart2">
        <div className="w-full h-68 p-4">
          <h1 className="uppercase text-[9px] text-white font-extrabold leading-5 tracking-[.21rem]">
            Age
          </h1>
          <ReactApexChart options={options2} series={series2} type="donut" />
        </div>
      </div>
      <div id="chart3">
        <div className="w-full h-68 p-4">
          <h1 className="uppercase text-[9px] text-white font-extrabold leading-5 tracking-[.21rem]">
            Race Stats
          </h1>
          <ReactApexChart
            options={options3}
            series={series3}
            type="donut"
            height="256px"
          />
        </div>
      </div>
    </div>
  );
}
