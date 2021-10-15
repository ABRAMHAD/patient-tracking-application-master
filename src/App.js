import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Login from './containers/Login';
import DoctorLogin from './containers/DoctorLogin';
import LoginOption from './containers/LoginOption';
import HomeComponent from './HomeComponent';
import ListAdminDetailsComponent from './components/ListAdminDetails';
import ListDoctorDetailsComponent from './components/ListDoctorDetails';
import ListPatientDetailsComponent from './components/ListPatientDetails';
import AddAdminComponent from './components/AddAdminComponent';
import AddDoctorComponent from './components/AddDoctorComponent';
import ViewDoctorComponent from './components/ViewDoctorComponent';
import DoctorHomeComponent from './DoctorHomeComponent';
import AddPatientComponent from './components/AddPatientComponent';
import ListHistoryComponent from './components/ListHistoryDetails';
import ViewPatientComponent from './components/ViewPatientComponent';
import ViewHistoryComponent from './components/ViewHistoryComponent';
import ListAppointmentDetailsComponent from './components/ListAppointmentDetails';
import AddAppointmentComponent from './components/AddAppointmentComponent';
import ViewAppointmentComponent from './components/ViewAppointmentComponent';
import Gallery from './components/Gallery';
import Contact from './common/Contact';
import Service from './common/Service';

function App() {
  
  return (
    <div className="" >
      
      <div>
        <Router>


       
              <HeaderComponent />

              <div>
              <Switch>
              <Route exact path="/">
                <LoginOption />
              </Route>

              <Route exact path="/login">
                <Login />

              </Route>
              <Route exact path="/doctorlogin">
                     
                        <DoctorLogin/>
                         </Route>

              <Route path = "/home" exact component = {HomeComponent}></Route>
              <Route path = "/doctorhome" exact component = {DoctorHomeComponent}></Route>
              <Route path = "/admins" component = {ListAdminDetailsComponent}></Route>
              <Route path = "/doctors" component = {ListDoctorDetailsComponent}></Route>
              <Route path = "/patients" component = {ListPatientDetailsComponent}></Route>
              <Route path = "/add-admin" component = {AddAdminComponent}></Route>
              <Route path = "/add-doctor/:dId" component = {AddDoctorComponent}></Route>
              <Route path = "/view-doctor/:dId" component = {ViewDoctorComponent}></Route>
              <Route path = "/add-patient/:pId" component = {AddPatientComponent}></Route>
              <Route path = "/view-patient/:pId" component = {ViewPatientComponent}></Route>
              <Route path = "/phistory" component = {ListHistoryComponent}></Route>
              <Route path = "/view-History/:pId" component = {ViewHistoryComponent}></Route>
              <Route path = "/appointment" component = {ListAppointmentDetailsComponent}></Route>
              <Route path = "/add-appointment/:id" component = {AddAppointmentComponent}></Route>
              <Route path = "/view-appointment/:id" component = {ViewAppointmentComponent}></Route>
              <Route path = "/gallery" component = {Gallery}></Route>
              <Route path = "/contact" component = {Contact}></Route>
              <Route path="/service" component={Service}></Route>
              {/* <Route path = "/add-treatment/:pId" component = {AddTreatmentComponent}></Route> */}

              
              </Switch>
                </div>
              <FooterComponent />
        </Router>
      
        </div>
      
    </div>
  );
}

export default App;
