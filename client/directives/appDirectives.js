app.directive("headerElement", function() {
    return {
        restrict: 'E',
        templateUrl: './views/header.html',
        scope: true,
        transclude: false,
        controller: "headerCtrl"
    };
});
app.directive("footer-element", function() {
    return {
        restrict: 'E',
        templateUrl: 'client/views/footer.html',
        scope: true,
        transclude: false,
        controller: "footerCtrl"
    };
});