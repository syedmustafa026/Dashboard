import * as React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Employees from './Pages/Employees'
import Students from './Pages/Students'
import Revenue from './Pages/Revenue'
import Expenses from './Pages/Expenses'
import AddEmployee from './components/Add/AddEmployees'


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/Employees" element={<Employees />} />
          <Route exact path="/employee/add" element={<AddEmployee />} />
          <Route exact path="/employee/edit" element={< AddEmployee />} />
          <Route exact path="/employee/view" element={< AddEmployee />} />

          <Route path="/Students" element={<Students />} />
          <Route path="/Revenue" element={<Revenue />} />
          <Route path="/Expenses" element={<Expenses />} />

        </Routes>
      </BrowserRouter>,
    </div>
  )
}
