import React, { Component } from 'react'
import AdminServices from '../services/AdminServices'


class ViewAppointmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            appointment: {}
        }
    }

    Home() {
        window.location.href = '/home'
    }

    componentDidMount(){
        AdminServices.getAppointment(this.state.id).then( res => {
            this.setState({appointment: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Appointment</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Appointment Date: </label>
                            <div> { this.state.appointment.appointmentDate }</div>
                        </div>
                        <div className = "row">
                            <label>Patient Name: </label>
                            <div> { this.state.appointment.p_name }</div>
                        </div>
                        <div className = "row">
                            <label>Patient Age: </label>
                            <div> { this.state.appointment.age }</div>
                        </div>
                        <div className = "row">
                            <label>Patient Gender: </label>
                            <div> { this.state.appointment.gender }</div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}

export default ViewAppointmentComponent