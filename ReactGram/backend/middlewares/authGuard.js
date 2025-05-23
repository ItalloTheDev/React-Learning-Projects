const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Check if header has a token
  if (!token) {
    return res.status(401).json({ errors: ["Access negated!"] });
  }

  // Check if token is valid
  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = await User.findById(verified.id).select("-password");
    return next();
  } catch (error) {
    return res.status(401).json({ errors: ["Invalid Token."] });
  }
};

module.exports = authGuard;
