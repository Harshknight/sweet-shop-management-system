module.exports = function (req, res, next) {
  // Check role, not email
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
};
