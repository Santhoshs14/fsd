import React from "react";

const EmployeeTable = ({ employees, onEdit }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Date of Joining</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employee_id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone_number}</td>
              <td>{employee.department}</td>
              <td>{employee.date_of_joining}</td>
              <td>{employee.role}</td>
              <td>
                <button onClick={() => onEdit(employee)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
