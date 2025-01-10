import React, { useState } from "react";

function FooterForm({ onNameSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onNameSubmit(name);
    }
  };

  return (
    <footer className="text-center py-4 bg-dark text-white">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="container">
          <div
            className="d-flex align-items-center"
            style={{ justifyContent: "space-around" }}
          >
            <label htmlFor="name" className="font-weight-bold mr-3">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="form-control-sm mr-3"
              required
            />
            <button type="submit" className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </footer>
  );
}

export default FooterForm;
