(function () {
	
	function ModalCtrl($mdDialog, $mdMedia, Room) {
		
		this.newRoom = {};

		this.pushRoom = function(){
			Room.all.$add(this.newRoom);
			this.newRoom = {};
		}

	};

	angular
		.module('blocChat')
		.controller('ModalCtrl', ModalCtrl);
})();