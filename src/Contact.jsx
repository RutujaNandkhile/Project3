import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you, your message has been sent!");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Contact <span className="text-danger">Me</span>
      </h2>

      <div className="row justify-content-center">
        {/* Contact Information */}
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-light rounded shadow text-center">
            <h4>Contact Info</h4>
            <p><strong>Name:</strong> Rutuja Nandkhile</p>
            <p><strong>Email:</strong> rutujanandkhile17@gmail.com</p>
            <p><strong>Phone:</strong> +91 9356371502</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
