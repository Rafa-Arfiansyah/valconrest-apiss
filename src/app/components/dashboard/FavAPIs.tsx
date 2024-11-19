"use client";
import React from "react";
import { Badge } from "flowbite-react";
import { Table } from "flowbite-react";
import SimpleBar from "simplebar-react";

const FavAPIs = () => {
  const ApiEndpointData = [
    {
      name: "Remini Image Enhancement API",
      endpoint: "/api/v1/remini",
      maintainer: "Vynaa Valerie",
      usage: "92.5%",
      statusColor: "success",
      statusText: "Healthy",
      type: "REST"
    },
    {
      name: "TikTok Downloader API",
      endpoint: "/api/v1/tiktok",
      maintainer: "Vynaa Valerie",
      usage: "88.4%",
      statusColor: "warning",
      statusText: "High Load",
      type: "REST"
    },
    {
      name: "YouTube Downloader API",
      endpoint: "/api/v1/youtube",
      maintainer: "Vynaa Valerie",
      usage: "95.8%",
      statusColor: "failure",
      statusText: "Critical",
      type: "REST"
    },
    {
      name: "Facebook Downloader API",
      endpoint: "/api/v1/facebook",
      maintainer: "Vynaa Valerie",
      usage: "82.3%",
      statusColor: "success",
      statusText: "Healthy",
      type: "REST"
    },
    {
      name: "Text-to-Speech API",
      endpoint: "/api/v1/tts",
      maintainer: "Vynaa Valerie",
      usage: "68.9%",
      statusColor: "success",
      statusText: "Healthy",
      type: "REST"
    },
    {
      name: "Twitter Downloader API",
      endpoint: "/api/v1/twitter",
      maintainer: "Vynaa Valerie",
      usage: "71.4%",
      statusColor: "warning",
      statusText: "High Load",
      type: "REST"
    }
  ];

  return (
    <>
      <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray pt-6 px-0 relative w-full break-words">
        <div className="px-6">
          <h5 className="card-title mb-6">API Service Status</h5>
        </div>
        <SimpleBar className="max-h-[450px]">
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-6">API Service</Table.HeadCell>
                <Table.HeadCell>Usage</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Daily Requests</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder">
                {ApiEndpointData.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap ps-6">
                      <div className="flex flex-col gap-1">
                        <h6 className="text-sm font-semibold">{item.name}</h6>
                        <p className="text-xs text-gray-500">{item.endpoint}</p>
                        <p className="text-xs text-gray-400">
                          Maintainer: {item.maintainer}
                        </p>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: item.usage }}
                          ></div>
                        </div>
                        <span className="text-sm">{item.usage}</span>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge color={item.statusColor}>
                        {item.statusText}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <h4>{Math.floor(Math.random() * 50000 + 10000).toLocaleString()} reqs</h4>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </SimpleBar>
      </div>
    </>
  );
};

export default FavAPIs;