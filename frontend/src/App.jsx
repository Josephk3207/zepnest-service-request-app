import { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [requests, setRequests] = useState([]);

  const handleCreateRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/service-requests",
        {
          title,
          description,
          category,
          address,
          preferred_time: preferredTime,
        }
      );

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  const getRequests = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/service-requests"
      );

      setRequests(response.data.data);
      console.log(response.data);
      alert("Requests fetched successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };
  const deleteRequest = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/service-requests/${id}`
    );

    alert("Deleted Successfully");
    getRequests();
  } catch (error) {
    alert(error.response?.data?.message || "Error");
  }
};
const updateStatus = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/api/service-requests/${id}/status`,
      {
        status: "Completed",
      }
    );

    alert("Status Updated");
    getRequests();
  } catch (error) {
    alert(error.response?.data?.message || "Error");
  }
};
  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Service Request</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br />
      <br />

      <input
        type="datetime-local"
        value={preferredTime}
        onChange={(e) => setPreferredTime(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleCreateRequest}>
        Create Request
      </button>

      <br />
      <br />

      <button onClick={getRequests}>
        View Requests
      </button>

      <hr />

      <h2>All Requests</h2>

      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
              <th>Update Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.title}</td>
                <td>{req.category}</td>
                <td>{req.address}</td>
                <td>{req.status}</td>
                <td>
  <button onClick={() => updateStatus(req.id)}>
    Complete
  </button>
</td>
                <td>
  <button onClick={() => deleteRequest(req.id)}>
    
    Delete
    </button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;