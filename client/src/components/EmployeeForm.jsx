import React, { useState, useEffect } from "react";

const departments = ["DEVELOPMENT", "HR", "SALES", "ACCOUNTS", "MANAGEMENT"];

const EmployeeForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    department: "",
    date_of_joining: "",
    role: "",
    ...initialData,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)
    )
      newErrors.email = "Invalid email.";
    if (!/^\d{10}$/.test(formData.phone_number))
      newErrors.phone_number = "Phone number must be 10 digits.";
    if (!departments.includes(formData.department))
      newErrors.department = "Invalid department.";
    if (!formData.date_of_joining)
      newErrors.date_of_joining = "Date of Joining is required.";
    if (new Date(formData.date_of_joining) > new Date())
      newErrors.date_of_joining = "Cannot select a future date.";
    if (!formData.role.trim()) newErrors.role = "Role is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(formData);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>{initialData ? "Edit Employee" : "Add New Employee"}</h2>
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
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          {errors.phone_number && (
            <span className="error">{errors.phone_number}</span>
          )}
        </div>
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
        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
          {errors.role && <span className="error">{errors.role}</span>}
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
