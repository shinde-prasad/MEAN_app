// public/js/services/UserService.js


// these will work when more API routes are defined on the Node side of things
angular.module('UserService', [])
.factory('Users', ['$http', function( $http ) {

    return {
        get : function() {
            return $http.get('/api/fetch/users'); // call to get all users
        },

        fetchUser: function( id ) {
            return $http.get('/api/fetch/user/' + id); // call to get all users
        },

        create : function(userData) {
            return $http.post('/api/create/user', userData); // call to create user
        },

        update : function(id, userData) {
        	return $http({
                url: '/api/update/user' + '/' + id,
                method: 'PUT',
                data: userData,
                cache: false
            }).then(function(response) {
                return response;
            });
        },

        delete : function(id) {
        	return $http.delete('/api/delete/user/' + id); // call to delete user
        }
    }

}]);
