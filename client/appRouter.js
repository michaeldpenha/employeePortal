app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'employeesCtrl',
		templateUrl: 'views/employees.html'
	}).when('/addEmployee', {
		controller:'addEditEmployeeCtrl',
		templateUrl: 'views/addEditEmployee.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});