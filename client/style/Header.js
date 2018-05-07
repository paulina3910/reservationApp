Template.Header.events({
    'click #logout': function (e) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/AllEvents');

    },
    'click #login':function(e){
        e.preventDefault();
        $('#loginModel').modal('show');

    }
});
