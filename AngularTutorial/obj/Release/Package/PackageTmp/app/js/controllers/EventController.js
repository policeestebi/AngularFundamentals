'use strict';

eventsApp.controller('EventController',

    function EvenController($scope) {

        $scope.event = {

            name: "Angular Boot Camp",
            date: '1/10/2014',
            time: '10:30 am'

        }

    }

);