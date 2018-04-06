import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

import { Mongo } from 'meteor/mongo';
Events = new Mongo.Collection('events');


import { Venues } from '../collections/Venues.js';





Venues.insert({
  name:"AulaA",
  seats:[
      {xLocation:1, yLocation:1,description:"A1"},
      {xLocation:2, yLocation:1,description:"A2"},
      {xLocation:3, yLocation:1,description:"A3"},
      {xLocation:4, yLocation:1,description:"A4"},
      {xLocation:5, yLocation:1,description:"A5"},
      {xLocation:6, yLocation:1,description:"A6"},
      {xLocation:7, yLocation:1,description:"A7"},
      {xLocation:8, yLocation:1,description:"A8"},
      {xLocation:9, yLocation:1,description:"A9"},
      {xLocation:10, yLocation:1,description:"A10"},
      {xLocation:11, yLocation:1,description:"A11"},
      {xLocation:12, yLocation:1,description:"A12"},
      {xLocation:13, yLocation:1,description:"A13"},
      {xLocation:14, yLocation:1,description:"A14"},
      {xLocation:15, yLocation:1,description:"A15"},
      {xLocation:16, yLocation:1,description:"A16"},
      {xLocation:17, yLocation:1,description:"A17"},
      {xLocation:18, yLocation:1,description:"A18"},
      {xLocation:19, yLocation:1,description:"A19"},
      {xLocation:20, yLocation:1,description:"A20"},

       {xLocation:1, yLocation:2,description:"B1"},
      {xLocation:2, yLocation:2,description:"B2"},
      {xLocation:3, yLocation:2,description:"B3"},
      {xLocation:4, yLocation:2,description:"B4"},
      {xLocation:5, yLocation:2,description:"B5"},
      {xLocation:6, yLocation:2,description:"B6"},
      {xLocation:7, yLocation:2,description:"B7"},
      {xLocation:8, yLocation:2,description:"B8"},
      {xLocation:9, yLocation:2,description:"B9"},
      {xLocation:10, yLocation:2,description:"B10"},
      {xLocation:11, yLocation:2,description:"B11"},
      {xLocation:12, yLocation:2,description:"B12"},
      {xLocation:13, yLocation:2,description:"B13"},
      {xLocation:14, yLocation:2,description:"B14"},
      {xLocation:15, yLocation:2,description:"B15"},
      {xLocation:16, yLocation:2,description:"B16"},
      {xLocation:17, yLocation:2,description:"B17"},
      {xLocation:18, yLocation:2,description:"B18"},
      {xLocation:19, yLocation:2,description:"B19"},
      {xLocation:20, yLocation:2,description:"B20"},

       {xLocation:1, yLocation:3,description:"C1"},
      {xLocation:2, yLocation:3,description:"C2"},
      {xLocation:3, yLocation:3,description:"C3"},
      {xLocation:4, yLocation:3,description:"C4"},
      {xLocation:5, yLocation:3,description:"C5"},
      {xLocation:6, yLocation:3,description:"C6"},
      {xLocation:7, yLocation:3,description:"C7"},
      {xLocation:8, yLocation:3,description:"C8"},
      {xLocation:9, yLocation:3,description:"C9"},
      {xLocation:10, yLocation:3,description:"C10"},
      {xLocation:11, yLocation:3,description:"C11"},
      {xLocation:12, yLocation:3,description:"C12"},
      {xLocation:13, yLocation:3,description:"C13"},
      {xLocation:14, yLocation:3,description:"C14"},
      {xLocation:15, yLocation:3,description:"C15"},
      {xLocation:16, yLocation:3,description:"C16"},
      {xLocation:17, yLocation:3,description:"C17"},
      {xLocation:18, yLocation:3,description:"C18"},
      {xLocation:19, yLocation:3,description:"C19"},
      {xLocation:20, yLocation:3,description:"C20"}

  ]
});
