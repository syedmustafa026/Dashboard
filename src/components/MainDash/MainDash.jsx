import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { Input } from 'antd'
const { Search } = Input

const MainDash = () => {
  return (
    <div className="MainDash">
      <div className='mt-3 card'>
        <div style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} className='bg-success card-header text-center fw-bold'>
          <h2 style={{ color: 'navajowhite' }}>Dashboard</h2>
          <Search className="ant-btn-primary" style={{ width: "40%", borderColor: 'black' }} placeholder={`Search Student`} enterButton="Search" />
        </div>
      </div>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
