import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export class LoginOption extends Component {
    constructor(props) {
        super(props)

        this.adminLogin= this.adminLogin.bind(this);
        this.doctorLogin = this.doctorLogin.bind(this);
        this.addAppointment = this.addAppointment.bind(this);
       
    }

    adminLogin()
    {
        window.location.href='/login'
    }
    doctorLogin()
    {
        window.location.href='/doctorlogin'
    }
    addAppointment(){
      window.location.href='/add-appointment/_add'
  }
    
    render() {
        return (

            <div>
            <Particles
      params={{
        particles:{
          number:{
            value: 50,
            density:{
              enable: true,
              value_area:900
            }
          }
        }
      }} />

            <div className="Login">
            <div className="main-info">
            <h1>Welcome to patient tracking system</h1>
            <p>We will take care of your health</p>
            {/* <Typed 
                className="typed-text"
                strings={["We will take care of your health"]}
                typeSpeed={40}
                loop
             /> */}
            <Link  onClick={() => this.adminLogin()} className="btn-main-offer">Admin Login</Link>
                <Link  onClick={() => this.doctorLogin()} className="btn-main-offer">Doctor Login </Link>
                <Link className="btn-main-offer" style={{ marginLeft: "10px" ,marginTop: "2px"}}onClick={this.addAppointment}> Book Appointment</Link>
            </div>
            
        </div>



        </div>
        )
    }
}

export default LoginOption