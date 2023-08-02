import '../App.css'
import Sidebar from '../components/Sidebar';
import ViewEmployee from '../components/Views/ViewEmpoyee';

const Employees = ({ state }) => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <ViewEmployee />
            </div>
        </div>
    );
}

export default Employees;
