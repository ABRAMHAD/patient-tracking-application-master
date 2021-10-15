import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';
import AdminServices from '../services/AdminServices';
import Button from "react-bootstrap/Button";


class AddPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step 2
            pId: this.props.match.params.pId,
            pName: '',
            gender: '',
            age: '',
            contact: '',
            address:'',
            treatmentHistory:[{

            }]
            
            

            // patientObj: {
            //     "pId": 0,
            //     "pName": "",
            //     "gender": "",
            //     "age": "",
            //     "contact": "",
            //     "address": "",
            //     treatmentHistory:{
            //         "dateOfArrival":"",
            //         "treatmentCost":"",
            //         "consultation":"",
            //         "diesease":""

            //     }
               
            // }

        }

       
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        // this.changeDateHandler = this.changeDateHandler.bind(this);
        // this.changeCostHandler = this.changeCostHandler.bind(this);
        // this.changeConsultationHandler = this.changeConsultationHandler.bind(this);
        // this.changeDieseaseHandler = this.changeDieseaseHandler.bind(this);
        this.saveOrUpdatePatient = this.saveOrUpdatePatient.bind(this);
        // this.addTreatment = this.addTreatment.bind(this);
    }


    validate = () => {
        let flag = true;
         var namePattern = new RegExp(/^[a-zA-Z ]+$/);
        if (!this.state.pId) {
            flag = false;
            this.setState({ pIdError: " Id Is Required" });
        } else {
            this.setState({ pIdError: "" });
        }
        if (this.state.pName === "") {
            flag = false;
            this.setState({ patientNameError: "Name Is Required" });
        } else if (!namePattern.test(this.state.pName)) {
            this.setState({patientNameError:"Name should contain alphabates only"}) ;
            flag = false;
          }
         else {
            this.setState({ patientNameError: "" });
        }
        if (!this.state.gender) {
            flag = false;
            this.setState({ patientGenderError: "Gender Is Required" });
        } else if (!namePattern.test(this.state.gender)) {
            this.setState({patientGenderError:"Should contain alphabates only"}) ;
            flag = false;
          } 
        else {
            this.setState({patientGenderError: "" });
        }
        if (!this.state.contact) {
            flag = false;
            this.setState({ contactError: "Contact Is Required" });
        } else {
            this.setState({ contactError: "" });
        }

        if (!this.state.age) {
            flag = false;
            this.setState({ patientAgeError: "Age Is Required" });
        } else if (this.state.age.length > 3) {
            this.setState({ patientAgeError: "Age length should be less than 3" });
        }
    
        else {
            this.setState({ patientAgeError: "" });
        }

        if (!this.state.address) {
            flag = false;
            this.setState({ addressError: "Address Is Required" });
        } 
        else {
            this.setState({ addressError: "" });
        }
        return flag;
    };

    // step 3
    componentDidMount() {

        //step 4
        if (this.state.pId === '_add') {
            return
        } else {
            AdminServices.getPatientById(this.state.pId).then((res) => {
                let patient = res.data;
                this.setState({
                    pName: patient.pName, gender: patient.gender, age: patient.age, contact: patient.contact, address: patient.address
                    
                    // ,dateOfArrival: patient.dateOfArrival, treatmentCost: patient.treatmentCost, consultation: patient.consultation,diesease: patient.diesease

                });
            });
        }
    }
    saveOrUpdatePatient = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);

            let patient = { pId:this.state.pId, pName:this.state.pName, gender: this.state.gender, age: this.state.age, contact: this.state.contact, address: this.state.address};
            let patient1 = { pName: this.state.pName, gender: this.state.gender, age: this.state.age, contact: this.state.contact, address: this.state.address};
            //    , dateOfArrival: this.state.treatmentHistory.dateOfArrival,treatmentCost: this.state.treatmentHistory.treatmentCost, consultation: this.state.treatmentHistory.consultation, diesease: this.state.treatmentHistory.diesease 
            console.log('patient => ' + JSON.stringify(patient));

            if (this.state.pId === '_add') {
                AdminServices.addPatient(patient1).then(res => {
                    this.props.history.push('/patients');
                });
            } else {
                AdminServices.updatePatient(patient, this.state.pId).then(res => {
                    this.props.history.push('/patients');
                });
            }
        }
    }

    changeNameHandler = (event) => {
        this.setState({ pName: event.target.value });
    }
    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    changeAgeHandler = (event) => {
        this.setState({ age: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeContactHandler = (event) => {
        this.setState({ contact: event.target.value });
    }
    
    // changeDateHandler = (event) => {
    //     this.setState({ dateOfArrival: event.target.value });
    // }
    // changeCostHandler = (event) => {
    //     this.setState({ treatmentCost: event.target.value });
    // }
    // changeConsultationHandler = (event) => {
    //     this.setState({ consultation: event.target.value });
    // }
    // changeDieseaseHandler = (event) => {
    //     this.setState({ diesease: event.target.value });
    // }

    
    Home() {
        window.location.href = '/home'
    }

    getTitle() {
        if (this.state.pId === '_add') {
            return <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Patient Details here</h4>
        } else {
            return <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Update Patient</h4>
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
                                <label>  Name: </label>
                                <div className="alert-danger">{this.state.patientNameError}</div>
                                <input placeholder="PatientName" name="pName" type="text" className="form-control"
                                    value={this.state.pName} onChange={this.changeNameHandler} />
                            </div>


                            <div className="form-group" style={{ color: 'white' }}>
                                <label>  Gender: </label>
                                <div className="alert-danger">{this.state.patientGenderError}</div>
                                <input placeholder="Gender" name="gender" type="text" className="form-control"
                                    value={this.state.gender} onChange={this.changeGenderHandler} />
                            </div>

                            {/* <div className="form-group" style={{ color: 'white' }}>
                            <label>  Gender: </label>
                          
              <select value={this.state.gender}   className="form-control" onChange={this.changeGenderHandler}>
                <option value="" ></option>           
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
          </div> */}

                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Age: </label>
                                <div className="alert-danger">{this.state.patientAgeError}</div>
                                <input placeholder="Age" name="age" type="number" className="form-control"
                                    value={this.state.age} onChange={this.changeAgeHandler} />
                            </div>
                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Contact: </label>
                                <div className="alert-danger">{this.state.contactError}</div>
                                <input placeholder="Contact" name="contact" className="form-control"
                                    value={this.state.contact} onChange={this.changeContactHandler} />
                            </div>
                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Address: </label>
                                <div className="alert-danger">{this.state.addressError}</div>
                                <input placeholder="Address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.changeAddressHandler} />
                            </div>

                            {/* <div className="form-group" style={{ color: 'white' }}>
                                <label> Date Of Arrival: </label>
                                <div className="alert-danger">{this.state.addressError}</div>
                                <input placeholder="DateOfArrival" name="dateOfArrival" className="form-control"
                                    value={this.state.treatmentHistory.dateOfArrival} onChange={this.changeDateHandler} />
                            </div>

                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Treatment Cost: </label>
                                <div className="alert-danger">{this.state.addressError}</div>
                                <input placeholder="TreatmentCost" name="treatmentCost" className="form-control"
                                    value={this.state.treatmentHistory.treatmentCost} onChange={this.changeCostHandler} />
                            </div>
                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Medication: </label>
                                <div className="alert-danger">{this.state.addressError}</div>
                                <input placeholder="Medication" name="consultation" className="form-control"
                                    value={this.state.treatmentHistory.consultation} onChange={this.changeConsultationHandler} />
                            </div>
                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Diesease: </label>
                                <div className="alert-danger">{this.state.addressError}</div>
                                <input placeholder="Diesease" name="diesease" className="form-control"
                                    value={this.state.treatmentHistory.diesease} onChange={this.changeDieseaseHandler} />
                            </div> */}

                            <Button className="Success" onClick={this.saveOrUpdatePatient} style={{ marginLeft: "10px" }}>Save</Button>
                            {/* <Button className="Success" onClick={this.addTreatment} style={{ marginLeft: "10px" }}>Add Treatment</Button> */}
                            {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button> */}



                        </form>
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}

                    </div>
                </div>
            </div>





            // <div>
            //     <div className="Login">
            //         <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>


            //         <Form onSubmit={this.saveOrUpdateDoctor} className="form-style">
            //             <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Doctor Details here</h4>
            //             <hr />
            //             <Form.Group size="lg" controlId="dName">

            //                 <Form.Label style={{ color: 'white' }}>Doctor Name</Form.Label>
            //                 <div className="alert-danger">{this.state.doctorNameError}</div>
            //                 <Form.Control
            //                     type="text" name="dName"
            //                     onChange={this.changeNameHandler} />
            //             </Form.Group>
            //             <Form.Group size="lg" controlId="specialization">
            //                 <Form.Label style={{ color: 'white' }}>Specialization</Form.Label>
            //                 <div className="alert-danger">{this.state.specializationError}</div>
            //                 <Form.Control
            //                     type="text" name="specialization"
            //                     onChange={this.changeSpecializationHandler} />
            //             </Form.Group>
            //             <Form.Group size="lg" controlId="doctorEmail">
            //                 <Form.Label style={{ color: 'white' }}>Email</Form.Label>
            //                 <div className="alert-danger">{this.state.doctorEmailError}</div>
            //                 <Form.Control
            //                     type="text" name="doctorEmail"
            //                     onChange={this.changeEmailHandler} />
            //             </Form.Group>


            //             <Form.Group size="lg" controlId="password">
            //                 <Form.Label style={{ color: 'white' }}>Password</Form.Label>
            //                 <div className="alert-danger">{this.state.passwordError}</div>
            //                 <Form.Control
            //                     autoFocus
            //                     type="text" name="password"
            //                     onChange={this.changePasswordHandler} />
            //             </Form.Group>


            //             <Button block size="lg" type="submit">
            //                Add Doctor
            // </Button>
            //         </Form>
            //     </div>

            // </div>
        )
    }
}

export default AddPatientComponent



