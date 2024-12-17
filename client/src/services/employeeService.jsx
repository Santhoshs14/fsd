import axios from "axios";

const API_URL = "http://localhost:5000/api/employees"; // Use appropriate URL for production

// Fetch all employees
export const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error.message);
    throw new Error(
      error.response ? error.response.data.message : "Error fetching employees"
    );
  }
};

// Add new employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error.message);
    throw new Error(
      error.response ? error.response.data.message : "Error adding employee"
    );
  }
};

// Update an existing employee
export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error.message);
    throw new Error(
      error.response ? error.response.data.message : "Error updating employee"
    );
  }
};

// Delete an employee
export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error.message);
    throw new Error(
      error.response ? error.response.data.message : "Error deleting employee"
    );
  }
};
