import React, { useState, useEffect } from 'react'
import { employeeData } from '../../Data/DummyData'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../App.css'
import Sidebar from '../Sidebar'

const AddEmployee = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [employee, setEmployee] = useState(null)
    const [name, setName] = useState('')
    const [father_name, setfather_Name] = useState('')
    const [mobile, setMobile] = useState('')
    const [cnic, setCnic] = useState('')
    const [salary, setSalary] = useState('')
    const [qualification, setQualification] = useState('')
    const [designation, setDesignation] = useState('')
    const [role, setRole] = useState('')
    const [selected, setSelected] = useState('Teacher')
    const submitEmployee = async (event) => {
        event.preventDefault()
        const payload = {}
        payload.name = event.target.name.value || ''
        payload.father_name = event.target.father_name.value || ''
        payload.mobile_number = event.target.mobile.value || ''
        payload.cnic = event.target.cnic.value || ''
        payload.salary = event.target.salary.value || ''
        payload.qualification = event.target.qualification.value || ''
        payload.designation = event.target.designation.value || ''
        payload.role = event.target.selected_radio.value
        console.log(payload)
        employeeData.push(payload)
        navigate(-1)
    }
    const handleChange = event => {
        setSelected(event.target.value)
    }
    useEffect(() => {
        if (location.state?.id == null) {
            console.log("null mila")
        }
        else {
            const data = employeeData.filter((val, id) => { return location.state.id == id + 1 })
            setEmployee(data[0])
            setSelected(data[0].role)
        }
    }, [])

    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='container mt-5'>
                    <form onSubmit={submitEmployee}>
                        <div className='card'>
                            <div className='bg-success card-header text-center'>
                                <h2 style={{ color: 'navajowhite' }}>{employee?.id ? "EDIT " : "ADD "} EMPLOYEE</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="selected_radio"
                                                id="teacher"
                                                onChange={handleChange}
                                                checked={selected === "Teacher"}
                                                value="Teacher" />
                                            <label className="form-check-label" htmlFor="Teacher">
                                                Teacher
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-6'>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                checked={selected === "Staff"}
                                                onChange={handleChange}
                                                type="radio"
                                                name="selected_radio"
                                                id="staff"
                                                value="Staff" />
                                            <label className="form-check-label" htmlFor="Staff">
                                                Staff
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className='col-6'>
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            defaultValue={employee?.name}
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Enter Full name"
                                            required
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor="father_name" className="form-label">
                                            Father Name
                                        </label>
                                        <input
                                            defaultValue={employee?.father_name}
                                            type="text"
                                            className="form-control"
                                            name="father_name"
                                            placeholder="Enter Father name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-6'>
                                        <label htmlFor="mobile" className="form-label">
                                            Mobile
                                        </label>
                                        <input
                                            defaultValue={employee?.mobile_number}
                                            type="number"
                                            minLength={11}
                                            maxLength={11}
                                            className="form-control"
                                            name="mobile"
                                            placeholder="Enter mobile number"
                                            required
                                        />

                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor="cnic" className="form-label">
                                            CNIC
                                        </label>
                                        <input
                                            defaultValue={employee?.cnic}
                                            type='number'
                                            minLength={14}
                                            maxLength={14}
                                            className="form-control"
                                            name="cnic"
                                            placeholder="Enter CNIC number"
                                        />

                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-6'>
                                        <label htmlFor="qualification" className="form-label">
                                            Qualification
                                        </label>
                                        <input
                                            defaultValue={employee?.qualification}
                                            type="text"
                                            className="form-control"
                                            name="qualification"
                                            placeholder="Enter Qualification"
                                            required
                                        />

                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor="designation" className="form-label">
                                            Designation
                                        </label>
                                        <input
                                            defaultValue={employee?.designation}
                                            type="text"
                                            className="form-control"
                                            name="designation"
                                            placeholder="Enter Designation"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-6'>
                                        <label htmlFor="salary" className="form-label">
                                            Salary
                                        </label>
                                        <input
                                            defaultValue={employee?.salary}
                                            type="number"
                                            className="form-control"
                                            name="salary"
                                            placeholder="Enter Salary"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button type="submit" className=" btn btn-sm btn-danger w-25">Submit</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    )
}

export default AddEmployee
