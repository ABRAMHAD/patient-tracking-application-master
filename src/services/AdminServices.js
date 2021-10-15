import axios from 'axios';


class AdminServices {

    getAdmin(){
        return axios.get("http://localhost:8084/getAdmin");
    }
    getPatient(){
        return axios.get("http://localhost:8084/getPatient");
    }
    getDoctor(){
        return axios.get("http://localhost:8084/getDoctor");
    }
    addAdmin(admin){
        return axios.post("http://localhost:8084/addAdmin",admin);
    }
    addDoctor(doctor){
        return axios.post("http://localhost:8084/addDoctor",doctor);
    }
    getDocById(dId){
        return axios.get("http://localhost:8084/getDoctorById"+ '/' + dId);
    }
    updateDoctor(doctor){
        return axios.put("http://localhost:8084/updateDoctor" , doctor);
    }
    addPatient(patient){
        return axios.post("http://localhost:8084/Doctor/addPatient",patient);
    }
    getPatientById(pId){
        return axios.get("http://localhost:8084/Doctor/getPatientById"+ '/' + pId);
    }
    updatePatient(patient){
        return axios.put("http://localhost:8084/updatePatient" ,patient);
    }
    getTreatmentById(pId){
        return axios.get("http://localhost:8084/Doctor/getHistory"+ '/' + pId);
    }
    
    deleteDoctor(dId){
        return axios.delete("http://localhost:8084/deleteDoctor" + '/' + dId);
    }
    deletePatient(pId){
        return axios.delete(" http://localhost:8084/Doctor/deletePatient" + '/' + pId);
    }

    addAppointment(appointment){
        return axios.post("http://localhost:8084/secure/appointment/add_Appointment",appointment);
    }
    viewAllAppointments(){
        return axios.get(" http://localhost:8084/view_All_Appointments");
    }
    getAppointment(appointmentId){
        return axios.get(" http://localhost:8084/view_Appointment_Using_Id"+ '/' + appointmentId);
    }
    deleteAppointment(id){
        return axios.delete("http://localhost:8084/delete_Appointment" + '/' + id);
    }
    updateAppointment(appointment){
        return axios.put("http://localhost:8084/update_Appointment" ,appointment);
    }


   
   

   
    


    
}
export default new AdminServices()