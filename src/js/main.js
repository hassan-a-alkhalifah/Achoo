import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../sass/styles.scss';
import GetDoctor from "./GetDoctor.js";


$(document).ready(function() {
  const doctor = new GetDoctor();
  const promise = doctor.getBetterDoctor("Dentist");

  promise.then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });

});
