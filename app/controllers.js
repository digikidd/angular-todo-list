/**
 * Created by kellycarmichael on 10/9/16.
 */

angular.module ( 'todoApp.controller', [] )
    .controller ( 'todoAppController', [
        "$scope", "$filter", function ( $scope, $filter ) {
            $scope.newTask = "";
            $scope.pendingCount = 3;
            $scope.taskList = [
                { description: "Buy airplane tickets", done: false },
                { description: "Make hotel reservations", done: false },
                { description: "Chill and sip bourbon", done: false }
            ];

            $scope.addToDo = function () {
                $scope.taskList.push({description: $scope.newTask, done:false});
                $scope.newTask = "";
            };

            $scope.deleteToDo = function (index) {
                $scope.taskList.splice(index, 1);
            }

            $scope.$watch('taskList', function () {
                $scope.pendingCount = $filter ('filter')($scope.taskList, {done: false}).length;
            }, true)

            $scope.clearCompleted = function () {
                $scope.taskList = $filter ('filter')($scope.taskList, {done: false});
            }
        } ] );