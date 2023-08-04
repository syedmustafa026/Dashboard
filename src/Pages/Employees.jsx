import '../App.css'
import Sidebar from '../components/Sidebar';
import ViewEmployees from '../components/Views/ViewEmpoyees';

const Employees = ({ state }) => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <ViewEmployees />
            </div>
        </div>
    );
}

export default Employees;
