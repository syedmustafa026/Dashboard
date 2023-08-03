import React, { useState } from 'react'
import * as colors from '../../Utilities/colors'
import { Input, Button, Radio } from 'antd'
import { employeesOption } from '../../Data/Data'
import { Link } from 'react-router-dom'
const { Search } = Input

const SearchBar = (props) => {
    const onChangeFilterType = ({ target: { value } }) => {
        props.setFilterType(value)
    }
    return (
        <div className='mt-5 mb-2' style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', border: 'none' }}>
            <Link to={props.buttonPath}> <Button style={{ background: '#212529' }} color='black' type="primary">Add {props.name}</Button></Link>
            <Radio.Group
                options={employeesOption}
                onChange={onChangeFilterType}
                value={props.filterType}
                optionType="button"
                buttonStyle="solid"
            />
            <Search style={{ width: "40%", borderColor: 'black' }} placeholder={`Search ${props.name}`} enterButton="Search" />
        </div>
    )
}
export default SearchBar