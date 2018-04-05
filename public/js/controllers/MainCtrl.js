// public/js/controllers/MainCtrl.js

angular.module('AppCtrls', [])
.controller('BaseController', function($scope, $mdSidenav) {

	$scope.data = 'Test';
	$scope.clickSide = function(dir) {
		$mdSidenav(dir).toggle();
	};

})

.controller('LoginController', function($scope) {

	$scope.data = 'Login';   

})

.controller('HomeController', ['$scope', 'Users', '$state', function($scope, Users,$state) {

	$scope.data = [];   

	Users.get().then(function(response){
		console.log(response);
		if(response && response.data.length) $scope.data = response.data;
	});

	$scope.redirectToUserDetails = function( id, name ) {
		$state.go("app.userdetails", {id: id, name: name});
	};

}])

.controller('UserDetailsController', ['$scope', 'Users', '$stateParams', '$state',
	function($scope, Users, $stateParams, $state) {

		$scope.userData = "";

		getUserDetails();

		function getUserDetails() {
			if(!$stateParams || !$stateParams.id) {
				$state.go("app.home");
			} else {
				Users.fetchUser($stateParams.id).then(function(response) {
					if(response && response.data) { 
						$scope.userData = response.data;
					}
				});
			}
		}

		$scope.UpdateUser = function() {
			console.log($scope.userData);
			Users.update($scope.userData._id, $scope.userData).then(function(response) {
				if(response.status === 200)
					$state.go("app.home");
			});
		};

}])
;

