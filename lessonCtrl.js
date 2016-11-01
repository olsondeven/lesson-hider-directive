angular.module('directivePractice').controller('lessonCtrl', function($scope,lessonSrvc){//What are the options () for arguments
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
});
