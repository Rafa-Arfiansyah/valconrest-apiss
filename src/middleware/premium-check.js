export function checkPremiumExpiry(req, res, next) {
    if (!req.user.isPremium) {
      return res.status(403).json({ message: "Access restricted to premium users only." });
    }
  
    const now = new Date();
    if (req.user.premiumExpiresAt && new Date(req.user.premiumExpiresAt) < now) {
      return res.status(403).json({ message: "Your premium subscription has expired." });
    }
  
    next();
  }
  