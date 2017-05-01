function MyController($scope) {
  $scope.clock = {
    now: new Date()
  };

  var updateClock = function() {
    $scope.clock.now = new Date();
  };

  setInterval(function() {
    $scope.$apply(updateClock);
  }, 2000);

  updateClock();
};
