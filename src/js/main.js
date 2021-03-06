import $ from 'jquery';
import './../sass/styles.scss';
import GetDoctor from "./GetDoctor.js";
$(document).ready(function() {
  const doctor = new GetDoctor();
  $("#form").submit(function(event) {
    doctor.resetDoctors();
    $("#results").empty();
    const medicalIssue = $("#medical-issue").val();
    const doctorName = $("#doctor-name").val();
    event.preventDefault();
    const promise = doctor.getBetterDoctor(doctorName, medicalIssue);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0) {
        $("#results").append("<h3>We apologize, there are no search results based on your input. Please try again.</h3>");
      } else {
        doctor.createDoctorObjects(body);
        for (var i = 0; i < doctor.doctors.length; i++) {
          $("#results").append(`<div class="doctor"><div><p>First Name: ${doctor.doctors[i].firstName}</p><p>Last Name: ${doctor.doctors[i].lastName}</p><p>${doctor.doctors[0].addressStreet} ${doctor.doctors[i].addressStreet2}</p><p>${doctor.doctors[0].addressCity} ${doctor.doctors[i].addressState}, ${doctor.doctors[i].addressZip}</p><p>Phone: ${doctor.doctors[i].phone}</p><p>Website: ${doctor.doctors[i].website}</p><p>Is currently accepting patients: ${doctor.doctors[i].acceptsNewPatients}</p></div></div>`);
        }
      }
    }, function(error) {
      $("#results").append(`<h3 id="error-message">${error}</h3>`);
    });
    $("#medical-issue").val("");
    $("#doctor-name").val("");
  });
});
