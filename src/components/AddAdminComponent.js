import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';
import AdminServices from '../services/AdminServices';
import Button from "react-bootstrap/Button";

class AddAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            // adminId: this.props.match.params.adminId,
            userName: '',
            password: ''
           
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateAdmin = this.saveOrUpdateAdmin.bind(this);
    }

    //step 3
    // componentDidMount(){

    //     step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         AdminServices.addAdmin(this.state.adminId).then( (res) =>{
    //             let admin = res.data;
    //             this.setState({userName: admin.userName,
    //                 password: admin.password,
                    
    //             });
    //         });
    //     }        
    // }


    validate = () => {
        let flag = true;

        if (this.state.userName === "") {
            flag = false;
            this.setState({ userNameError: "Username Is Required" });
        }else {
            this.setState({ doctorNameError: "" });
        }

          if (!this.state.password) {
            flag = false;
            this.setState({ passwordError: "Password Is Required" });
        } else if (this.state.password.length < 5) {
            this.setState({ passwordError: "Password length should be more than 5" });
        }
        
        else {
            this.setState({ passwordError: "" });
        }
        return flag;
    };
    saveOrUpdateAdmin = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        let admin = {userName: this.state.userName, password: this.state.password};
        console.log('admin => ' + JSON.stringify(admin));

        AdminServices.addAdmin(admin).then(res =>{
            this.props.history.push('/admins');
        
        });

        // // step 5
        // if(this.state.id === '_add'){
        //     EmployeeService.createEmployee(employee).then(res =>{
        //         this.props.history.push('/employees');
        //     });
        // }else{
        //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
        //         this.props.history.push('/employees');
        //     });
        // }

    }
    }
    
    changeNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/home');
    }
    Home() {
        window.location.href = '/home'
    }

    
    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                <br></br>
                   <div className = "container">
                        
                                <form className="form-style">

                                <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Admin Details here</h4>
                               
                                   
    
                                        <div className = "form-group" style={{ color: 'white' }}>
                                            <label>  Username: </label>
                                            <div className="alert-danger">{this.state.userNameError}</div>
                                            <input placeholder="Username" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group" style={{ color: 'white' }}>
                                            <label> Password: </label>
                                            <div className="alert-danger">{this.state.passwordError}</div>
                                            <input placeholder="Password" name="password" type="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        

                                        <Button block size="lg"  onClick={this.saveOrUpdateAdmin}>Save</Button>
                                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                  
        )
    }
}

export default AddAdminComponent