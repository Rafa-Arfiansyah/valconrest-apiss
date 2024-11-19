import React from "react";

const PrimbonApiPage = () => {
  const BASE_URL = "https://valconrest.my.id/api/v1";

  const apis = [
    {
      name: "Arti Mimpi",
      description: "Arti Mimpi Seseorang",
      method: "GET",
      endpoint: "/arti-mimpi",
      params: ["apikey","text"],
      viewType: "json",
    },
    {
      name: "Arti Nama",
      description: "Arti Nama seseorang", 
      method: "GET",
      endpoint: "/arti-nama",
      params: ["apikey","text"],
      viewType: "json",
    },
    {
      name: "Hari Baik",
      description: "Hari Baik",
      method: "GET", 
      endpoint: "/hari-baik",
      params: ["apikey", "tgl"],
      viewType: "json",
    },
    {
      name: "Hari Larangan",
      description: "Hari Larangan",
      method: "GET",
      endpoint: "/hari-larangan",
      params: ["apikey", "tgl"],
      viewType: "json",
    },
    {
      name: "Jodoh",
      description: "Jodoh",
      method: "GET",
      endpoint: "/jodoh",
      params: ["apikey","name1", "name2"],
      viewType: "json", 
    },
    {
      name: "Kecocokan Nama",
      description: "Kecocokan Nama",
      method: "GET",
      endpoint: "/kecocokan-nama",
      params: ["apikey", "tgl", "name"], 
      viewType: "json",
    },
    {
      name: "Ramalan Jodoh",
      description: "Ramalan Jodoh",
      method: "GET", 
      endpoint: "/ramalan-jodoh",
      params: ["apikey", "tgl1","tgl2", "name", "name2"],
      viewType: "json",
    },
    {
      name: "Rejeki Weton",
      description: "Rejeki Weton",
      method: "GET",
      endpoint: "/rejeki-weton",
      params: ["apikey", "tgl"],
      viewType: "json",
    },
    {
      name: "Tanggal Jadian",
      description: "Tanggal Jadian",
      method: "GET", 
      endpoint: "/tanggal-jadian", 
      params: ["apikey", "tgl"],
      viewType: "json",
    }
  ];
  
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apis.map((api, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg hover:border-blue-500 transition-colors bg-white"
          >
            <div className="p-6">
              <div className="mb-4">
                <h5 className="text-xl font-bold text-gray-900">{api.name}</h5>
                <p className="text-gray-600 mt-1">{api.description}</p>
              </div>
            
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-700">Method:</span>
                  <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">{api.method}</code>
                </div>
                
                <div>
                  <span className="text-sm font-semibold text-gray-700">Endpoint:</span>
                  <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm break-all">
                    {BASE_URL}{api.endpoint}
                  </code>
                </div>
                
                <div>
                  <span className="text-sm font-semibold text-gray-700">Parameters:</span>
                  <div className="mt-1">
                    {api.params.map((param, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a  
                  href={`${BASE_URL}${api.endpoint}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View {api.viewType.toUpperCase()}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimbonApiPage;