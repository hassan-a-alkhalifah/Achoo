export default class GetDoctor {
  constructor() {
    this.doctors=[];
  }
  resetDoctors() {
    this.doctors = [];
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
        "addressStreet" : response.data[i].practices[0].visit_address.street,
        "addressStreet2" : response.data[i].practices[0].visit_address.street2,
        "addressCity" : response.data[i].practices[0].visit_address.city,
        "addressState" : response.data[i].practices[0].visit_address.state,
        "addressZip" : response.data[i].practices[0].visit_address.zip,
        "phone" : response.data[i].practices[0].phones[0].number,
        "website" : response.data[i].practices[0].website,
        "acceptsNewPatients" : response.data[i].practices[0].accepts_new_patients
      });
      if(this.doctors[i].website === undefined) {
        this.doctors[i].website = "Not available";
      }
      if(this.doctors[i].acceptsNewPatients === true) {
        this.doctors[i].acceptsNewPatients = "Yes";
      } else {
        this.doctors[i].acceptsNewPatients = "No";
      }
    }
  }
}
