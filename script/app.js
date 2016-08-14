var AppName = 'Appku';

var AppModuleName = angular.module(AppName,['controllModule']);

angular.element(document).ready(function() {
	angular.bootstrap(document,[AppName]);
});