app.controller('headerCtrl', ['$rootScope','$scope','$location' ,function ($rootScope, $scope,location) {
   $scope.initHeaderCtrl = function (){
            $scope.header = "Emplpoyees Database"
   }
   $scope.initHeaderCtrl();
}]);


