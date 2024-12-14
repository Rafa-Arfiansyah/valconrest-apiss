import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";

/**
 * Validasi apakah username terdaftar di database dan return data user.
 */
export async function validateUsername(username) {
  if (!username) {
    throw { status: 400, message: "Username is required" };
  }

  await connectToDatabase();
  const user = await User.findOne({ username });

  if (!user) {
    throw { status: 404, message: "User not found" };
  }

  return user;
}

/**
 * Validasi apakah pengguna memiliki status premium.
 */
export function validatePremiumStatus(user) {
  if (!user.isPremium) {
    throw { status: 403, message: "Access restricted to premium users only" };
  }
}

/**
 * Validasi apakah premium pengguna masih aktif (tidak kedaluwarsa).
 */
export function validatePremiumExpiry(user) {
  if (user.premiumExpiresAt && new Date(user.premiumExpiresAt) < new Date()) {
    throw { status: 403, message: "Your premium subscription has expired" };
  }
}
