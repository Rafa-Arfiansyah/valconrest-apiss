import {
    validateUsername,
    validatePremiumStatus,
    validatePremiumExpiry,
  } from "@/validators/userValidator";
  
  export default async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    const { username } = req.query;
  
    try {
      // Validasi username
      const user = await validateUsername(username);
  
      // Validasi sts premium
      validatePremiumStatus(user);
  
      // Validasi exp premium
      validatePremiumExpiry(user);
  
      // Jika validasi true maka -> kirimkan respons layanan
      res.status(200).json({
        message: `Hai ${username}, ini adalah download linkmu `,
        downloadLink: "https://dummy/dummy-download-link",
      });
    } catch (error) {
      // error validator log
      res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
  }
  