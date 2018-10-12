import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../sass/styles.scss';
import GetDoctor from "./GetDoctor.js";


$(document).ready(function() {
  const doctor = new GetDoctor();
  $("#form").submit(function(event) {
    const medicalIssue = $("#medical-issue").val();
    const doctorName = $("#doctor-name").val();
    event.preventDefault();
    const promise = doctor.getBetterDoctor(doctorName, medicalIssue);
    promise.then(function(response) {
      let body = JSON.parse(response);
      doctor.createDoctorObjects(body);
      console.log(doctor.doctors.length);
      for (var i = 0; i < doctor.doctors.length; i++) {
        $("#results").append(`<div class="doctor"><p>First Name: ${doctor.doctors[i].firstName}</p><p>Last Name: ${doctor.doctors[i].lastName}</p><p>${doctor.doctors[0].addressStreet} ${doctor.doctors[i].addressStreet2}</p><p>${doctor.doctors[0].addressCity} ${doctor.doctors[i].addressState}, ${doctor.doctors[i].addressZip}</p><p>Phone: ${doctor.doctors[i].phone}</p><p>Website: ${doctor.doctors[i].website}</p><p>Is currently accepting patients: ${doctor.doctors[i].acceptsNewPatients}</p>`);
      }
    }, function(error) {
      console.log(error);
    });
    $("#medical-issue").val("");
    $("#doctor-name").val("");
  });
});
