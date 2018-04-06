import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './printSeat.html';

import { Mongo } from 'meteor/mongo';
Events = new Mongo.Collection('events');


Template.registerHelper('_', function () {
  return _;
}); 

Template.body.helpers({
  seats() {
    // Dla wygody wezmy ostatni dodany event #hacki
    return Events.findOne({}, {sort: {DateTime: -1, limit: 1}}).seats;    
  },
  rows() {
    let floor = _.range(10).map(row => _.range(10).map(seat => {}));
    let mountedSeats = Events.findOne({}, {sort: {DateTime: -1, limit: 1}}).seats;
    mountedSeats.forEach(function(seat){
      floor[seat.yLocation][seat.xLocation] = seat;
    });
    return floor;
  },
});
Template.body.events({
  'submit .seat-booking'(event){
    event.preventDefault();
    let seatId = event.target.children[0].getAttribute('data-id');
    let currentEvent = Events.findOne({}, {sort: {DateTime: -1, limit: 1}});
    let seatsUpdated = currentEvent.seats.map(function(seat) {
      if (seat.id == seatId) seat.booked = !seat.booked
      return seat
    })
    Events.update({_id: currentEvent._id}, {seats: seatsUpdated});
  },
});