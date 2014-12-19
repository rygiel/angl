"use strict";



angular
    .module("angTestApp")
    .controller("CategoryCtrl", 
                
    ['$scope' , 'categoryModel' , 'ngTableParams' ,'crudFactory', 
     function ($scope , categoryModel , ngTableParams , crud ) {
        console.log('CategoryCtrl');

        
    $scope.editIndex = -1 ; 
	$scope.formRow = { name: "" } ;
	$scope.defaultFormRow = { name: "" } ;
    $scope.onInsert = true ; 
    $scope.onUpdate = false ; 
        
    
    crud( $scope , categoryModel , ngTableParams );
        
    
        
        
    
}]);
    
