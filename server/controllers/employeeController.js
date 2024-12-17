const pool = require("../models/db");

// Get all employees
const getAllEmployees = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM employees ORDER BY id ASC");
        res.status(200).json(result.rows);
    } catch (error) {
        next(error);
    }
};

// Add a new employee
const addEmployee = async (req, res, next) => {
    const { name, email, phone, department, date_of_joining } = req.body;

    // Validate input fields
    if (!name || !email || !phone || !department || !date_of_joining) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const result = await pool.query(
            "INSERT INTO employees (name, email, phone, department, date_of_joining) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, email, phone, department, date_of_joining]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

// Update an employee
const updateEmployee = async (req, res, next) => {
    const { id } = req.params;
    const { name, email, phone, department, date_of_joining } = req.body;

    if (!name || !email || !phone || !department || !date_of_joining) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const result = await pool.query(
            "UPDATE employees SET name = $1, email = $2, phone = $3, department = $4, date_of_joining = $5 WHERE id = $6 RETURNING *",
            [name, email, phone, department, date_of_joining, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

// Delete an employee
const deleteEmployee = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await pool.query("DELETE FROM employees WHERE id = $1 RETURNING *", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
};
