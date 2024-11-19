import React from "react";
import { DownloadIcon } from "lucide-react";

const BotScripts = () => {
  const scripts = [
    {
      name: "Whatsapp Bot",
      description: "Moderation and utility functions for Whatsapp Bot.",
      file: "twitter-bot.zip",
    },
    {
      name: "Twitter Bot",
      description: "Automate tweets and engage with followers.",
      file: "twitter-bot.zip",
    },
    {
      name: "Instagram Bot",
      description: "Like, comment, and follow users automatically.",
      file: "instagram-bot.zip",
    },
    {
      name: "Discord Bot",
      description: "Moderation and utility functions for Discord servers.",
      file: "discord-bot.zip",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Free Bot Scripts</h2>
      <p className="text-gray-600 mb-6">Download free bot scripts for various platforms.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scripts.map((script, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{script.name}</h3>
            <p className="text-gray-600 mb-4">{script.description}</p>
            <a
              href={`/downloads/${script.file}`}
              className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center"
              download
            >
              <DownloadIcon className="mr-2" /> Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotScripts;