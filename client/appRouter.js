app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'employeesCtrl',
		templateUrl: 'views/employees.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});