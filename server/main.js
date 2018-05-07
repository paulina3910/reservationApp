import { Meteor } from 'meteor/meteor';
/*
Meteor.startup(() => {
  Meteor.startup(function () {
    process.env.MAIL_URL = 'smtps://postmaster%40sandboxcbffdf5fecea4850b7143985b3a3c0a0.mailgun.org:2784aec27a47de717d061d0b82652e80-80bfc9ce-bda593d1@smtp.mailgun.org:587';
  });
  */


Meteor.startup(function () {
});

smtp = {
  username: 'paulinex3910@gmail.com',   // eg: server@gentlenode.com
  password: 'paulina3910',   // eg: 3eeP1gtizk5eziohfervU
  server: 'smtp.gmail.com',  // eg: mail.gandi.net
  port: 465
}

process.env.MAIL_URL = 'smtps://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
Meteor.methods({
  sendEmail: function (email, xLocation, yLocation,description) {

    Email.send({
      from: "meteor.email.2014@gmail.com",
      to: email,
      subject: "Zarezerwowany bilet",
      text: "Cześć,                            Zarezerwowałeś bilet na wydarzenie twoje miejsce to rząd "+description+ "                                                                        Zapraszamy!!!"
    });


  },
  deleteEvent: function(id)
  {
    Events.remove(id);
  }
});

import { Mongo } from 'meteor/mongo';


Events = new Mongo.Collection('events');

Venues = new Mongo.Collection('venues');

ProfileImages = new FS.Collection("ProfileImages", {
  stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");

Reservation = new Mongo.Collection('reservation');







