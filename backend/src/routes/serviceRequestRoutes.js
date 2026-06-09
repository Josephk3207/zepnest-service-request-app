const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
  createServiceRequest,
  getAllServiceRequests,
  getServiceRequestById,
  updateServiceRequestStatus,
  deleteServiceRequest,
} = require("../controllers/serviceRequestController");

router.post("/", authMiddleware, createServiceRequest);

router.get("/", authMiddleware, getAllServiceRequests);

router.get("/:id", authMiddleware, getServiceRequestById);

router.put("/:id/status", authMiddleware, updateServiceRequestStatus);

router.delete("/:id", authMiddleware, deleteServiceRequest);

module.exports = router;