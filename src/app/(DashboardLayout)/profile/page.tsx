'use client'
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import user1 from "/public/images/profile/user-1.gif";
import banner from "/public/images/backgrounds/banner.gif";
import LoadingSpinner from "../../components/LoadingAnimation";

interface UserProfile {
  username: string;
  email: string;
  apiKey: string;
  isPremium: boolean;
  premiumExpiry: string | null;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);  // State for tracking copy action
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5050/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          localStorage.clear();
          router.push("/auth/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const getFormattedExpiryDate = () => {
    if (!profile || !profile.isPremium || !profile.premiumExpiry) {
      return "-";
    }
    const expiryDate = new Date(profile.premiumExpiry);
    return expiryDate.toLocaleDateString(); // Format the date to local format
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);  // Update state to indicate the key was copied
        setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!profile) {
    return <div className="flex justify-center items-center min-h-screen">Error loading profile</div>;
  }

  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto p-4">
      <div className="rounded-xl shadow-md bg-white dark:bg-darkgray overflow-hidden">
        <div className="h-48 relative">
          <Image
            src={banner}
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
                src={user1}
                alt={`${profile.username}'s profile picture`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{profile.username}</h1>
              <p className="text-gray-600 dark:text-gray-300">
                {profile.isPremium ? "Premium User" : "Free User"}
              </p>
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
                    <span>{profile.email}</span>
                  </div>
                  {profile.isPremium && (
                    <div className="flex items-center space-x-2">
                      <Icon icon="material-symbols:star-outline" className="text-gray-500" width={20} />
                      <span>Premium until {getFormattedExpiryDate()}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* API Usage */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">API Usage</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Monthly Requests</span>
                    <span>{profile.isPremium ? "5000" : "1000"} / month</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: "0%" }}
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
                onClick={() => copyToClipboard(profile.apiKey)}
                className={`flex items-center space-x-2 px-3 py-1 rounded-md transition-all duration-200 ${
                  isCopied
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30"
                    : "hover:bg-gray-100 text-blue-600 dark:hover:bg-gray-700"
                }`}
              >
                <span className="text-sm">{isCopied ? "Copied!" : "Copy"}</span>
                <Icon
                  icon={
                    isCopied ? "material-symbols:check-circle" : "material-symbols:content-copy-outline"
                  }
                  width={18}
                  className={`transition-all duration-200 ${
                    isCopied ? "text-green-600" : "text-blue-600"
                  }`}
                />
              </button>
            </div>
            <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded break-all relative group">
              {profile.apiKey}
              <div
                className={`absolute inset-0 bg-green-500/10 transition-opacity duration-200 ${
                  isCopied ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Icon icon="material-symbols:info-outline" width={16} />
            <span>Keep your API key secure and never share it publicly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
