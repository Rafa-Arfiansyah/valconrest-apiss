"use client";
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Icon } from "@iconify/react";
import { Badge } from "flowbite-react";

const ReqStats = () => {
  const ChartData: any = {
    series: [
      {
        name: "total requests",
        color: "var(--color-primary)",
        data: [100, 200, 150, 300, 250, 400],
      },
    ],
    chart: {
      id: "total-requests",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [20, 180],
      },
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-lightprimary text-primary p-3 rounded-md">
            <Icon icon="mdi:user-group" height={24} />
          </div>
          <p className="text-lg font-semibold text-dark">Total Requests</p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="text-xl text-dark font-medium mb-2">3,500</p>
            <Badge className={`bg-lightsuccess text-success `}>
              +25%
            </Badge>
            <p className="text-success text-xs"></p>
          </div>
          <div className="rounded-bars flex-1 md:ps-7">
            <Chart
              options={ChartData}
              series={ChartData.series}
              type="area"
              height="60px"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReqStats;