"use client";
import React from "react";
import Image from "next/image";
import user1 from "/public/images/profile/user-9.jpg"
import user2 from "/public/images/profile/user-9.jpg";
import user3 from "/public/images/profile/user-9.jpg";
import img1 from "/public/images/community/valhub.png";
import img2 from "/public/images/community/valtesti.png";
import img3 from "/public/images/community/valsmm.png";
import { Badge } from "flowbite-react";
import Link from "next/link";

const WhatsAppGroupsData = [
  {
    avatar: user1,
    coveravatar: img1,
    members: "137 members",
    title: "Valerie Connect",
    category: "Group",
    admin: "Vynaa Valerie",
    lastMessage: "Hello, welcome to Valerie Connect",
    lastMessageTime: "10:30 AM",
    url: "",
  },
  {
    avatar: user2,
    coveravatar: img3,
    members: "84 members",
    title: "Valerie SMM Panel",
    category: "Group",
    admin: "Vynaa Valerie",
    lastMessage: "Hello, welcome to Valerie Connect | SMM Panel",
    lastMessageTime: "10:30 AM",
    url: "",
  },
  {
    avatar: user3,
    coveravatar: img2,
    members: "87 Followers",
    title: "Valcon Testi",
    category: "Channel",
    admin: "Vynaa Valerie",
    lastMessage: "Our Testimonial channel",
    lastMessageTime: "Yesterday",
    url: "",
  },
];

const BlogCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {WhatsAppGroupsData.map((item, i) => (
          <div className="lg:col-span-4 col-span-12" key={i}>
            <Link href={item.url} className="group">
              <div className="bg-white dark:bg-darkgray p-4 rounded-2xl transition-shadow duration-300 relative w-full h-full flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                    <Image
                      src={item.coveravatar}
                      alt="group cover"
                      className="w-28 h-28 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                  <Badge
                    color={"purple"}
                    className="absolute -bottom-3 font-semibold rounded-full text-xs px-3 py-1"
                  >
                    {item.members}
                  </Badge>
                </div>
                <h5 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.title}
                </h5>
                <Badge color={"indigo"} className="mb-4">
                  {item.category}
                </Badge>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                    <Image
                      src={item.avatar}
                      alt="admin"
                      className="w-8 h-8 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-2">
                    {item.admin}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {item.lastMessage}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  {item.lastMessageTime}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCards;