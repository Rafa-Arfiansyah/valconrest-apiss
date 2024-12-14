const rateLimit = {};

export function rateLimiter(maxRequests, windowMs) {
  return (req, res, next) => {
    const userId = req.user?.id || req.headers["x-forwarded-for"] || req.ip;
    const now = Date.now();

    if (!rateLimit[userId]) {
      rateLimit[userId] = [];
    }

    rateLimit[userId] = rateLimit[userId].filter((timestamp) => now - timestamp < windowMs);

    if (rateLimit[userId].length >= maxRequests) {
      return res.status(429).json({ message: "Too many requests, please try again later." });
    }

    rateLimit[userId].push(now);
    next();
  };
}
