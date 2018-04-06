FlowRouter.route('/booking', {
    name: 'createEvent',
    action() {
        BlazeLayout.render("createEvent", {main: "createEvent"});
    }
});

FlowRouter.route('/venues', {
    name: 'printSetas',
    action() {
        BlazeLayout.render("printSeat", {main: "printSeat"});
    }
});