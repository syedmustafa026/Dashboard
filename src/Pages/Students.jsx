import '../App.css'
import Sidebar from '../components/Sidebar';
import ViewStudents from '../components/Views/ViewStudents';

const Students = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <ViewStudents/>
            </div>
        </div>
    );
}

export default Students;
