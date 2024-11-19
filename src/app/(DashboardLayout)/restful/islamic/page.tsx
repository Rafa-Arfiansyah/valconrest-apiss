import React from "react";

const IslamicApiPage = () => {
  const BASE_URL = "https://valconrest.my.id/api/v1";
  
  const apis = [
    {
      name: "Cari Doa",
      description: "Menampilkan doa berdasarkan kata kunci",
      method: "GET",
      endpoint: "/cari-doa",
      params: ["apikey", "q"],
      viewType: "json",
    },
    {
      name: "Cari Surah",
      description: "Menampilkan surah berdasarkan kata kunci",
      method: "GET",
      endpoint: "/cari-surah",
      params: ["apikey", "q"],
      viewType: "json",
    },
    {
      name: "Doa",
      description: "Menampilkan doa berdasarkan id",
      method: "GET",
      endpoint: "/doa",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Doa Random",
      description: "Menampilkan doa secara acak",
      method: "GET",
      endpoint: "/doa-random",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Hadits Random",
      description: "Menampilkan Hadits Secara Acak",
      method: "GET",
      endpoint: "/hadits-random",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Jadwal Sholat Bulanan",
      description: "Menampilkan Jadwal sholat bulan ini",
      method: "GET",
      endpoint: "/jadwal-sholat-bulanan",
      params: ["apikey", "kota"],
      viewType: "json",
    },
    {
      name: "Jadwal Sholat Harian",
      description: "Menampilkan Jadwal sholat hari ini",
      method: "GET",
      endpoint: "/jadwal-sholat-harian",
      params: ["apikey", "kota"],
      viewType: "json",
    },
    {
      name: "Semua Doa",
      description: "Menampilkan semua doa islami",
      method: "GET",
      endpoint: "/semua-doa",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Semua Surah",
      description: "Menampilkan semua surah islami",
      method: "GET",
      endpoint: "/semua-surah",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Surah",
      description: "Menampilkan surah berdasarkan id",
      method: "GET",
      endpoint: "/surah",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Surah Random",
      description: "Menampilkan surah secara acak",
      method: "GET",
      endpoint: "/surah-random", 
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Zikir",
      description: "Menampilkan Zikir",
      method: "GET",
      endpoint: "/zikir",
      params: ["apikey"],
      viewType: "json",
    },
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

export default IslamicApiPage;