import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import profile1 from "/public/images/profile/user-3.webp";
import profile2 from "/public/images/profile/user-8.jpeg";
import stackoverflow from "/public/images/profile/Stacks.jpeg";

const DeveloperInfo = () => {
  const developers = [
    {
      name: "Rafa Arfiansyah",
      role: "Lead Developer",
      image: profile1,
      github: "github.com/rafaarfiansyah",
    },
    {
      name: "Vynaa Valerie",
      role: "Api Mainteiner",
      image: profile2,
      github: "github.com/vynaavalerie",
    },
    {
      name: "Stack Overflow",
      role: "helper",
      image: stackoverflow,
      github: "github.com/vynaavalerie",
    },
  ];

  return (
    <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full break-words">
      <h5 className="mb-6 text-xl font-bold">Development Team</h5>
      <div className="space-y-6">
        {developers.map((dev, index) => (
          <Card key={index}>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src={dev.image}
                  alt={dev.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-blue-500 animate-pulse bg-cover"
                />
              </div>
              <div>
                <h6 className="text-lg font-semibold">{dev.name}</h6>
                <p className="text-sm text-gray-500">{dev.role}</p>
                <a
                  href={`https://${dev.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline"
                >
                  @{dev.github.split("/").pop()}
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeveloperInfo;