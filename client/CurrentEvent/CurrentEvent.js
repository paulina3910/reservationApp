import { Mongo } from 'meteor/mongo';

Template.CurrentEvent.helpers({
  venueFromDB() {
    return Events.find().fetch();

  },
  idOfVenue: function () {
    return this._id;
  },
  activeListClass(event) {
    const active = ActiveRoute.name('Event.show')
      && FlowRouter.getParam('_id') == event._id;
    return active && 'active';
  },
  
  
});

let getEvent = function() {

  let a = Events.findOne({ _id: FlowRouter.getParam('_id') }, { sort: { DateTime: -1, limit: 1 } });
  return a;
};



Template.Events_show_page.helpers({
  eventsIdArray() {
    const eventId = FlowRouter.getParam('_id');

    return Events.find(eventId).fetch();

  },
});

Template.Events_show_page.events({
  'click #reservation': function (e) {
    e.preventDefault();

    let currentEvent = getEvent();
    let seatsUpdated = currentEvent.seats.map(function (seat) {
      if (seat.booked == true && seat.taken == false) {
        $('#confirmModal').modal('show');
      }
    });
    },
  'click .fa-trash' : function(){
      let eventID = getEvent();
      Meteor.call('deleteEvent', eventID._id );
      
      FlowRouter.go('/AllEvents');
  }
});

Template.ReservationAction.events({
  'submit .send-form': function (e) {
    e.preventDefault();
   var email = event.target.email.value;
   var fistName = event.target.fistName.value;

   if(email=="" || fistName=="")
   {

    alert("Wszystkie pola muszą być uzypełnione!!");

   } else if(!email.includes("@"))
   {
    alert("Mail musi zawierać znak @!!");

   }
   else
   {
    let currentEvent = Events.findOne({ _id: FlowRouter.getParam('_id') }, { sort: { DateTime: -1, limit: 1 } });
    let seatsUpdated = currentEvent.seats.map(function (seat) {
      if (seat.booked == true && seat.taken == false) 
      {
      Meteor.call('sendEmail', email, seat.xLocation, seat.yLocation);

      seat.taken = true;
      seat.userId=Meteor.userId();

       $('#confirmModal').modal('hide');

      }
      return seat;
    });

    Events.update({ _id: currentEvent._id }, {$set:{ seats: seatsUpdated }});
  }
  }
})
