(function () {
	
	function ModalCtrl($mdDialog, $mdMedia, Room) {
		
		this.newRoom = {};

		this.showNewRoomPrompt = function($event) {
			$mdDialog.show({
				templateUrl: 'templates/roomModal.html',
				clickOutsideToClose: true,
				controller: 'ModalCtrl',
				targetEvent: $event
			});
		}

	};

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$mdDialog', '$mdMedia', 'Room', ModalCtrl]);
})();