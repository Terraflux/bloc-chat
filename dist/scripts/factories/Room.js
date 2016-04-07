(function() {
	function Room($firebaseArray) {
		var firebaseRef = new Firebase('https://radiant-torch-8515.firebaseio.com/');
		
		roomsRef = firebaseRef.child('rooms');

		var rooms = $firebaseArray(firebaseRef.child('rooms'));


		return {
			all: rooms
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();