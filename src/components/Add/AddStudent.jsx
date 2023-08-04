import React from 'react'
import { studentData } from '../../Data/DummyData'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import Sidebar from '../Sidebar'

const AddStudent = () => {
    const navigate = useNavigate()
    const submitEmployee = async (event) => {
        event.preventDefault()
        const payload = {}
        payload.name = event.target.name.value || ''
        payload.father_name = event.target.father_name.value || ''
        payload.mobile = event.target.mobile.value || ''
        payload.cnic = event.target.cnic.value || ''
        payload.gr_no = event.target.gr_no.value || ''
        payload.class = event.target.class.value || ''
        payload.age = event.target.age.value || ''
        payload.session = event.target.session.value || ''
        payload.address = event.target.address.value || ''
        payload.monthly_fees = event.target.monthly_fees.value || ''
        payload.admission_fees = event.target.admission_fees.value || ''
        payload.annual_fees = event.target.annual_fees.value || ''  


        console.log(payload)
        studentData.push(payload)
        navigate(-1)
    }
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='container mt-3'>
                    <form onSubmit={submitEmployee}>
                        <div className='card'>
                            <div className='bg-success card-header text-center'>
                                <h2 style={{ color: 'navajowhite' }}>Add Student</h2>
                            </div>
                            <div className='card-body'>
                                <div className="row mb-3">
                                    <div className='col-4'>
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
                                    <div className='col-4'>
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
                                    <div className='col-4'>
                                        <label htmlFor="dob" className="form-label">
                                            Date of Birth
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dob"
                                            placeholder="Enter Father name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-4'>
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
                                    <div className='col-4'>
                                        <label htmlFor="cnic" className="form-label">
                                            Father CNIC
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
                                    <div className='col-4'>
                                        <label htmlFor="gr_no" className="form-label">
                                            GR No.
                                        </label>
                                        <input
                                            type='number'
                                            minLength={14}
                                            maxLength={14}
                                            className="form-control"
                                            name="gr_no"
                                            placeholder="Enter gr_no number"
                                        />

                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-4'>
                                        <label htmlFor="class" className="form-label">
                                            Class
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="class"
                                            placeholder="Enter class"
                                            required
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="age" className="form-label">
                                            Age
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="age"
                                            placeholder="Enter age"
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="session" className="form-label">
                                            Session
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="session"
                                            placeholder="Enter session"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-4'>
                                        <label htmlFor="monthly_fees" className="form-label">
                                            Monthly Fees
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="monthly_fees"
                                            placeholder="Enter Monthly Fees"
                                            required
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="annual_fees" className="form-label">
                                            Annual Fees
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="annual_fees"
                                            placeholder="Enter Annual Fees"
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="admission_fees" className="form-label">
                                            Admission Fees
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="admission_fees"
                                            placeholder="Enter Admission Fees"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-8'>
                                        <label htmlFor="address" className="form-label">
                                            Full Address
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="address"
                                            placeholder="Enter student full address"
                                            required
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="pic" className="form-label">
                                            Photo
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="pic"
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

export default AddStudent
