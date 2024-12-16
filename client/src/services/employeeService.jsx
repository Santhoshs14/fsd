// employeeService.jsx
import axios from "axios";

// Define the base URL for the backend API
const API_URL = "http://localhost:5000/api/employees";

// 1. Fetch All Employees
export const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the list of employees
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

// 2. Add a New Employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data; // Return the added employee data
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

// 3. Update Employee Details
export const updateEmployee = async (employeeId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${employeeId}`, updatedData);
    return response.data; // Return the updated employee data
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

// 4. Delete an Employee
export const deleteEmployee = async (employeeId) => {
  try {
    const response = await axios.delete(`${API_URL}/${employeeId}`);
    return response.data; // Return the deleted employee's data (confirmation)
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
};
