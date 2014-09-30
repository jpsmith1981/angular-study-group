
var appServices = angular.module('appServices', ['ngResource']);


appServices.factory('NFLdata', ['$http', function($http){
    var data = {};
    data.get = function () {
        return $http.get( 'data/data.json');
    };

    return data;
}]);


//angular.
//    module('angularMeetupApp', []).
//    controller('MyController', ['$scope','notify', function ($scope, notify) {
//        $scope.callNotify = function(msg) {
//            notify(msg);
//        };
//    }]).
//    factory('notify', ['$window', function(win) {
//        var msgs = [];
//        return function(msg) {
//            msgs.push(msg);
//            if (msgs.length == 3) {
//                win.alert(msgs.join("\n"));
//                msgs = [];
//            }
//        };
//    }]);