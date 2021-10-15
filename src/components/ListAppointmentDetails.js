import React, { Component } from 'react'
import AdminServices from '../services/AdminServices';

class ListAppointmentDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointment: []
        }
        this.Home= this.Home.bind(this);
        this.addAppointment = this.addAppointment.bind(this);
        // this.editDoctor = this.editDoctor.bind(this);
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }
    Home()
    {
        window.location.href='/home'
    }
    viewAppointment(id){
        this.props.history.push(`/view-appointment/${id}`);
    }

    addAppointment(){
        this.props.history.push('/add-appointment/_add')
    }

    editAppointment(id){
        this.props.history.push(`/add-appointment/${id}`);
    }

    deleteAppointment(id){
        AdminServices.deleteAppointment(id).then( res => {
            this.setState({appointment: this.state.appointment.filter(appointment => appointment.id !== id)});
        });
    }
    
    componentDidMount() {
        AdminServices.viewAllAppointments().then((res) => {
             this.setState({appointment: res.data});

        });
        
    }

    // addCar() {
    //     window.location.href='/add-car/_add'
    // }

    render() {
        return (
            <div className="customBackground">
            <div className="container">
                  
                <h2 className="text-center">Appointment List</h2>
                <div className="row">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                <button className="btn btn-primary" style={{ marginLeft: "10px" }}onClick={this.addAppointment}> Add Appointment</button>
                    {/* <button className="btn btn-primary" style={{ marginLeft: "10px" }}onClick={this.addCar}> Book Car</button> */}
                </div>
                <br></br>
                <div className="row">
                    <table  className="table table-striped table-bordered table-dark">

                        <thead>
                            <tr>
                                <th> Appointment ID</th>
                                <th> Appointment Date</th>
                                <th> Patient Name</th>
                                <th> Age</th>
                                <th> Gender</th>
                               
                               

                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.appointment.map(
                                   appointment =>
                                        <tr key={appointment.id}>
                                            <td> {appointment.id}</td>
                                            <td> {appointment.appointmentDate}</td>
                                            <td> {appointment.p_name} </td>
                                            <td> {appointment.age}</td>
                                            <td> {appointment.gender}</td>
                                            
                                            

                                            {/* <td><button style={{ marginLeft: "10px" }} onClick={() => this.viewIncentive(car.id)} className="btn btn-info">View Incentive </button> */}
                                            <td><button style={{ marginLeft: "10px" }} onClick={() => this.editAppointment(appointment.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteAppointment(appointment.id)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewAppointment(appointment.id)} className="btn btn-info">View</button>
                                            </td>
                                        </tr>
                                        
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
            </div>
        )
    }
}

export default ListAppointmentDetailsComponent