import SimpleSchema from 'simpl-schema'



CreateEvent = new Mongo.Collection('createEvent');

//Venues = new Mongo.Collection('venues');
/*
DropDownSchema = new SimpleSchema({
        dropdown : {
            type : String,
            label : "Wybierz Aule:",
            autoform : {
              options: function(){
                var doc = Venues.findOne();
                var docOptions = doc && doc.options;
                return _.map(docOptions, function(value){
                  return {
                    label: value,
                    value: value
                  };
                })
            }
        }
    }
});

EventSchema = new SimpleSchema({
    name: {
    type: String,
    label: "Nazwa wydarzenia"
    },
    desc: {
    type: String,
    label: "Opis"
    }
        });
    
    
    CreateEvent.attachSchema(EventSchema);
    */