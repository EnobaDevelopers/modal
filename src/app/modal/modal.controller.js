angular.module('splashDemo', ['ui.splash'])
.controller('ModalController', ['$splash', function ($splash) {
  this.openSplash = function () {
    $splash.open({
      title: 'El arquitecto de sueños xD',
      message: "Alejandro Uzcátegui!"
    });
  };
}]);
