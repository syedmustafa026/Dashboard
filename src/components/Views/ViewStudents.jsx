import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../../App.css'
import SearchBar from '../Row/SearchBar';
import { studentData } from '../../Data/DummyData';
import { studentsOption } from '../../Data/Data'
const ViewStudents = () => {
    const [filterType, setFilterType] = useState('All')

    return (
        <div style={{ scrollbarWidth: '2px' }} className='container-fluid overflow-scroll'>
            <SearchBar
                name={"Student"}
                buttonPath={'/student/add'}
                filterType={filterType}
                setFilterType={setFilterType}
                options={studentsOption}
            />
            <div className='mt-3 card'>
                <div className='bg-success card-header text-center fw-bold'>
                    <h2 style={{ color: 'navajowhite' }}>STUDENT</h2>
                </div>
            </div>
            <table className="table overflow-scroll table-hover table-xl table-bordered text-center">
                <thead className='table-light fw-bolder '>
                    <tr>
                        <th scope="col" style={{ width: '3%' }}>S.NO</th>
                        <th scope="col">GR.NO</th>
                        <th scope="col">NAME</th>
                        <th scope="col">FATHER NAME</th>
                        <th scope="col">CLASS</th>
                        <th scope="col">FEES</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData?.length > 0 && studentData.map((val, i) => (
                        filterType === "All" ?
                            < tr key={i} >
                                <td>{i + 1}</td>
                                <td>{val.gr_no}</td>
                                <td>{val.name}</td>
                                <td>{val.father_name}</td>
                                <td>{val.class}</td>
                                <td>{val.monthly_fees}</td>
                                <td><Button variant="success">Pay now</Button></td>
                                <td>
                                    <Link to='/student/view'> <FontAwesomeIcon className='link-warning' icon={faCircleInfo} /></Link>    |      <Link to='/student/edit' state={{ id: val.id }} >  <FontAwesomeIcon className='link-success' icon={faEdit} /></Link>  |     <Link><FontAwesomeIcon onClick={() => window.confirm("Are you sure you want to delete? ")} className='link-danger' icon={faTrash} /></Link>
                                </td>
                            </tr> :
                            val.fee_status == filterType ?
                                < tr key={i} >
                                    <td>{i + 1}</td>
                                    <td>{val.gr_no}</td>
                                    <td>{val.name}</td>
                                    <td>{val.father_name}</td>
                                    <td>{val.class}</td>
                                    <td>{val.monthly_fees}</td>
                                    <td><Button variant="success">Pay now</Button></td>
                                    <td>
                                        <Link to='/student/view'> <FontAwesomeIcon className='link-warning' icon={faCircleInfo} /></Link>    |      <Link to='/student/edit' state={{ id: val.id }}>  <FontAwesomeIcon className='link-success' icon={faEdit} /></Link>  |     <Link><FontAwesomeIcon onClick={() => window.confirm("Are you sure you want to delete? ")} className='link-danger' icon={faTrash} /></Link>
                                    </td>
                                </tr> : null
                    ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default ViewStudents