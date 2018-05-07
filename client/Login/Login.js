Template.Login.events({
    'submit .login-form' : function(e) {
        e.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
    
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
            }else
            {
                $('#loginModel').modal('hide');



            }
        });

    
    }
});
