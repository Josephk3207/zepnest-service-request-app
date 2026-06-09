const db = require("../config/db");

const createServiceRequest = async (req, res) => {
  try {
    const { title, description, category, address, preferred_time } = req.body;

    const userId = 1;

    const [result] = await db.query(
      `INSERT INTO service_requests
      (user_id, title, description, category, address, preferred_time)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, title, description, category, address, preferred_time]
    );

    res.status(201).json({
      success: true,
      message: "Service request created successfully",
      requestId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllServiceRequests = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM service_requests"
    );

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getServiceRequestById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      "SELECT * FROM service_requests WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Service request not found",
      });
    }

    res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateServiceRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await db.query(
      "UPDATE service_requests SET status = ? WHERE id = ?",
      [status, id]
    );

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteServiceRequest = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(
      "DELETE FROM service_requests WHERE id = ?",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Service request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createServiceRequest,
  getAllServiceRequests,
  getServiceRequestById,
  updateServiceRequestStatus,
  deleteServiceRequest,
};