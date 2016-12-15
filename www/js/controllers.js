angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('EjemploCtrl', function($scope, $stateParams, $timeout) {

  $scope.newSelect = "";

  $scope.myUser = {
    userName: "Lopez Lopez",
    userMail: "pepe.perez@hotmail.com",
    userUUID: "1234567890",
    userCredits: 1000
  };

  $scope.RadioButtonClick = function(but){
    console.log(but);

    $scope.newSelect = but;
    switch (but){
      case 'TL':
        $scope.dataEjemplo.tlSlot.estado = "Visible";
        if($scope.dataEjemplo.tlSlot.duenio != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.tlSlot.duenio.userName);
          },500);
        }
        if($scope.dataEjemplo.tlSlot.duenio2 != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.tlSlot.duenio2.userName);
          },500);
        }
        break;
      case 'TR':
        $scope.dataEjemplo.trSlot.estado = "Visible";
        if($scope.dataEjemplo.trSlot.duenio != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.trSlot.duenio.userName);
          },500);
        }
        if($scope.dataEjemplo.trSlot.duenio2 != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.trSlot.duenio2.userName);
          },500);
        }
        break;
      case 'BL':
        $scope.dataEjemplo.blSlot.estado = "Visible";
        if($scope.dataEjemplo.blSlot.duenio != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.blSlot.duenio.userName);
          },500);
        }
        if($scope.dataEjemplo.blSlot.duenio2 != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.blSlot.duenio2.userName);
          },500);
        }
        break;
      case 'BR':
        $scope.dataEjemplo.brSlot.estado = "Visible";
        if($scope.dataEjemplo.brSlot.duenio != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.brSlot.duenio.userName);
          },500);
        }
        if($scope.dataEjemplo.brSlot.duenio2 != "Vacio"){
          $timeout(function(){
            alert("Descubrio a " + $scope.dataEjemplo.brSlot.duenio2.userName);
          },500);
        }
        break;
      default:
        break;
    }
  }

  $scope.dataEjemplo = {
    titulo: "DesafioEjemplo",
    fechaInicio: new Date(),
    fechaFin: new Date(),
    creador: {
      userName: "Pepe Perez"
    },
    desafiado: {
      userName: "Lopez Lopez"
    },
    estado: 'Available',
    turno: "C",
    ganador: "",
    valorApuesta: 200,
    tlSlot: {
      estado: "Oculto",
      duenio: {
        userName: "Pepe Perez"
      },
      duenio2: "Vacio"
    },
    trSlot: {
      estado: "Oculto",
      duenio: "Vacio",
      duenio2: "Vacio"
    },
    blSlot: {
      estado: "Oculto",
      duenio: "Vacio",
      duenio2: "Vacio"
    },
    brSlot: {
      estado: "Oculto",
      duenio: "Vacio",
      duenio2: {
        userName: "Lopez Lopez"
      }
    }
  };


})

.controller('AccountCtrl', function($scope) {

  $scope.gridSelect = "";

  $scope.RadioButtonClick = function(but){
    console.log(but);
    $scope.gridSelect = but;
  }

  $scope.settings = {
    enableFriends: true
  };
});
