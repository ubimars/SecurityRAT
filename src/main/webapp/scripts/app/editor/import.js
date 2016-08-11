'use strict';

angular.module('sdlctoolApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('import', {
                parent: 'site',
                url: '/import',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/editor/import-modal.html',
                        controller: 'ImportController'
                    }
                },
                resolve: {
                    
                }
            });
    });
