var controllModule = angular.module('controllModule', []);

controllModule.factory('dataKu', [function() {
    var dt = {};
    dt.getData = function() {
        return {
	        	username:'user 1',
	        	posting:[
	        		{
	        			title:'Judul 1',
	        			isi:'jdkandansnkc aksdjka kasjdkakxmj'
	        		},
	        		{
	        			title:'Judul 2',
	        			isi:'apofioaknaksn aknklcfn a ajnjaksnkal'
	        		},
	        		{
	        			title:'Judul 3',
	        			isi:'skfnmkla kalsjfwoapj laknfklaakla lkasjka'
	        		}
	        	]
	        };
    };
    return dt;
}]);

controllModule.controller('MainController', ['$scope', 'dataKu', function($scope, dataKu) {
    $scope.judul = 'coba Judul';
    $scope.data = dataKu.getData();
    $scope.banyak = [];
    $scope.items=[1,2,3];
    $scope.buat = function() {
        var angka = parseInt($scope.angka);
        for (var i = 0; i < angka; i++) {
            $scope.banyak.push(i + 1);
        }
    };
    $scope.halaman = '';
    $scope.beranda = function() {};
}]);

controllModule.directive('slide', ['$window','$compile',function($window,$compile){
	// Runs during compile
	return {
		restrict:'A',
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, elm, attr) {
			// $window.alert('');
		}
	};
}]);
