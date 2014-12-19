angular
.module("angTestApp")
.factory('crudFactory', function(){
    
    function crud($scope , model , ngTableParams ){    
        $scope.tableParams = new ngTableParams({
            page: 1,            
            count: 10           
        }, {
            total: model.model.length() , 
            getData: function($defer, params) {
                $defer.resolve(

                    model.model.getAll().slice((params.page() - 1) * params.count(), 

                    params.page() * params.count())

                );
            }
        });

        $scope.reset = function(){

            $scope.tableParams.reload();
            $scope.formRow = $scope.defaultFormRow ;    
            $scope.editIndex = -1 ; 
            $scope.onInsert = true ; 
            $scope.onUpdate = false ; 

        }

        $scope.edit = function($index){

            $scope.formRow = model.model.getByIndex($index) ; 
            $scope.editIndex = $index ;         
            $scope.onInsert = false ; 
            $scope.onUpdate = true ; 
        }

        $scope.delete = function($index){

            if (!confirm('Napewno?') ) return ;
            model.model.delete($index );
            $scope.reset();

        }

        $scope.update = function(){

            if ( $scope.formRow.name === "" || $scope.editIndex === -1 ){
                return ;
            }
            model.model.update($scope.editIndex , $scope.formRow );

            $scope.reset();

        }

        $scope.insert = function(){

            if ( $scope.formRow.name === ""){
                return ;
            }
            model.model.insert( $scope.formRow );

            $scope.reset();

        };
        
        
    }
    
    
    return crud ; 
    
    
});