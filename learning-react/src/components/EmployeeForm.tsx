import { FC, useState, ChangeEvent, FormEvent } from "react";
import { Employee } from "../models/Employee";

const EmployeeForm: FC = () => {

    const [employee, setEmployee] = useState<Employee>({
        id: "",
        uname: "",
        age: 18,
        gender: "",
        dept: "",
        doj: "",
        salary: 10000,
        cont: "",
        email: "",
        address: "",
        skills: [],
        employmentType: "",
        experience: 0,
        active: true
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {

        const { name, value, type } = e.target;

        if (type === "checkbox") {

            const target = e.target as HTMLInputElement;

            if (name === "skills") {

                if (target.checked) {
                    setEmployee({
                        ...employee,
                        skills: [...employee.skills, value]
                    });
                } else {
                    setEmployee({
                        ...employee,
                        skills: employee.skills.filter(skill => skill !== value)
                    });
                }

            } else {

                setEmployee({
                    ...employee,
                    [name]: target.checked
                });

            }

        } else {

            setEmployee({
                ...employee,
                [name]: value
            });

        }

    };

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        console.log(employee);

    };

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3>Employee Registration</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        {/* ID */}
                        <div className="mb-3">
                            <label>Employee ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="id"
                                value={employee.id}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Name */}
                        <div className="mb-3">
                            <label>Employee Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="uname"
                                value={employee.uname}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Age */}
                        <div className="mb-3">
                            <label>Age</label>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                value={employee.age}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Gender */}
                        <div className="mb-3">

                            <label className="me-3">Gender</label>

                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={employee.gender === "Male"}
                                onChange={handleChange}
                            /> Male

                            <input
                                type="radio"
                                className="ms-3"
                                name="gender"
                                value="Female"
                                checked={employee.gender === "Female"}
                                onChange={handleChange}
                            /> Female

                        </div>

                        {/* Department */}
                        <div className="mb-3">

                            <label>Department</label>

                            <select
                                className="form-select"
                                name="dept"
                                value={employee.dept}
                                onChange={handleChange}
                            >

                                <option value="">Select Department</option>
                                <option>CSE</option>
                                <option>ECE</option>
                                <option>IT</option>
                                <option>AIML</option>

                            </select>

                        </div>

                        {/* Date */}
                        <div className="mb-3">

                            <label>Date Of Joining</label>

                            <input
                                type="date"
                                className="form-control"
                                name="doj"
                                value={employee.doj}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Salary */}
                        <div className="mb-3">

                            <label>Salary</label>

                            <input
                                type="number"
                                className="form-control"
                                name="salary"
                                value={employee.salary}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Contact */}
                        <div className="mb-3">

                            <label>Phone Number</label>

                            <input
                                type="tel"
                                className="form-control"
                                name="cont"
                                value={employee.cont}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Email */}
                        <div className="mb-3">

                            <label>Email</label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={employee.email}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Address */}
                        <div className="mb-3">

                            <label>Address</label>

                            <textarea
                                className="form-control"
                                rows={3}
                                name="address"
                                value={employee.address}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Skills */}
                        <div className="mb-3">

                            <label className="d-block">Skills</label>

                            <input
                                type="checkbox"
                                name="skills"
                                value="Java"
                                onChange={handleChange}
                            /> Java

                            <input
                                type="checkbox"
                                className="ms-3"
                                name="skills"
                                value="React"
                                onChange={handleChange}
                            /> React

                            <input
                                type="checkbox"
                                className="ms-3"
                                name="skills"
                                value="TypeScript"
                                onChange={handleChange}
                            /> TypeScript

                        </div>

                        {/* Employment Type */}
                        <div className="mb-3">

                            <label>Employment Type</label>

                            <select
                                className="form-select"
                                name="employmentType"
                                value={employee.employmentType}
                                onChange={handleChange}
                            >

                                <option value="">Select</option>
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Intern</option>

                            </select>

                        </div>

                        {/* Experience */}
                        <div className="mb-3">

                            <label>Experience</label>

                            <input
                                type="number"
                                className="form-control"
                                name="experience"
                                value={employee.experience}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Active */}
                        <div className="form-check mb-3">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="active"
                                checked={employee.active}
                                onChange={handleChange}
                            />

                            <label className="form-check-label">
                                Active Employee
                            </label>

                        </div>

                        <button className="btn btn-success">
                            Save Employee
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default EmployeeForm;