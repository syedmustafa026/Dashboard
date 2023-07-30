import '../App.css'
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import Sidebar from '../components/Sidebar';

const Employees = ({state}) => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                
            </div>
        </div>
    );
}

export default Employees;
