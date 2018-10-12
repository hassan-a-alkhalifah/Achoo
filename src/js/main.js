import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../sass/styles.scss';
import GetDoctor from "./GetDoctor.js";


$(document).ready(function() {
  const doctor = new GetDoctor();
  const promise = doctor.getBetterDoctor("","Dentist");

  promise.then(function(response) {
    let body = JSON.parse(response)
    console.log(response);
    console.log("First Name: " + body.data[0].profile.first_name);
    console.log("Last Name: " + body.data[0].profile.last_name);
    console.log("Address Street: " + body.data[0].practices[0].visit_address.street);
    console.log("Address Street2: " + body.data[0].practices[0].visit_address.street2);
    console.log("Address City: " + body.data[0].practices[0].visit_address.city);
    console.log("Address State: " + body.data[0].practices[0].visit_address.state);
    console.log("Address Zip: " + body.data[0].practices[0].visit_address.zip);
    console.log("Phone: " + body.data[0].practices[0].phones[0].number);
    console.log("Website: " + body.data[0].practices[0].website);
    console.log("Accepts New Patients: " + body.data[0].practices[0].accepts_new_patients);
  }, function(error) {
    console.log(error);
  });

});
