/**
 * Created by zhangzidong on 2017/4/26.
 */
angular.module('myApp',['ionic'])
/*自定义*/

/*路由设置*/
  .config(function ($stateProvider,$ionicConfigProvider,$urlRouterProvider) {
    //android导航位置
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider
    //团购
      .state('shop', {
        url: '/Shop',
        templateUrl: 'tpl/shop.html',
        controller:'shopCtrl'
      })
    // 个人中心
      .state('individual', {
        url: '/Individual',
        templateUrl: 'tpl/individual.html'
      })
    $urlRouterProvider.otherwise('shop');
  })

/*控制器*/
  //全局控制器
  .controller('parentCtrl',['$scope','$state','$timeout',function ($scope,$state,$timeout) {
  }])
  //shop控制器
  .controller('shopCtrl',['$scope','$timeout',
    function($scope,$timeout){
      //实现功能区域切换
      $scope.currentIndex = 1;
      $scope.changeFuncTab = function(n){
        $scope.currentIndex  = n;
      };
      $scope.changeFocus=0;
      $scope.searchKW='';
      $scope.searchFocus=function () {
        $scope.changeFocus=1;
      }
      $scope.searchBlur=function () {
        if(!$scope.searchKW){
          $scope.changeFocus=0;
        }
      }
  }])