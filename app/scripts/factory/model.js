angular
.module("angTestApp")
.factory('modelFactory', function(){
  
    function model(){
        console.log('inicjacja modelu!');
    }
    
    model.prototype = {
        
        data:[],
        
        insert: function( data ){
            this.data.push( data );          
        },
        
        update: function(index , data  ){
            this.data[index] = data ;                     
        },
        
        delete: function(index){
            this.data.splice(index,1);
        },
        
        getByIndex: function(index){
            
            var result = {};
            
            angular.copy(this.data[index] , result );
            
            return result ;     
        },
        
        getAll: function(){
            return this.data ;     
        },
        
        length: function(){
            return this.data.length ; 
        }

    }; 
    
    return model;
    
});
