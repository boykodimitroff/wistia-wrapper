'use strict';

angular.module('wistia', ['ngRoute', 'blueimp.fileupload'])

    .config(['$routeProvider', '$httpProvider',
        function ($routeProvider) {
            $routeProvider.when('/wistia', {
                templateUrl: 'WistiaWrapperComponent/view/wistia.html',
                controller: 'WistiaCtrl'
            });

        }])
    .controller('WistiaCtrl', [
        '$scope',
        function ($scope) {

            $scope.showWistiaPlayer = false;
            $scope.options = {
                'dataType': 'json',
                'url': 'https://upload.wistia.com',
                'formData': {
                    'api_password': 'e282b69b78e88b3f5436b6e892f55719be03604edfc4be6d928cfccdd112ca29'
                },
                'autoUpload': 'true',
                'done': function (e, data) {
                    initializePlayer(data.result);
                }
            };

            var initializePlayer = function (data) {
                var videoHashedId = data.hashed_id;

                var artifacts = '<script src="https://fast.wistia.com/embed/medias/' +videoHashedId+'.jsonp" async></script>' +
                                '<div class="wistia_embed wistia_async_'+videoHashedId+'" style="height:349px;width:620px">&nbsp;</div>';
                angular.element('#player').append(artifacts);

                $scope.showWistiaPlayer = true;
            }

        }]);