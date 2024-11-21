'use client';

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import user1 from "/public/images/profile/user-1.gif"
import banner from "/public/images/backgrounds/banner.gif"
const ProfilePage = () => {
  const [isCopied, setIsCopied] = useState(false);
  
  const user = {
    name: "Rafa Arfiansyah Raif",
    email: "itsme@rafanokoto.my.id",
    apiKey: "sk_test_51NY8kh2eZKH6N8k9X2eZvN",
    role: "Developer",
    profileUrl: user1, 
    bannerUrl: banner, 
    usage: {
      requests: 1250,
      limit: 5000
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  

  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto p-4">
      <div className="rounded-xl shadow-md bg-white dark:bg-darkgray overflow-hidden">
        <div className="h-48 relative">
          <Image
            src={user.bannerUrl}
            alt="Profile Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-100/50"></div>
        </div>

        <div className="relative px-6">
          <div className="absolute -top-16 flex items-end space-x-4">
            <div className="rounded-full border-4 border-white overflow-hidden shadow-lg w-32 h-32 relative bg-white">
              <Image
                src={user.profileUrl}
                alt={`${user.name}'s profile picture`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
              <p className="text-gray-600 dark:text-gray-300">{user.role}</p>
            </div>
          </div>
          <div className="pt-20 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Info */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Account Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon icon="material-symbols:mail-outline" className="text-gray-500" width={20} />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon icon="material-symbols:verified-outline" className="text-gray-500" width={20} />
                    <span>Verified Account</span>
                  </div>
                </div>
              </div>

              {/* API Usage */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">API Usage</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Monthly Requests</span>
                    <span>{user.usage.requests} / {user.usage.limit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${(user.usage.requests/user.usage.limit * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Key Section */}
      <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h2 className="text-xl font-semibold">API Credentials</h2>
          <Link 
            href="/docs"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Icon icon="material-symbols:book-outline" className="mr-2" width={20} />
            View API Documentation
          </Link>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">API Key</span>
              <button 
                onClick={() => copyToClipboard(user.apiKey)}
                className={`flex items-center space-x-2 px-3 py-1 rounded-md transition-all duration-200 ${
                  isCopied 
                    ? 'bg-green-100 text-green-600 dark:bg-green-900/30' 
                    : 'hover:bg-gray-100 text-blue-600 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-sm">
                  {isCopied ? 'Copied!' : 'Copy'}
                </span>
                <Icon 
                  icon={isCopied ? "material-symbols:check-circle" : "material-symbols:content-copy-outline"} 
                  width={18}
                  className={`transition-all duration-200 ${
                    isCopied ? 'text-green-600' : 'text-blue-600'
                  }`}
                />
              </button>
            </div>
            <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded break-all relative group">
              {user.apiKey}
              <div className={`absolute inset-0 bg-green-500/10 transition-opacity duration-200 ${
                isCopied ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Icon icon="material-symbols:info-outline" width={16} />
            <span>Keep your API key secure and never share it publicly</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link 
          href="/guides"
          className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-2">Quick Start Guide</h3>
              <p className="text-sm text-gray-500">Get started with example code snippets</p>
            </div>
            <Icon icon="material-symbols:code" className="text-blue-600" width={24} />
          </div>
        </Link>
        
        <Link 
          href="https://wa.me/6285175101443"
          className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-gray-500">Contact our support team</p>
            </div>
            <Icon icon="material-symbols:support-agent" className="text-blue-600" width={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;