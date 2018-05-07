import { Meteor } from 'meteor/meteor'

import './NewEvent.html';
import { Mongo } from 'meteor/mongo';

ProfileImages = new FS.Collection("ProfileImages", {
    stores: [new FS.Store.GridFS("ProfileImages")]
});

Template.NewEvent.helpers({
    venueFromDB() {
        return Venues.find().fetch();

    },
    nameOfVenue: function () {
        return this.name;
    },
    idOfVenue: function () {
        return this._id;
    }
});

Template.NewEvent.events({
    'change #dropDownList': function (event, template) {
        var selectedvalue = event.target.value;

    },
    'submit .new-event': function () {
        event.preventDefault();
        var nameOfEvent = event.target.nameOfEvent.value;
        var descOfEvent = event.target.DescOfEvent.value;
        var shortDescOfEvent = event.target.ShortDescOfEvent.value;
        var venuesId = event.target.dropDownList.value;
        var dateOfEvent = event.target.dateOfEvent.value;
        var timeOfEvent = event.target.timeOfEvent.value;

        var venue = Venues.findOne({ _id: venuesId });



      /*  var file = $('#profileImage').get(0).files[0];

        if (file) {

            fsFile = new FS.File(file);

            ProfileImages.insert(fsFile, function (err, result) {
                if (err) {
                    throw new Meteor.Error(err);
                } else {
                    var imageLoc = '/cfs/files/ProfileImages/' + result._id;

                    Events.insert({
                        name: nameOfEvent,
                        description: descOfEvent,
                        shortdescription: shortDescOfEvent,
                        venueId: venuesId,
                        seats: venue.seats,
                        photo: imageLoc,
                        date: dateOfEvent,
                        time: timeOfEvent
                    });
                }
            });
        } else {*/
            Events.insert({
                name: nameOfEvent,
                description: descOfEvent,
                shortdescription: shortDescOfEvent,
                venueId: venuesId,
                seats: venue.seats,
                date: dateOfEvent,
                time: timeOfEvent
            });
        

        event.target.nameOfEvent.value = '';
        event.target.DescOfEvent.value = '';
        event.target.ShortDescOfEvent.value = '';
        event.target.dateOfEvent.value = '';
        event.target.timeOfEvent.value = '';

        FlowRouter.go('/AllEvents');

    }
});