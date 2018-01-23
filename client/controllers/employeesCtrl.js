app.controller('employeesCtrl', ['$scope', '$http', '$location', '$routeParams','httpService', function($scope, $http, $location, $routeParams,httpService){
	$scope.initEmployeesCtrl = function(){
		$scope.getEmployeesData();	
	}
	$scope.getEmployeesData = function(){
		$scope.employees = [];
		httpService.apiCall('GET','/api/employees').then(function(response){
			if(response.status === 200 && response.data){
				$scope.employees = response.data;
			}
		},function(error){
			console.log(error);
		});
	}
	$scope.deleteEmployeeData = function(data){
		httpService.apiCall('DELETE','/api/employee/'+data["first_name"]).then(function(response){
			if(response.status === 200 && response.data){
				$scope.getEmployeesData();
			}
		},function(error){
			console.log(error);
		});
	}
	$scope.addEmployee = function(){
		$location.path('/addEmployee');
	}
	$scope.initEmployeesCtrl();
}]);