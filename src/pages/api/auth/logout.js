export default function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });
  
    res.status(200).json({ message: "User logged out successfully." });
  }
  