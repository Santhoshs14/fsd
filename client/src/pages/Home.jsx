import React, { useState, useEffect } from "react";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";

import Modal from "../components/Modal";
import {
  fetchEmployees,
  addEmployee,
  updateEmployee,
} from "../services/employeeService";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  };

  const handleAdd = async (employee) => {
    await addEmployee(employee);
    setIsModalOpen(false);
    loadEmployees();
  };

  const handleEdit = async (updatedEmployee) => {
    await updateEmployee(editingEmployee.id, updatedEmployee);
    setIsModalOpen(false);
    loadEmployees();
  };

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add New Employee</button>
      <EmployeeTable employees={employees} onEdit={handleEditClick} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <EmployeeForm
          initialData={editingEmployee}
          onSubmit={editingEmployee ? handleEdit : handleAdd}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default Home;
