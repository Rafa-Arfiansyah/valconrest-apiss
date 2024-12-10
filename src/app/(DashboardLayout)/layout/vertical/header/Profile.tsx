import { Button, Dropdown } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const token = localStorage.getItem('token');

  // Function to handle redirection if user is not logged in
  const handleProfileInfoClick = () => {
    if (!token) {
      router.push('/auth/login');
    } else {
      router.push('/profile');
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('apiKey');
    localStorage.removeItem('isPremium');

    router.push('/auth/login');
  };

  // Login function
  const handleLogin = () => {
    router.push('/auth/login');
  };

  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="rounded-sm w-44"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <Image
              src="/images/profile/user-1.gif"
              alt="User Avatar"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        )}
      >
        <Dropdown.Item
          onClick={handleProfileInfoClick}
          className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark"
        >
          <Icon icon="solar:document-add-linear" height={20} />
          Profile Info
        </Dropdown.Item>
        <div className="p-3 pt-0">
          {token ? (
            <Button
              size="sm"
              onClick={handleLogout}
              className="mt-2 border border-primary text-primary bg-transparent hover:bg-lightprimary outline-none focus:outline-none"
            >
              Logout
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleLogin}
              className="mt-2 border border-primary text-primary bg-transparent hover:bg-lightprimary outline-none focus:outline-none"
            >
              Login
            </Button>
          )}
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;