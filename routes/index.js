const express = require("express");
const router = express.Router();

const mockData = require("../content/mockData.js");

router.get("/get-user-form/:userId", function (req, res) {
  const { userId } = req.params;
  const company = mockData.find((x) => x.userId == userId);

  if (company) res.json(company);
  else res.status(404);
});

module.exports = router;
