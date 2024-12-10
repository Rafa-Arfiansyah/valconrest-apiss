import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5050/login', {
        email,  // Send email instead of username
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.token) {
        // Store auth data in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);  // Store email
        localStorage.setItem('apiKey', response.data.apiKey);
        localStorage.setItem('isPremium', response.data.isPremium.toString());

        // Clear form
        setEmail("");
        setPassword("");

        // Force a hard navigation to /profile
        window.location.href = '/profile';
      }

    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<{ error?: string }>;
        if (axiosError.response?.status === 401) {
          setError("Invalid email or password");
        } else if (axiosError.response?.data?.error) {
          setError(axiosError.response.data.error);
        } else {
          setError("An error occurred during login. Please try again.");
        }
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"  // Use email type
            sizing="md"
            className="form-control form-rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            disabled={isLoading}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="userpwd" value="Password" />
          </div>
          <TextInput
            id="userpwd"
            type="password"
            sizing="md"
            className="form-control form-rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            disabled={isLoading}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer"
            >
              Remember this Device
            </Label>
          </div>
          <Link href="/forgot-password" className="text-primary text-sm font-medium">
            Forgot Password?
          </Link>
        </div>
        {error && (
          <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
            {error}
          </div>
        )}
        <Button
          type="submit"
          color="primary"
          className="w-full bg-primary text-white rounded-xl"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;
