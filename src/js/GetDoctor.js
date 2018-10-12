export default class GetDoctor {
  constructor() {
    this.doctors=[];
  }
  getBetterDoctor(name, medicalIssue) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${medicalIssue}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  createDoctorObjects(response) {
    for (var i = 0; i < response.data.length; i++) {
      this.doctors.push({
        "firstName" : response.data[i].profile.first_name,
        "lastName" : response.data[i].profile.last_name,
        "Address Street" : response.data[i].practices[0].visit_address.street,
        "Address Street2" : response.data[i].practices[0].visit_address.street2,
        "Address City" : response.data[i].practices[0].visit_address.city,
        "Address State" : response.data[i].practices[0].visit_address.state,
        "Address Zip" : response.data[i].practices[0].visit_address.zip,
        "Phone" : response.data[i].practices[0].phones[0].number,
        "Website" : response.data[i].practices[0].website,
        "Accepts New Patients" : response.data[i].practices[0].accepts_new_patients
      });
    }
    console.log(this.doctors);
  }

}
