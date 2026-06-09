const express = require("express");
const router = express.Router();

const {
  createServiceRequest,
  getAllServiceRequests,
  getServiceRequestById,
  updateServiceRequestStatus,
  deleteServiceRequest,
} = require("../controllers/serviceRequestController");

router.post("/", createServiceRequest);

router.get("/", getAllServiceRequests);

router.get("/:id", getServiceRequestById);

router.put("/:id/status", updateServiceRequestStatus);

router.delete("/:id", deleteServiceRequest);

module.exports = router;