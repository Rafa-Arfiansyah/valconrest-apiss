import React from "react";

const ToolsApiPage = () => {
  const BASE_URL = "https://valconrest.my.id/api/v1";

  const apis = [
    {
      name: "Blur",
      description: "Menerapkan efek blur pada gambar.",
      method: "GET",
      endpoint: "/blur",
      params: ["apikey", "url", "sigma"],
      viewType: "jpg",
    },
    {
      name: "Colorize",
      description: "Meningkatkan saturasi warna gambar.",
      method: "GET",
      endpoint: "/colorize",
      params: ["apikey", "url"],
      viewType: "jpg",
    },
    {
      name: "Crop",
      description: "Memotong bagian tertentu dari gambar.",
      method: "GET",
      endpoint: "/crop",
      params: ["apikey", "url", "width", "height", "left", "top"],
      viewType: "jpg",
    },
    {
      name: "Dehaze",
      description: "Mengurangi kabut untuk memperjelas gambar.",
      method: "GET",
      endpoint: "/dehaze",
      params: ["apikey", "url"],
      viewType: "jpg",
    },
    {
      name: "Google Image",
      description: "Mencari gambar di Google.",
      method: "GET",
      endpoint: "/google-image",
      params: ["apikey", "text"],
      viewType: "json",
    },
    {
      name: "Grayscale",
      description: "Mengonversi gambar menjadi hitam-putih.",
      method: "GET",
      endpoint: "/grayscale",
      params: ["apikey", "url"],
      viewType: "jpg",
    },
    {
      name: "Kenon Wa",
      description: "Menonaktifkan akun WhatsApp dengan report.",
      method: "GET",
      endpoint: "/kenon-wa",
      params: ["apikey", "number"],
      viewType: "json",
    },
    {
      name: "Remini",
      description: "Meningkatkan kualitas gambar.",
      method: "GET",
      endpoint: "/remini",
      params: ["apikey", "url"],
      viewType: "jpg",
    },
    {
      name: "Resize",
      description: "Mengubah ukuran gambar.",
      method: "GET",
      endpoint: "/resize",
      params: ["apikey", "url", "width", "height"],
      viewType: "jpg",
    },
    {
      name: "Text To Speech",
      description: "Mengubah teks menjadi suara (Google TTS).",
      method: "GET",
      endpoint: "/text-to-speech",
      params: ["apikey", "text"],
      viewType: "mp3",
    },
    {
      name: "Translate En-Id",
      description: "Menerjemahkan teks dari Inggris ke Indonesia.",
      method: "GET",
      endpoint: "/translate-en-id",
      params: ["apikey", "text"],
      viewType: "json",
    },
    {
      name: "Translate Id-En",
      description: "Menerjemahkan teks dari Indonesia ke Inggris.",
      method: "GET",
      endpoint: "/translate-id-en",
      params: ["apikey", "text"],
      viewType: "json",
    },
    {
      name: "Unban",
      description: "Membuka blokir akun WhatsApp.",
      method: "GET",
      endpoint: "/unban",
      params: ["apikey", "number"],
      viewType: "jpg",
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

export default ToolsApiPage;
