import { connectToDatabase } from "@/lib/mongodb";
import User from "/src/models/User";
import { authenticate } from "/src/middleware/auth";

export default async function handler(req, res) {
  authenticate(req, res, async () => {
    if (req.method === "GET") {
      await connectToDatabase();
      try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    } else if (req.method === "PUT") {
      const { username, email } = req.body;
      await connectToDatabase();
      try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found." });

        if (username) user.username = username;
        if (email) user.email = email;

        await user.save();
        res.status(200).json({ message: "Profile updated successfully." });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  });
}
