import React, { useState, useEffect } from 'react'
import { studentData } from '../../Data/DummyData'
import { useNavigate, useLocation } from 'react-router-dom'
import '../../App.css'
import Sidebar from '../Sidebar'


const AddStudent = () => {


    const location = useLocation()
    const navigate = useNavigate()
    const [student, setStudent] = useState(null)
    const [st_Name, setSt_Name] = useState('')
    const [father_name, setFather_name] = useState('')
    const [dob, setDob] = useState('')
    const [mobile, setMobile] = useState('')
    const [cnic, setCnic] = useState('')
    const [gr_no, setGr_no] = useState('')
    const [class_no, setClass_no] = useState('')
    const [age, setAge] = useState('')
    const [session, setSession] = useState('')
    const [monthly_fees, setMonthly_fees] = useState('')
    const [annual_fees, setAnnual_fees] = useState('')
    const [admission_fees, setAdmission_fees] = useState('')
    const [address, setAddress] = useState('')
    const [pic, setPic] = useState('')


    const submitStudent = async (event) => {
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
        payload.dob = event.target.dob.value || ''
        payload.pic = event.target.pic.files[0].name || ''

        console.log(payload)
        studentData.push(payload)
        navigate(-1)
    }
    useEffect(() => {
        if (location.state?.id == null) {
            console.log("null mila");
        }
        else {
            const data = studentData.filter((val, id) => { return location.state.id == id + 1 })
            setStudent(data[0])
        }
    }, [])

    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='container mt-3'>
                    <form onSubmit={submitStudent}>
                        <div className='card'>
                            <div className='bg-success card-header text-center fw-bold'>
                                <h2 style={{ color: 'navajowhite' }}>{student?.id ? "EDIT " : "ADD "}STUDENT</h2>
                            </div>
                            <div className='card-body'>
                                <div className="row mb-3">
                                    <div className='col-4'>
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            defaultValue={student?.name}
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            onChange={(e) => setSt_Name(e.target.value)}
                                            placeholder="Enter Full name"
                                            required
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="father_name" className="form-label">
                                            Father Name
                                        </label>
                                        <input
                                            defaultValue={student?.father_name}

                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setFather_name(e.target.value)}
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
                                            defaultValue={student?.dob}
                                            type="date"
                                            className="form-control"
                                            onChange={(e) => setDob(e.target.value)}
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
                                            defaultValue={student?.mobile_number} type="number"
                                            minLength={11}
                                            onChange={(e) => setMobile(e.target.value)}
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
                                            defaultValue={student?.father_cnic}
                                            type='number'
                                            minLength={14}
                                            onChange={(e) => setCnic(e.target.value)}
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
                                            defaultValue={student?.gr_no} type='number'
                                            minLength={14}
                                            onChange={(e) => setGr_no(e.target.value)}
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
                                            defaultValue={student?.class}
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setClass_no(e.target.value)}
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
                                            defaultValue={student?.age}
                                            type="number"
                                            className="form-control"
                                            onChange={(e) => setAge(e.target.value)}
                                            name="age"
                                            placeholder="Enter age"
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="session" className="form-label">
                                            Session
                                        </label>
                                        <input
                                            defaultValue={student?.session} type="text"
                                            className="form-control"
                                            onChange={(e) => setSession(e.target.value)}
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
                                            defaultValue={student?.monthly_fees} type="number"
                                            className="form-control"
                                            onChange={(e) => setMonthly_fees(e.target.value)}
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
                                            defaultValue={student?.annual_fees} type="number"
                                            className="form-control"
                                            onChange={(e) => setAnnual_fees(e.target.value)}
                                            name="annual_fees"
                                            placeholder="Enter Annual Fees"
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="admission_fees" className="form-label">
                                            Admission Fees
                                        </label>
                                        <input
                                            defaultValue={student?.admission_fees} type="number"
                                            className="form-control"
                                            onChange={(e) => setAdmission_fees(e.target.value)}
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
                                            defaultValue={student?.address} type="text"
                                            className="form-control"
                                            onChange={(e) => setAddress(e.target.value)}
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
                                            defaultValue={student?.pic} type="file"
                                            className="form-control"
                                            onChange={(e) => setPic(e.target.value)}
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
