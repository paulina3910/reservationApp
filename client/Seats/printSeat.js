import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './printSeat.html';

import { Mongo } from 'meteor/mongo';
Events = new Mongo.Collection('events');
Venues = new Mongo.Collection('venues');

Template.registerHelper('_', function () {
  return _;
}); 

let getSeats = function() {

  let a = Events.findOne({_id : FlowRouter.getParam('_id')}, {sort: {DateTime: -1, limit: 1}});
  return a ? a.seats : [];
};

Template.print.helpers({
  seats() {
    return getSeats();    
  },
  rows() {
    
    let mountedSeats = getSeats();
    console.log(mountedSeats);
    let floor = _.range(100).map(row => _.range(100).map(seat => {}));
   mountedSeats.forEach(function(seat){
      floor[seat.yLocation][seat.xLocation] = seat;
    });
    return floor;
  
  }
  
});

Template.registerHelper('none', function()
{

  let currentEvent = Events.findOne({_id : FlowRouter.getParam('_id')}, {sort: {DateTime: -1, limit: 1}});
  currentEvent.seats.forEach(function(seat)
    {
      
      var args = Array.prototype.slice.call(seat.userId, Meteor.userId());
      return _.some(args);

    }
  )

});


Template.print.events({
  'submit .seat-booking'(event){
    event.preventDefault();
  
    let seatIdx = event.target.children[0].getAttribute('data-idx');
    let seatIdy = event.target.children[0].getAttribute('data-idy');

    let currentEvent = Events.findOne({_id : FlowRouter.getParam('_id')}, {sort: {DateTime: -1, limit: 1}});
    let seatsUpdated = currentEvent.seats.map(function(seat) {
      if(seat.taken == false){
      if (seat.xLocation == seatIdx && seat.yLocation==seatIdy) seat.booked = !seat.booked
      }


     if(seat.userId == Meteor.userId())
      {
        if (seat.xLocation == seatIdx && seat.yLocation==seatIdy) 
        {
          seat.booked = !seat.booked
          seat.taken = !seat.taken
        }
      }
      if(Roles.userIsInRole( Meteor.userId(), 'admin' ))
      {
        seat.booked = !seat.booked
        seat.taken = !seat.taken
      }
    

      return seat;
    });
    
    
    Events.update({_id: currentEvent._id},{$set:{seats: seatsUpdated}});
  

  },
});

