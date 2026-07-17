import axios from "axios";
import { Employee } from "../models/Employee";

const BASE_URL = "http://localhost:2500/formData";

// GET All Employees
export const getEmployees = () => {
    return axios.get<Employee[]>(BASE_URL);
};

// GET Employee By ID
export const getEmployeeById = (id: string) => {
    return axios.get<Employee>(`${BASE_URL}/${id}`);
};

// POST Employee
export const addEmployee = (employee: Employee) => {
    return axios.post(BASE_URL, employee);
};

// PUT Employee
export const updateEmployee = (employee: Employee) => {
    return axios.put(`${BASE_URL}/${employee.id}`, employee);
};

// DELETE Employee
export const deleteEmployee = (id: string) => {
    return axios.delete(`${BASE_URL}/${id}`);
};