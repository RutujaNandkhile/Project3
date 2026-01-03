import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    contactableName: "",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = { ...formData, date: new Date().toLocaleString() };

    // 1️⃣ Get existing rows
    const existingRows = JSON.parse(localStorage.getItem("contactRows")) || [];

    // 2️⃣ Add new row
    const updatedRows = [...existingRows, newRow];

    // 3️⃣ Save to localStorage
    localStorage.setItem("contactRows", JSON.stringify(updatedRows));

    // 4️⃣ Send email using EmailJS
    emailjs
      .send(
        "service_xxxxxx", // Your EmailJS service ID
        "template_xxxxxx", // Your EmailJS template ID
        {
          contactable_name: formData.contactableName,
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
          admin_email: "rutujanandkhile17@gmail.com", // Admin email
        },
        "PUBLIC_KEY_xxxxxx" // Your EmailJS public key
      )
      .then(() => {
        alert("Form submitted successfully! Email sent to you and admin.");
        // Redirect to ContactTable page
        navigate("/ContactTable");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert(
          "Form submitted but email failed. Data is saved locally. Check console."
        );
        navigate("/ContactTable");
      
      });

    // 5️⃣ Clear form
    setFormData({ contactableName: "", name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Contact <span className="text-danger">Me</span>
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* <input
              id="contactableName"
              className="form-control mb-2"
              placeholder="Contactable Name"
              value={formData.contactableName}
              onChange={handleChange}
              required
            /> */}
            <input
              id="name"
              className="form-control mb-2"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              id="email"
              type="email"
              className="form-control mb-2"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              className="form-control mb-3"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-danger w-100">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
