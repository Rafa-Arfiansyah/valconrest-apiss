import React from "react";

const FunApiPage = () => {
  const BASE_URL = "https://valconrest.my.id/api/v1";

  const apis = [
    {
      name: "Cecan",
      description: "Menampilkan cewe cantik Random",
      method: "GET",
      endpoint: "/cecan",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "China",
      description: "Menampilkan China Random",
      method: "GET",
      endpoint: "/china",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Cogan",
      description: "Menampilkan cowo ganteng Random",
      method: "GET",
      endpoint: "/cogan", 
      params: ["apikey"],
      viewType: "jpg", 
    },
    {
      name: "Cosplay",
      description: "Menampilkan Cosplay Random",
      method: "GET",
      endpoint: "/cosplay",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Darkjoke",
      description: "Menampilkan darkjoke Random",
      method: "GET",
      endpoint: "/darkjoke",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Dilan Quotes",
      description: "Random Dilan Quotes",
      method: "GET",
      endpoint: "/dilan",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Fakta Unik",
      description: "Random Fakta Unik",
      method: "GET",
      endpoint: "/fakta",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Hacker",
      description: "Menampilkan hacker Random",
      method: "GET",
      endpoint: "/hacker",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Jawa Quotes",
      description: "Random Jawa Quotes",
      method: "GET", 
      endpoint: "/jawa-quote",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Kucing",
      description: "Menampilkan kucing Random",
      method: "GET",
      endpoint: "/kucing",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Meme Indo", 
      description: "Menampilkan memeindo Random",
      method: "GET",
      endpoint: "/memeindo",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Meme World",
      description: "Menampilkan memeworld Random",
      method: "GET",
      endpoint: "/memeworld",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Motivasi",
      description: "Random Motivasi",
      method: "GET",
      endpoint: "/motivasi",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Pantun",
      description: "Random Pantun",
      method: "GET",
      endpoint: "/pantun",
      params: ["apikey"],
      viewType: "json", 
    },
    {
      name: "Profil",
      description: "Menampilkan profil Random",
      method: "GET",
      endpoint: "/profil",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Pubg",
      description: "Menampilkan pubg Random",
      method: "GET",
      endpoint: "/pubg",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Random Jokes",
      description: "Menampilkan Jokes Random",
      method: "GET",
      endpoint: "/random-jokes",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Random Meme",
      description: "Menampilkan Meme Random",
      method: "GET",
      endpoint: "/random-meme",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Random Quotes",
      description: "Random Quotes",
      method: "GET",
      endpoint: "/random-quotes",
      params: ["apikey"],
      viewType: "json",
    },
    {
      name: "Thailand",
      description: "Menampilkan Thailand Random",
      method: "GET",
      endpoint: "/thailand",
      params: ["apikey"],
      viewType: "jpg",
    },
    {
      name: "Vietnam",
      description: "Menampilkan Vietnam Random",
      method: "GET",
      endpoint: "/vietnam",
      params: ["apikey"],
      viewType: "jpg", 
    },
    {
      name: "Walpaper",
      description: "Menampilkan Walpaper Random",
      method: "GET",
      endpoint: "/walpaper",
      params: ["apikey"],
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

export default FunApiPage;