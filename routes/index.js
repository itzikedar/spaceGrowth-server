const express = require("express");
const router = express.Router();

const mockData = [
  {
    userId: 1,
    department: 3,
    yearsInOrg: "4-6",
    employeesManaged: "1-3",
    phoneNumber: "0502243456",
  },
  {
    userId: 2,
    department: 1,
    yearsInOrg: "4-6",
    employeesManaged: "4-10",
    phoneNumber: "0505463456",
  },
  {
    userId: 3,
    department: 5,
    yearsInOrg: "4-6",
    employeesManaged: "11-30",
    phoneNumber: "0502262456",
  },
  {
    userId: 4,
    department: 6,
    yearsInOrg: "4-6",
    employeesManaged: "30-100",
    phoneNumber: "0502243257",
  },
  {
    userId: 5,
    department: 6,
    yearsInOrg: "4-6",
    employeesManaged: "30-100",
    phoneNumber: "0502243257",
  },
];

router.get("/get-user-form/:userId", function (req, res) {
  const { userId } = req.params;
  const company = mockData.find((x) => x.userId == userId);

  if (company) res.json(company);
  else res.status(404);
});

module.exports = router;
