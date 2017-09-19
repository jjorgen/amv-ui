var myApp = angular
    .module("amvModule", [])
    .controller("amvController", function($scope, $http) {
        var aspectMine = {
            clusteringAlgorithm : "modelBasedAlgorithm",    // Clustering Algorithm
            vectorSpaceModel : "fanInNumCallers",           // Vector Space Model

            // Cross Cutting Concern Category
            orderedMethodCall : false,                      // Ordered Method Call
            codeClone : false,                              // Code Clone
            uniqueClassFanIn : false,                       // Unique Class Fan In
            callsInClones : false,                          // Calls In Clones
            callsAtBeginningAndEndOfMethod : false,         // Calls At Beginning And End Of Method
            eventAsParameter : false,                       // Event As Parameter
            singleton : false,                              // Singleton
            observer : false,                               // Observer
            chainOfResponsibility : false,                  // Chain Of Responsibility
            crossCuttingConcernAsInterface : false          // Cross Cutting Concern As Interface
        };

        $scope.aspectMine = aspectMine;

        $scope.mineForAspects = function() {
            var url = getUrl();
            console.debug("url: " + url);

            $http.get(url)
                .then(function(response) {
                    $scope.product = response.data;
                });

        };

        function getUrl() {
            var url = 'http://localhost:9191/amv/mine?clusteringAlgorithm=' + getClusteringAlgorithm();
            url += '&vectorSpaceModel=' + getVectorSpaceModel();
            url += '&crosscuttingConcerns=' + getCrossCuttingConcerns();
            return url;
        }

        function getClusteringAlgorithm() {
            return aspectMine.clusteringAlgorithm;
        }

        function getVectorSpaceModel() {
            return aspectMine.vectorSpaceModel;
        }

        function getCrossCuttingConcerns() {
            var crossCuttingConcernList = '';
            crossCuttingConcernList += aspectMine.orderedMethodCall ? '1' : '0';
            crossCuttingConcernList += aspectMine.codeClone ? '1' : '0';
            crossCuttingConcernList += aspectMine.uniqueClassFanIn ? '1' : '0';
            crossCuttingConcernList += aspectMine.callsInClones ? '1' : '0';
            crossCuttingConcernList += aspectMine.callsAtBeginningAndEndOfMethod ? '1' : '0';
            crossCuttingConcernList += aspectMine.eventAsParameter ? '1' : '0';
            crossCuttingConcernList += aspectMine.singleton ? '1' : '0';
            crossCuttingConcernList += aspectMine.observer ? '1' : '0';
            crossCuttingConcernList += aspectMine.chainOfResponsibility ? '1' : '0';
            crossCuttingConcernList += aspectMine.crossCuttingConcernAsInterface ? '1' : '0';
            return crossCuttingConcernList;
        }

        console.debug("After invoking GET method to obtain Product object");
    });
