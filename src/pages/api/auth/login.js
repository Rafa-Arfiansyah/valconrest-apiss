import { connectToDatabase } from "/src/lib/mongodb";
import User from "/src/models/User";
import jwt from "jsonwebtoken";

const createAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role, isPremium: user.isPremium, premiumExpiresAt: user.premiumExpiresAt },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};

const createRefreshToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    console.error("Invalid HTTP method:", req.method); 
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    console.error("Missing email or password in the request body");
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      console.error("User not found for email:", email); // Log if user is not found
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      console.error("Password mismatch for user:", email); // Log password mismatch
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    console.log("Successful login for user:", email); // Log successful login

    res.status(200).json({ accessToken, refreshToken });
  } catch (err) {
    console.error("Server error:", err.message); // Log server error
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
}
