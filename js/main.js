angular.module('gcAPP', [])
    .controller('MainCtrl', function($scope, $http) {
        // 📝Fetching the data from the JSON
        $http.get('https://giocodes.github.io/guest-calendar/guests.json')
            .then(function(res) {
                $scope.allGuests = res.data;
                $scope.filteredGuests = res.data;
                $scope.selectedGuest = res.data[0];
                // 📝 The following have to be set on $scope
                // after loading the JSON to avoid async call errors
                $scope.calcDays = calcDays;
                $scope.updateSelectedGuest = updateSelectedGuest;
                $scope.addNewGuest = addNewGuest;
                // 📝 Every time a filter is applied on the front
                // we filter the guests array and recalculate collection & fees
                applyFilters();
                calcFees();
                // 📝 Sets the default data for the New Guest form
                resetNewGuest();

            });

        // 📝 Setting options and default dates for the filters
        $scope.filters = {
            properties: ['Sunshine Apartments', 'Sunset Villa'],
            source: ['AirBnB', 'HomeAway'],
            status: ['confirmed', 'new', 'cancelled']
        }
        $scope.moveIn = {
            // value: null
            value: new Date('2016-11-01T12:00:00')
        };
        $scope.moveOut = {
            // value: null
            value: new Date('2016-11-30T12:00:00')
        };
        // 📝 Set defaults for profile and addGuest components
        $scope.showProfile = false;
        $scope.showAddGuest = false;

        // 📝 Helper function to clear new guest form
        function resetNewGuest() {
            let date = new Date();
            $scope.newGuest = {
                moveIn: new Date,
                moveOut: new Date(date.setDate(date.getDate() + 1)),
                status: 'new',
                // email: 'name@email.com',
                // phone: '(605)1234567',
                property: 'Sunshine Apartments',
                source: 'AirBnB'
            }
            $scope.showAddGuest = false;
        }

        // 📝 On a bigger dataset, we could use database queries to update the information
        // but since the dataset is small we can manipulate it on the front

        function applyFilters() {
            $scope.filteredGuests = $scope.allGuests;
            // first: take the date range and/or set default values
            let valueIn = $scope.moveIn.value,
                valueOut = $scope.moveOut.value,
                aG = $scope.allGuests;
            let inDate, outDate, filteredDates, filteredGuests;
            if (valueIn) inDate = new Date(valueIn);
            else inDate = new Date('1016-11-11T06:00:00.000Z');
            if (valueOut) outDate = new Date(valueOut);
            else outDate = new Date('3016-11-11T06:00:00.000Z');
            // second: set property, source and status filters
            let pF = $scope.propertyFilter,
                soF = $scope.sourceFilter,
                stF = $scope.statusFilter;
            // console.log(inDate, outDate);

            // third: filter the guests array and update the $scope
            // 1. Apply DATES filters to guest list
            filteredDates = aG.filter(guest => {
                    // console.log('pre new dates');
                    // console.log(guest);
                    // 💡 TO-DO: Dates manipulation can be DRY
                    let moveInDate = new Date(guest['move-in'] + 'T06:00:00.000Z');
                    let moveOutDate = new Date(guest['move-out'] + 'T06:00:00.000Z');
                    // console.log(guest['move-in']);
                    // console.log(moveInDate, inDate);
                    // console.log(moveOutDate, outDate);
                    // return (inDate <= moveInDate || outDate >= moveOutDate)
                    return ((moveInDate >= inDate && moveInDate <= outDate) ||
                        (moveOutDate <= outDate && moveOutDate >= inDate));
                })
                // console.log($scope.filteredGuests)
                // console.log(filteredDates)
                // console.log('first')
                // console.log(filteredDates)
            // 2. Apply property, source and status filters too
            filteredGuests = filteredDates.filter(guest => {
                let pG = guest.property,
                    soG = guest.source,
                    stG = guest.status;
                // console.log(pF, soF, stF)
                // console.log(pG, soG, stG)
                return ((pG === pF || pF === undefined || pF === null) &&
                    (soG === soF || soF === undefined || soF === null) &&
                    (stG === stF || stF === undefined || stF === null))
            })

            // console.log('second')
            // console.log(filteredGuests)
            // 📝 Finally update $scope and re-calculate collection & fees
            $scope.filteredGuests = filteredGuests;
            // console.log($scope.filteredGuests)
            calcFees();
        }
        // this is just to make the function available through the $scope
        $scope.applyFilters = applyFilters;

        // 📝 Collection and Fee details function
        function calcFees() {
            // 1. Determine the number of days to calculate
            let start, end, currentDay, collected = {},
                total = 0;
            if (!$scope.moveIn.value) start = new Date('2016-11-01T06:00:00.000Z');
            else start = new Date($scope.moveIn.value);
            if (!$scope.moveOut.value) end = new Date('2016-12-06T06:00:00.000Z');
            else end = new Date($scope.moveOut.value);
            // console.log($scope.moveIn, start);
            // console.log($scope.moveOut, end);
            // 2. Loop through each day
            currentDay = start;
            while (currentDay <= end) {
                // console.log(currentDay);
            // 3. Then loop through guests
                $scope.filteredGuests.forEach(guest => {
                        // if move-out day is less than the current day
                        let moveOutDay = new Date(guest['move-out'] + 'T06:00:00.000Z');
                        let moveInDay = new Date(guest['move-in'] + 'T06:00:00.000Z');
                        // console.log(moveOutDay > currentDay && currentDay > moveInDay);
                        // console.log(currentDay > moveInDay && currentDay < moveOutDay);
                        // console.log(currentDay,moveInDay,moveOutDay);
                        // add collection only for days on range and before de move-out day
                        if (moveOutDay > currentDay && currentDay >= moveInDay) {
                            // console.log(moveOutDay, currentDay, guest.rate);
                            // then add rate to the collection sum of that property
                            if (!collected[guest.property]) collected[guest.property] = { rates: guest.rate };
                            else collected[guest.property].rates += guest.rate;
                            total += guest.rate;
                        }
                    })
                    // console.log(collected);
                currentDay.setDate(currentDay.getDate() + 1);
            }
            $scope.collected = collected;
            $scope.total = total;
        }
        // A helper function to calculate length of stay
        function calcDays(guest = $scope.allGuests[0]) {
            let moveIn = new Date(guest['move-in'] + 'T06:00:00.000Z'),
                moveOut = new Date(guest['move-out'] + 'T06:00:00.000Z'),
                daysDiff = moveOut.getDate() - moveIn.getDate();
            // console.log(guest)
            return daysDiff
        }

        // A helper function to set the selectedGuest on the $scope
        function updateSelectedGuest(guest) {
            // console.log(guest)
            $scope.selectedGuest = guest;
            $scope.showProfile = true;
            $scope.showAddGuest = false;
        }

        // 📝 New Guest function
        // receives the information from the form as a 'guest' object
        function addNewGuest(guest) {
            // console.log($scope.allGuests)
            let newGuest = guest
                // Normalize dates data types (to match the original JSON format YYYY-MM-DD)
            let moveIn = newGuest.moveIn,
                moveOut = newGuest.moveOut;
            newGuest['move-in'] = moveIn.getFullYear() + '-' + (1 + moveIn.getMonth()) + '-' + (('0' + moveIn.getDate()).slice(-2));
            newGuest['move-out'] = moveOut.getFullYear() + '-' + (1 + moveOut.getMonth()) + '-' + (('0' + moveOut.getDate()).slice(-2));
            // console.log(newGuest);
            // Add to guest array
            $scope.allGuests.unshift(newGuest);
            // console.log($scope.allGuests)
            // console.log($scope.filteredGuests);
            // set as selected, apply filters and clear form
            $scope.selectedGuest = newGuest;
            applyFilters();
            resetNewGuest();
            // console.log($scope.filteredGuests);
        }
    });
