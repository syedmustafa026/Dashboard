import '../../App.css'
import Sidebar from '../Sidebar';

const EmployeeDetail = ({ state }) => {
    console.log(state);
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <section style={{ marginTop: '6rem', marginLeft: '10rem ' }} >
                    <div class="row text-dark">
                        <div class="col-md-6">
                            <div class="mb-2">
                                <h1 class="text-dark fw-bold mb-5">Teacher: </h1>
                            </div>
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">Name</p>
                                <p class="text-dark lead">1</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">Father Name</p>
                                <p class="text-dark lead">Mustafa</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">Mobile Number</p>
                                <p class="text-dark lead">hello</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">Qualification</p>
                                <p class="text-dark lead"> BSCS </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">Designation</p>
                                <p class="text-dark lead">saxon</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">CNIC</p>
                                <p class="text-dark lead">222</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">Salary</p>
                                <p class="text-dark lead">3466</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-muted fw-bold m-0">Salary Status</p>
                                <p class="text-dark lead">Paid</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EmployeeDetail;








