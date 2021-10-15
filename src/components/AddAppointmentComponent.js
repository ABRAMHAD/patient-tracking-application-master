import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';
import AdminServices from '../services/AdminServices';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class AddAppointmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step 2
            id: this.props.match.params.id,
            appointmentDate: '',
            p_name: '',
            age: '',
            gender: '',

            appointmentObj: {
                "id": 0,
                "appointmentDate": "",
                "p_name": "",
                "age": "",
                "gender": ""
            }

        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
    }


    validate = () => {
        let flag = true;
        var namePattern = new RegExp(/^[a-zA-Z ]+$/);
        if (!this.state.appointmentDate) {
            flag = false;
            this.setState({ dateError: " Date Is Required" });
        } else {
            this.setState({ dateError: "" });
        }
        if (this.state.p_name === "") {
            flag = false;
            this.setState({ nameError: "Name Is Required" });
        } else if (!namePattern.test(this.state.p_name)) {
            this.setState({ nameError: "Name should contain alphabates only" });
            flag = false;
        }
        else {
            this.setState({ nameError: "" });
        }
        if (!this.state.age) {
            flag = false;
            this.setState({ ageError: "Age Is Required" });
        } 
        else {
            this.setState({ ageError: "" });
        }
        if (!this.state.gender) {
            flag = false;
            this.setState({ genderError: "Gender Is Required" });
        } else {
            this.setState({ genderError: "" });
        }
        
        return flag;
    };

    // step 3
    componentDidMount() {

        //step 4
        if (this.state.id === '_add') {
            return
        } else {
            AdminServices.getAppointment(this.state.id).then((res) => {
                let appointment = res.data;
                this.setState({
                    appointmentDate: appointment.appointmentDate, p_name: appointment.p_name, age: appointment.age, gender: appointment.gender

                });
            });
        }
    }
    saveOrUpdateDoctor = (e) => {
        console.log(this.state);
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);

            let appointment = { id: this.state.id, appointmentDate: this.state.appointmentDate, p_name: this.state.p_name, age: this.state.age, gender: this.state.gender };
            let appointment1 = { appointmentDate: this.state.appointmentDate, p_name: this.state.p_name, age: this.state.age, gender: this.state.gender };
            console.log('appointment => ' + JSON.stringify(appointment));

            // // step 5
            if (this.state.id === '_add') {
                AdminServices.addAppointment(appointment1).then(res => {
                    this.props.history.push('/#');
                });
            } else {
                AdminServices.updateAppointment(appointment).then(res => {
                    this.props.history.push('/#');
                });
            }
        }
    }

    changeDateHandler = (event) => {
        this.setState({ appointmentDate: event.target.value });
    }
    changeNameHandler = (event) => {
        this.setState({ p_name: event.target.value });
    }

    changeAgeHandler = (event) => {
        this.setState({ age: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value });
    }

    cancel() {
        this.props.history.push('/home');
    }
    Home() {
        window.location.href = '/home'
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Book Appointment</h4>
        } else {
            return <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Update Appointment</h4>
        }
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                    <br></br>
                    <div className="container">

                        <form className="form-style">
                            {
                                this.getTitle()
                            }

                            <div className="form-group" style={{ color: 'white' }}>
                                <label>  Appointment Date: </label>
                                <div className="alert-danger">{this.state.dateError}</div>
                                <input placeholder="Date" name="appointmentDate" type="date" className="form-control"
                                    value={this.state.appointmentDate} onChange={this.changeDateHandler} />
                            </div>


                            <div className="form-group" style={{ color: 'white' }}>
                                <label>  Name: </label>
                                <div className="alert-danger">{this.state.nameError}</div>
                                <input placeholder="Name" name="p_name" type="text" className="form-control"
                                    value={this.state.p_name} onChange={this.changeNameHandler} />
                            </div>

                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Age: </label>
                                <div className="alert-danger">{this.state.ageError}</div>
                                <input placeholder="age" name="age" type="number" className="form-control"
                                    value={this.state.age} onChange={this.changeAgeHandler} />
                            </div>
                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Gender: </label>
                                <div className="alert-danger">{this.state.genderError}</div>
                                <input placeholder="Gender" name="gender" type="text" className="form-control"
                                    value={this.state.gender} onChange={this.changeGenderHandler} />
                            </div>


                            <Button block size="lg" onClick={this.saveOrUpdateDoctor}>Save</Button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAppointmentComponent



