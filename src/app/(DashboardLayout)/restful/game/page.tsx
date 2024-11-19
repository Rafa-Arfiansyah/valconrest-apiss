import React from "react";

const GamesApiPage = () => {
  const BASE_URL = "https://valconrest.my.id/api/v1";

  const games = [
    {
      name: "Cak Lontong",
      description: "Menampilkan Random Cak Lontong",
      method: "GET",
      endpoint: "/cak-lontong",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Cek Kodam",
      description: "Menampilkan Kodam Random",
      method: "GET",
      endpoint: "/cek-kodam",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Bendera",
      description: "Menampilkan bendera acak",
      method: "GET",
      endpoint: "/tebak-bendera",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Gambar",
      description: "Menampilkan Random Tebak Gambar",
      method: "GET",
      endpoint: "/tebak-gambar",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Hewan Nyeleneh",
      description: "Menebak Gambar Hewan",
      method: "GET",
      endpoint: "/tebak-hewan-nyeleneh",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Kalimat",
      description: "Menampilkan Random Tebak Kalimat",
      method: "GET",
      endpoint: "/tebak-kalimat",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Kata",
      description: "Menampilkan Random Tebak Kata",
      method: "GET",
      endpoint: "/tebak-kata",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Lagu",
      description: "Menampilkan Random Tebak Lagu",
      method: "GET",
      endpoint: "/tebak-lagu",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Lirik",
      description: "Menampilkan Random Tebak Lirik",
      method: "GET",
      endpoint: "/tebak-lirik",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Tebak Pemain Bola",
      description: "Menampilkan Pemain bola terkenal secara acak",
      method: "GET",
      endpoint: "/tebak-pemain-bola",
      params: ["apikey"],
      viewType: "json",
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg hover:border-blue-500 transition-colors bg-white"
          >
            <div className="p-6">
              <div className="mb-4">
                <h5 className="text-xl font-bold text-gray-900">{game.name}</h5>
                <p className="text-gray-600 mt-1">{game.description}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-700">Method:</span>
                  <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">{game.method}</code>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">Endpoint:</span>
                  <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm break-all">
                    {BASE_URL}{game.endpoint}
                  </code>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">Parameters:</span>
                  <div className="mt-1">
                    {game.params.map((param, idx) => (
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
                  href={`${BASE_URL}${game.endpoint}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View {game.viewType.toUpperCase()}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesApiPage;
