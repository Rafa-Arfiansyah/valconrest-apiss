import React from "react";

const DownloadApiPage = () => {
  const BASE_URL = "https://valconrest.my.id/api/v1";

  const apis = [
    {
      name: "Facebook",
      description: "Download Facebook Videos",
      method: "GET",
      endpoint: "/facebook",
      params: ["apikey", "url"],
      viewType: "json",
    },
    {
      name: "Google Drive",
      description: "Download Google Drive Files",
      method: "GET",
      endpoint: "/gdrive",
      params: ["apikey", "url"], 
      viewType: "json",
    },
    {
      name: "Instagram",
      description: "Download Instagram Reels, Post, Videos",
      method: "GET", 
      endpoint: "/instagram",
      params: ["apikey", "url"],
      viewType: "json",
    },
    {
      name: "Instagram2",
      description: "Download Instagram Reels, Post, Videos",
      method: "GET",
      endpoint: "/instagram2",
      params: ["apikey", "url"], 
      viewType: "json",
    },
    {
      name: "Mediafire",
      description: "Download Mediafire Link",
      method: "GET",
      endpoint: "/mediafire",
      params: ["apikey", "url"],
      viewType: "json",
    },
    {
      name: "Spotify",
      description: "Download Spotify Songs",
      method: "GET",
      endpoint: "/spotify",
      params: ["apikey", "url"],
      viewType: "json",
    },
    {
      name: "Tiktok",
      description: "Download Tiktok Videos",
      method: "GET",
      endpoint: "/tiktok",
      params: ["apikey", "url"],
      viewType: "json",
    },
    {
      name: "Twitter / X",
      description: "Download Twitter & X Videos",
      method: "GET",
      endpoint: "/twitter",
      params: ["apikey", "url"],
      viewType: "json", 
    },
    {
      name: "Youtube",
      description: "Get Data From Youtube",
      method: "GET",
      endpoint: "/youtube",
      params: ["apikey", "url"],
      viewType: "json",  
    },
    {
      name: "Youtube MP4",
      description: "Download Youtube Videos",
      method: "GET",
      endpoint: "/youtube-mp4",
      params: ["apikey", "url"],
      viewType: "json",
    },
    {
      name: "Youtube Play (MP3)",
      description: "Download Youtube Music",
      method: "GET",
      endpoint: "/youtube-play",
      params: ["apikey","url"],
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

export default DownloadApiPage;