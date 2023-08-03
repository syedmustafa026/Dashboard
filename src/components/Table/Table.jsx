import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Button from 'react-bootstrap/Button';
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./Table.css";
import { employeeData } from "../../Data/DummyData";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];


const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else {
    return {
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
    <div className='container-fluid'>
      <div className="Table">
        <h3>Recent Admissions</h3>
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
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div >
  );
}
