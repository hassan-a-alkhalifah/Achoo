import GetDoctor from "./../src/js/GetDoctor.js";

describe("GetDoctor", function() {

  it("Is doctor a instance of GetDoctor", function() {
    const doctor = new GetDoctor();
    expect(doctor instanceof GetDoctor).toBe(true);
  });

});
