angular.module('directivePractice').service('lessonSrvc',function($http){
  this.getSchedule = function(){
    return $http.get('schedule.json');
  };

});//closing brackets
