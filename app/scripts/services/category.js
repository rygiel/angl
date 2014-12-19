/**
 *
 *
 *
 */
angular
.module("angTestApp")
.service("categoryModel", ['$rootScope' ,  'modelFactory',  function($rootScope, modelFactory ) {

    this.model = new modelFactory();
    
    this.model.insert({name:"Java"});
    this.model.insert({name:"JavaScript"});
    this.model.insert({name:"Php"});
    this.model.insert({name:"Perl"});
    
    console.log('serviceStart!');
    
}]);