/**
 * Created by kellycarmichael on 10/9/16.
 */

angular.module ( 'todoApp.controller', [] )
    .controller ( 'todoAppController', [
        "$scope", function ( $scope ) {
            $scope.newTask = "";

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
        } ] );