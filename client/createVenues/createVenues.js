Template.createVenues.events({
    'submit .new-venue': function () {
        event.preventDefault();
        var nameOfVenue = event.target.nameOfVenue.value;
        var numberOfRows = event.target.numberOfRows.value;
        var numberOfColumns = event.target.numberOfColumns.value;

        var seats = [];
        for (var indexX = 1; indexX <= numberOfRows; indexX++) {

            for (var indexB = 1; indexB <= numberOfColumns; indexB++) {

                var t = (indexB - 1) % 26;
                var s = String.fromCharCode(65 + t);

                seats.push({
                    xLocation: indexX,
                    yLocation: indexB,
                    description: s + indexX,
                    booked: false,
                    taken: false,
                    userId: 0,

                });
            }
        }
          Venues.insert({
              name: nameOfVenue,
              seats: seats,
          });  
          
          FlowRouter.go("/NewEvent");
    }
})