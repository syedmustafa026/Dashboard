import React from 'react'
import { employeeData } from '../../Data/DummyData'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import Sidebar from '../Sidebar'

const AddEmployee = () => {
    
    const navigate = useNavigate()
    const submitEmployee = async (event,) => {
        event.preventDefault()
        const payload = {}
        payload.name = event.target.name.value || ''
        payload.father_name = event.target.father_name.value || ''
        payload.mobile = event.target.mobile.value || ''
        payload.cnic = event.target.cnic.value || ''
        payload.salary = event.target.salary.value || ''
        payload.qualification = event.target.qualification.value || ''
        payload.designation = event.target.designation.value || ''
        payload.role = event.target.selected_radio.value
        console.log(payload)
        employeeData.push(payload)
        navigate(-1)
    }
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='container mt-5'>
                    <form onSubmit={submitEmployee}>
                        <div className='card'>
                            <div className='bg-success card-header text-center'>
                                <h2 style={{ color: 'navajowhite' }}>Add Employee</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="selected_radio"
                                                id="teacher"
                                                value="Teacher" defaultChecked />
                                            <label className="form-check-label" htmlFor="Teacher">
                                                Teacher
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-6'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selected_radio" id="staff" value="Staff" />
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
