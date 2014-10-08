﻿'use strict';

eventsApp.controller('EventController',

    function EvenController($scope) {

        $scope.myStyle = {color:'red'};

        $scope.snippet = '<span style="color:red">Hi there</span>';

        $scope.boolValue = false;

        $scope.myClass = 'blue';

        $scope.buttonDisabled = true;

        $scope.sortorder = 'name';

        $scope.event = {

            name: "Angular Boot Camp",
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'img/angularjs-logo.jpg',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Jogn Doe',
                    duration: 3,
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 2,
                    level: 'Intermediate',
                    abstract: 'Controller are the beginning of everything.',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function (session) {

            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }

);