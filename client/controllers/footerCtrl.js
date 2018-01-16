app.controller('footerCtrl', ['$rootScope','$scope','$location' ,function ($rootScope, $scope,location) {
   $scope.initFooterCtrl = function (){
            $scope.copyright = "";
   }
   $scope.initFooterCtrl();
}]);
