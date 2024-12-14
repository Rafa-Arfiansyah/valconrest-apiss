import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import { authenticate } from "@/middlewares/auth";

export default async function handler(req, res) {
  authenticate(req, res, async () => {
    if (req.method !== "DELETE") return res.status(405).json({ message: "Method not allowed" });

    await connectToDatabase();
    try {
      await User.findByIdAndDelete(req.user.id);
      res.status(200).json({ message: "User deleted successfully." });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
}
