describe("Contact", function () {
        describe("fullName", function () {
            it("combines the first and last name, seperated by a space", function () {
                var testContact = Object.create(Contact);
                testContact.firstName = "Paul";
                testContact.lastName = "Ogawa";
                testContact.fullName().should.equal("Paul Ogawa");
            });
        });
        describe("Address", function () {
            describe("fullAddress", function () {
                it("returns the full adress with nice formatting", function () {
                    var testAddress = Object.create(Address);
                    testAddress.street = "208 SW 5th Ave";
                    testAddress.city = "Portland";
                    testAddress.state = "Oregon";
                    testAddress.fullAddress().should.equal("208 SW 5th Ave, Portland, Oregon");

                });
            });
         });

         describe("Phone", function () {
            describe("phoneNumber", function () {
                it("returns the full phone number", function () {
                    var testPhoneNumber = Object.create(Phone);
                    testPhoneNumber.phone = "(503)555-12howaboutthat12";
                    testPhoneNumber.phoneNumber().should.equal("5035551212");
                });
            // describe("phoneNumber", function() {
            //     it("returns true if number is 10 digits", function() {
            //       testPhoneNumber.phoneNumberValidation().should.equal(true);

            //     });
            //  });
                

            });
         });      
});
