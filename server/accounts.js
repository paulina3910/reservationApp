Meteor.methods({
    roleRegister: function (userId) {
  
        Roles.addUsersToRoles(userId, ['user']);
    }
    });


    //User@.com h user Admin@.com h admin User123@gmail.com h:user