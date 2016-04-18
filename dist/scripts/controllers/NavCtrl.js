(function(){
	function NavCtrl(Room, $mdDialog){
		this.rooms = Room.all;

		this.showNewRoomPrompt = function($event) {
			$mdDialog.show({
				templateUrl: 'templates/roomModal.html',
				clickOutsideToClose: true,
				controller: 'ModalCtrl as modal',
				targetEvent: $event
			});
		}
	}

	angular
		.module('blocChat')
		.controller('NavCtrl', NavCtrl);
})();