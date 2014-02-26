var Contact = {
    fullName: function () {
        return this.firstName + " " + this.lastName;

    }
};

var Address = {
    fullAddress: function () {
        return this.street + ", " + this.city + ", " + this.state;
    }
};

var Phone = {
    phoneNumber: function () {
        var regEx = /^\d{10}$/g;

        if (regEx.test(this.phone.replace(/\D/g, "")) === true) {
            return this.phone.replace(/\D/g, "");
        } else {
            alert("Not a valid number");
        }
    }
};


$(document).ready(function () {
    $("#add-address").click(function () {
        $("#new-addresses").append('<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            '<input type="text" class="form-control new-street" placeholder="Enter state">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control new-city" placeholder="Enter city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-state">State</label>' +
            '<input type="text" class="form-control new-state" placeholder="Enter state">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-phone-number">Phone number</label>' +
            '<input type="text" class="form-control new-phone-number" placeholder = "Enter 10 digit number">' +
            '</div>' +
            '</div>');
    });


    $("form#new-contact").submit(function (event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = Object.create(Contact);
        newContact.firstName = inputtedFirstName;
        newContact.lastName = inputtedLastName;

        newContact.addresses = [],
       newContact.phones = [],

        $(".new-address").each(function () {
                var inputtedStreet = $(this).find("input.new-street").val();
                var inputtedCity = $(this).find("input.new-city").val();
                var inputtedState = $(this).find("input.new-state").val();

                var newAddress = Object.create(Address);
                newAddress.street = inputtedStreet;
                newAddress.city = inputtedCity;
                newAddress.state = inputtedState;
                newContact.addresses.push(newAddress);
            });

            // $(".new-phones").each(function () {
                    var inputtedPhone = $("input.new-phone-number").val();
                    var newPhone = Object.create(Phone);
                    newPhone.phone = inputtedPhone;

                    // newContact.phones.push(newPhone);
                // });
      

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
        $(".contact").last().click(function () {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);

            $("ul#addresses").text("");

            newContact.addresses.forEach(function (address) {
                $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
            });

            // newPhone.phones(function (phone) {
                $("ul#phoneNumbers").text(newPhone.phoneNumber());
            
            });
            this.reset();
        });
    });
