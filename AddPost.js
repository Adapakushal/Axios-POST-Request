// AddPost.js
import React, { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Response:", response.data);
      setMessage("✅ Post added successfully!");
      setFormData({ title: "", body: "" });
    } catch (error) {
      console.error("Error adding post:", error);
      setMessage("❌ Failed to add post. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto" }}>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Body:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Post
        </button>
      </form>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
};

export default AddPost;
