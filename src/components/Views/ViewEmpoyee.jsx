import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import SearchBar from '../Row/SearchBar';
import { employeeData } from '../../Data/DummyData';

const ViewEmployee = () => {
    const [filterType, setFilterType] = useState('All')
    return (
        <div className='container-fluid'>
            <SearchBar
                name={"Employee"}
                buttonPath={'/employee/add'}
                filterType={filterType}
                setFilterType={setFilterType}
            />
            <div className='mt-3 card'>
                <div className='bg-success card-header text-center fw-bold'>
                    <h2 style={{ color: 'navajowhite' }}>EMPLOYEES</h2>
                </div>
            </div>
            <table className="table table-hover table-xl table-bordered text-center">
                <thead className='table-light fw-bolder'>
                    <tr>
                        <th scope="col" style={{ width: '3%' }}>S.no</th>
                        <th scope="col">NAME</th>
                        <th scope="col">ROLE</th>
                        <th scope="col">DESIGNATION</th>
                        <th scope="col">SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData?.length > 0 && employeeData.map((val, i) => (
                        filterType === "All" ?
                            < tr key={i} >
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.role}</td>
                                <td>{val.designation}</td>
                                <td>{val.salary}</td>
                                <td><Button variant="success">Pay now</Button></td>
                                <td>
                                    <Link> <FontAwesomeIcon className='link-warning' icon={faCircleInfo} /></Link>    |      <Link to='/employee/edit'  >  <FontAwesomeIcon className='link-success' icon={faEdit} /></Link>  |     <Link><FontAwesomeIcon onClick={() => window.confirm("Are you sure you want to delete? ")} className='link-danger' icon={faTrash} /></Link>
                                </td>
                            </tr> :
                            val.role == filterType ?
                                < tr key={i} >
                                    <td>{i + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.role}</td>
                                    <td>{val.designation}</td>
                                    <td>{val.salary}</td>
                                    <td><Button variant="success">Pay now</Button></td>
                                    <td>
                                        <Link> <FontAwesomeIcon className='link-warning' icon={faCircleInfo} /></Link>    |      <Link to='/employee/edit'  >  <FontAwesomeIcon className='link-success' icon={faEdit} /></Link>  |     <Link><FontAwesomeIcon onClick={() => window.confirm("Are you sure you want to delete? ")} className='link-danger' icon={faTrash} /></Link>
                                    </td>
                                </tr> : null
                    ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default ViewEmployee