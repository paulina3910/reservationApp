import {Meteor} from 'meteor/meteor'

import './AllEvents.html';
import { Mongo } from 'meteor/mongo';

Template.AllEvents.helpers({
    eventFromDB(){     
        return Events.find({}, {sort: {DateTime: -1, limit: 1}}).fetch();

    },

    }
);





  