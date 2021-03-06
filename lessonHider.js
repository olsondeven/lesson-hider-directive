angular.module('directivePractice').directive('lessonHider', function() {
    return { //directives always return objs with properties
        restrict: 'E', //you can do E-element A-attribute M-comment C-class
        templateUrl: 'lessonHider.html',
        scope: { // is a wall that helps you controller what is seen from controller $scope, = will allow you to make it same as Ctrl $scope
            // twoWayDataBinding: '=',//constant communication, or to limit scope
            // stringBinding: '@',//just for show ? pass text
            // functionBinding: '&',//just for show ? pass a function
            lesson: '=',
            dayAlert: '&'
        },
        link: function(scope, element, attrs) {
            // console.log(scope, element, attrs);

            scope.getSchedule.then(function(response) {
                scope.schedule = response.data;
              
                scope.schedule.forEach(function(scheduleDay) {
                    if (scheduleDay.lesson === scope.lesson) {
                        element.css('text-decoration', 'line-through');// jquery, get to know this better
                        scope.lessonDay = scheduleDay.weekday;
                        return;
                    }
                });
            });

        },
        controller: function($scope, lessonSrvc) {
            $scope.getSchedule = lessonSrvc.getSchedule();
        }
    };
}); //closing brackets
