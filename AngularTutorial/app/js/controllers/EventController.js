'use strict';

eventsApp.controller('EventController',

    function EvenController($scope, eventData) {

        $scope.myStyle = {color:'red'};

        $scope.snippet = '<span style="color:red">Hi there</span>';

        $scope.boolValue = false;

        $scope.myClass = 'blue';

        $scope.buttonDisabled = true;

        $scope.sortorder = 'name';

        $scope.event = eventData.event;

        $scope.upVoteSession = function (session) {

            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }

);