import '../App.css'
import Sidebar from '../components/Sidebar';
import RightSide from '../components/RigtSide/RightSide';

const Revenue = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <RightSide/>
            </div>
        </div>
    );
}

export default Revenue;
