FlowRouter.route('/NewEvent', {
    name: 'NewEvent',
    action() {
        BlazeLayout.render("NewEvent", {main: "NewEvent"});
    }
});

FlowRouter.route('/', {
    name: 'MainPage',
    action() {
        BlazeLayout.render("MainPage", {main: "MainPage"});
    }
});

FlowRouter.route('/AllEvents', {
    name: 'AllEvents',
    action() {
        BlazeLayout.render("AllEvents", {main: "AllEvents"});
    }
});

FlowRouter.route('/printSeat', {
    name: 'print',
    action() {
        BlazeLayout.render("print", {main: "print"});
    }
});
FlowRouter.route('/events/:_id', {
    name: 'Event.show',
    action() {
      BlazeLayout.render('CurrentEvent', {main: 'Events_show_page'});
    }
  });

  FlowRouter.route('/createVenues', {
    name: 'createVenues',
    action() {
      BlazeLayout.render('createVenues', {main: 'createVenues'});
    }
  });
  FlowRouter.route('/confirm', {
    name: 'confirm',
    action() {
      BlazeLayout.render('confirm', {main: 'confirm'});
    }
  });
