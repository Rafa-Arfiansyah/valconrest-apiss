import React from "react";

const AIApiPage = () => {
  const BASE_URL = "https://valconrest.my.id/api/v1";
  
  const apis = [
    {
      name: "Ai Image",
      description: "Image With Ai",
      method: "GET",
      endpoint: "/ai-image",
      params: ["apikey", "text"],
      viewJson: true,
    },
    {
      name: "Gemini Chat",
      description: "Gemini Chat",
      method: "GET",
      endpoint: "/gemini-chat",
      params: ["apikey", "text"],
      viewJson: true,
    },
    {
      name: "Gemini Image",
      description: "Gemini Image",
      method: "GET",
      endpoint: "/gemini-image",
      params: ["apikey", "text", "url"],
      viewJson: true,
    },
    {
      name: "Maths AI",
      description: "Ai Maths Solver",
      method: "GET",
      endpoint: "/math-solver",
      params: ["apikey", "text"],
      viewJson: true,
    },
    {
      name: "Openai ChatGPT 3.5 Turbo",
      description: "Chatgpt AI",
      method: "GET",
      endpoint: "/chatgpt-3",
      params: ["apikey", "text"],
      viewJson: true,
    },
    {
      name: "Openai ChatGPT 4",
      description: "Chatgpt AI",
      method: "GET",
      endpoint: "/chatgpt-4",
      params: ["apikey", "text"],
      viewJson: true,
    },
    {
      name: "Simi Simi",
      description: "Chat with simi simi",
      method: "GET",
      endpoint: "/simi-simi",
      params: ["apikey", "text", "language"],
      viewJson: true,
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
                  View JSON
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIApiPage;