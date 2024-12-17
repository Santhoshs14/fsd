import React, { useState } from "react";

const departments = ["DEVELOPMENT", "HR", "SALES", "ACCOUNTS", "MANAGEMENT"];

const EmployeeForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    date_of_joining: "",
    ...initialData, // Pre-fill data for edit
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Minimal validation
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)
    )
      newErrors.email = "Invalid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone_number = "Phone number must be 10 digits.";
    if (!formData.department) newErrors.department = "Department is required.";
    if (!formData.date_of_joining)
      newErrors.date_of_joining = "Date of Joining is required.";
    if (new Date(formData.date_of_joining) > new Date())
      newErrors.date_of_joining = "Cannot select a future date.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Call the onSubmit handler passed as a prop
      onSubmit(formData);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>{initialData ? "Edit Employee" : "Add New Employee"}</h2>

        {/* Name Field */}
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Phone Number Field */}
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        {/* Department Field */}
        <div>
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && (
            <span className="error">{errors.department}</span>
          )}
        </div>

        {/* Date of Joining Field */}
        <div>
          <label>Date of Joining</label>
          <input
            type="date"
            name="date_of_joining"
            value={formData.date_of_joining}
            onChange={handleChange}
          />
          {errors.date_of_joining && (
            <span className="error">{errors.date_of_joining}</span>
          )}
        </div>

        {/* Buttons */}
        <div>
          <button type="submit">{initialData ? "Update" : "Add"}</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
