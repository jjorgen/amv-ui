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
            var url = putUrl();
            console.debug("url: " + url);

            var data = getAspectMiningInputParameters();
            console.debug("data: " + data);

            $http.put(url, data)
                .then(
                    function(response){
                        $scope.aspectMiningResult = response.data;
                    },
                    function(response){
                        $scope.aspectMiningResult = response.data;
                    }
                );
        };

        function putUrl() {
            var url = 'http://localhost:8080/amvRestServices/service/loan/updateAspectMine';
            return url;
        }

        function getAspectMiningInputParameters() {
            var clusteringAlgorithm = getClusteringAlgorithm();
            var vectorSpaceModel = getVectorSpaceModel()

            var orderedMethodCall = getOrderedMethodCall();
            var codeClone = getCodeClone();
            var uniqueClassFanIn = getUniqueClassFanIn();
            var callsInClones = getCallsInClones();
            var callsAtBeginningAndEndOfMethod = getCallsAtBeginningAndEndOfMethod();
            var eventAsParameter = getEventAsParameter();
            var singleton = getSingleton();
            var observer = getObserver();
            var chainOfResponsibility = getChainOfResponsibility();
            var crossCuttingConcernAsInterface = getCrossCuttingConcernAsInterface();

            var data = {
                "clusteringAlgorithm": clusteringAlgorithm,
                "vectorSpaceModel": vectorSpaceModel,
                "orderedMethodCall": orderedMethodCall,
                "codeClone":  codeClone,
                "uniqueClassFanIn":  uniqueClassFanIn,
                "callsInClones":  callsInClones,
                "callsAtBeginningAndEndOfMethod": callsAtBeginningAndEndOfMethod,
                "eventAsParameter": eventAsParameter,
                "singleton": singleton,
                "observer": observer,
                "chainOfResponsibility": chainOfResponsibility,
                "crossCuttingConcernAsInterface": crossCuttingConcernAsInterface
            };

            return data;
        }

        function getClusteringAlgorithm() {
            return aspectMine.clusteringAlgorithm;
        }
        function getVectorSpaceModel() {
            return aspectMine.vectorSpaceModel;
        }
        function getOrderedMethodCall() {
            return aspectMine.orderedMethodCall;
        }
        function getCodeClone() {
            return aspectMine.codeClone;
        }
        function getUniqueClassFanIn() {
            return aspectMine.uniqueClassFanIn;
        }
        function getCallsInClones() {
            return aspectMine.callsInClones;
        }
        function getCallsAtBeginningAndEndOfMethod() {
            return aspectMine.callsAtBeginningAndEndOfMethod;
        }
        function getEventAsParameter() {
            return aspectMine.eventAsParameter;
        }
        function getSingleton() {
            return aspectMine.singleton;
        }
        function getObserver() {
            return aspectMine.observer;
        }
        function getChainOfResponsibility() {
            return aspectMine.chainOfResponsibility;
        }
        function getCrossCuttingConcernAsInterface() {
            return aspectMine.crossCuttingConcernAsInterface;
        }
        console.debug("After invoking PUT method to get Aspect Mining Results");
    });

// $scope.mineForAspects = function() {
//     var url = getUrl();
//     console.debug("url: " + url);
//
//     $http.get(url)
//         .then(function(response) {
//             $scope.product = response.data;
//         });
//
//     $http.get(url)
//         .then(function(response) {
//             $scope.product = response.data;
//         });
// };

// function getUrl() {
//     var url = 'http://localhost:8080/amvRestServices/service/loan/-1?repayAmount=500.00&repayDate=2017-04-12';
//     return url;
// }

// function getUrl() {
//     var url = 'http://localhost:8080/amvRestServices/service/loan/-1?repayAmount=500.00&repayDate=2017-04-12';
//     return url;
// }

// function getUrl() {
//     var url = 'http://localhost:9191/amv/mine?clusteringAlgorithm=' + getClusteringAlgorithm();
//     url += '&vectorSpaceModel=' + getVectorSpaceModel();
//     url += '&crosscuttingConcerns=' + getCrossCuttingConcerns();
//     return url;
// }


// function getCrossCuttingConcerns() {
//     var crossCuttingConcernList = '';
//     crossCuttingConcernList += aspectMine.orderedMethodCall ? '1' : '0';
//     crossCuttingConcernList += aspectMine.codeClone ? '1' : '0';
//     crossCuttingConcernList += aspectMine.uniqueClassFanIn ? '1' : '0';
//     crossCuttingConcernList += aspectMine.callsInClones ? '1' : '0';
//     crossCuttingConcernList += aspectMine.callsAtBeginningAndEndOfMethod ? '1' : '0';
//     crossCuttingConcernList += aspectMine.eventAsParameter ? '1' : '0';
//     crossCuttingConcernList += aspectMine.singleton ? '1' : '0';
//     crossCuttingConcernList += aspectMine.observer ? '1' : '0';
//     crossCuttingConcernList += aspectMine.chainOfResponsibility ? '1' : '0';
//     crossCuttingConcernList += aspectMine.crossCuttingConcernAsInterface ? '1' : '0';
//     return crossCuttingConcernList;
// }
