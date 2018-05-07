Template.MainNavigation.events({
    'click #register': function (e) {
        e.preventDefault();
        $('#modelRegister').modal('show');

    },
    'click #login':function(e){
        e.preventDefault();
        $('#loginModel').modal('show');

    },
    'click #logout':function(e){
        e.preventDefault();
        Meteor.logout();
    }
});
