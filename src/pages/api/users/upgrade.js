import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { authenticate } from "@/middlewares/auth";

export default async function handler(req, res) {
  authenticate(req, res, async () => {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const { days } = req.body;

    if (!days || isNaN(days)) return res.status(400).json({ message: "Invalid days provided." });

    await connectToDatabase();

    try {
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ message: "User not found." });

      user.isPremium = true;
      user.premiumExpiresAt = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000);

      await user.save();

      res.status(200).json({ message: "User upgraded to premium successfully." });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
}
