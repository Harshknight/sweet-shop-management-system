const express = require("express");
const Sweet = require("../models/Sweet");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

/* =======================
   ADMIN ROUTES
======================= */

// ➕ Add sweet
router.post("/", auth, admin, async (req, res) => {
  try {
    const sweet = new Sweet(req.body);
    await sweet.save();
    res.status(201).json(sweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✏️ Update sweet
router.put("/:id", auth, admin, async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.json(sweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ❌ Delete sweet
router.delete("/:id", auth, admin, async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndDelete(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.json({ message: "Sweet deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 📦 Restock sweet
router.post("/:id/restock", auth, admin, async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid restock amount" });
    }

    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    sweet.quantity += amount;
    await sweet.save();

    res.json(sweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* =======================
   USER ROUTES
======================= */

// 🔍 GET sweets with SEARCH + FILTER + PAGINATION
router.get("/", auth, async (req, res) => {
  try {
    const {
      search,
      category,
      stock,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10
    } = req.query;

    const query = {};

    // 🔎 Text Search (name OR category)
    if (search) {
  query.$or = [
    { name: { $regex: search, $options: "i" } },
    { category: { $regex: search, $options: "i" } }
  ];
}

    // 🧁 Category filter
    if (category && category.trim() !== "") {
  query.category = new RegExp(`^${category}$`, "i");
}


    // 📦 Stock filter
    if (stock === "in") {
      query.quantity = { $gt: 0 };
    } else if (stock === "out") {
      query.quantity = 0;
    }

    // 💰 Price filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const skip = (page - 1) * limit;

    const [sweets, total] = await Promise.all([
      Sweet.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),

      Sweet.countDocuments(query)
    ]);

    res.json({
      data: sweets,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit)
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// 🛒 Purchase sweet
router.post("/:id/purchase", auth, async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: "Out of stock" });
    }

    sweet.quantity -= 1;
    await sweet.save();

    res.json(sweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
