Template.Register.events({
    'click #register': function (e) {
        e.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Accounts.createUser({
            email: email,
            password: password
        }, function (error) {
            if (error) {
                console.log(error.reason);
            } else {
                let userId = Meteor.userId();
                Meteor.call('roleRegister', userId);
                $('#modelRegister').hide();
                $('.modal-backdrop').hide();
            }
        });
    }
});