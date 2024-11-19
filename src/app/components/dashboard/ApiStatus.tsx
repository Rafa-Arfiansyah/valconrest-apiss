"use client";
import React from "react";
import { Progress } from "flowbite-react";
import { Icon } from "@iconify/react";

const ApiStatus = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-lightsecondary text-secondary p-3 rounded-md">
            <Icon icon="mdi:api" height={24} />
          </div>
          <p className="text-lg text-dark font-semibold">API Status</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-dark">Uptime</p>
          <p className="text-sm text-dark">99.8%</p>
        </div>
        <Progress progress={99.8} color="green" />
        <div className="flex items-center justify-between mt-6 mb-3">
          <p className="text-sm text-dark">Response Time</p>
          <p className="text-sm text-dark">150ms</p>
        </div>
        <Progress progress={85} color="blue" />
        <div className="flex items-center justify-between mt-6 mb-3">
          <p className="text-sm text-dark">Error Rate</p>
          <p className="text-sm text-dark">0.2%</p>
        </div>
        <Progress progress={0.2} color="red" />
      </div>
    </>
  );
};


export default ApiStatus;
