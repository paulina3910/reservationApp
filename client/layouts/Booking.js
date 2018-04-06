
import './Booking.html';
import {Meteor} from 'meteor/meteor'

import { Mongo } from 'meteor/mongo';
import { Venues } from '../../collections/Venues.js';

//Venues.insert( {name: 'test',xLocation:1, yLocation:1,description:"A1"});



var a =Venues.findOne({}, {sort: {DateTime: -1, limit: 1}});

console.log(Venues);
var myLog =Venues.find({}).fetch();
console.log(myLog);

Template.NewEvent.events({
    'submit form': function(){
        event.preventDefault();
        var playerNameVar = event.target.myOption.value;
        console.log(playerNameVar);
        
    }
});