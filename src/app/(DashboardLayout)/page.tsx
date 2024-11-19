import React from "react";
import ApiStatus from "../components/dashboard/ApiStatus";
import ReqStats from "../components/dashboard/ReqStats";
import FavAPIs from "../components/dashboard/FavAPIs";
import BotScripts from "../components/dashboard/BotScripts";
import DeveloperInfo from "../components/dashboard/DeveloperInfo";
import WhatsAppGroupsData from "../components/dashboard/Community";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-30">
        {/* First Row */}
        <div className="lg:col-span-8 col-span-12">
          <FavAPIs />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="grid grid-cols-12 gap-30">
            <div className="col-span-12">
              <ApiStatus />
            </div>
            <div className="col-span-12">
              <ReqStats />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="lg:col-span-8 col-span-12">
          <BotScripts />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <DeveloperInfo />
        </div>

        {/* Blog Cards Row */}
        <div className="col-span-12">
          <WhatsAppGroupsData />
        </div>

        {/* Footer */}
        <div className="col-span-12 text-center mt-6">
          <p className="text-base">
            Developed by{" "}
            <Link
              href="#"
              target="_blank"
              className="pl-1 text-primary underline decoration-primary"
            >
              ValconRest
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default page;