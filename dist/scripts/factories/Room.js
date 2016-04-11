(function() {
	function Room($firebaseArray) {
		var firebaseRef = new Firebase('https://radiant-torch-8515.firebaseio.com/rooms/');
		
		var rooms = $firebaseArray(firebaseRef);


		return {
			all: rooms
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();