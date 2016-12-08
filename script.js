	// create the module and name it shoppingApp
	var shopngApp = angular.module('shoppingApp', ['ngRoute']);

	// configure our routes
	shopngApp.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'pages/page1.html',
				controller  : 'page1Controller'
			})

			// route for the page2 page
			.when('/page2', {
				templateUrl : 'pages/page2.html',
				controller  : 'page2Controller'
			})

			// route for the page3 page
			.when('/page3', {
				templateUrl : 'pages/page3.html',
				controller  : 'page3Controller'
			});
	});

	// create the controller and inject Angular's $scope
	shopngApp.controller('page1Controller', function($scope,$http) {
		// create a message to display in our view
		$scope.message = 'Message here';




 $scope.users = '';
    $scope.tempUserData = {};

    // function to get records from the database
    $scope.getRecords = function(){
        $http.get('action.php', {
            params:{
                'type':'view'
            }
        }).success(function(response){
            if(response.status == 'OK'){
                $scope.users = response;
            }
             console.log($scope.users);
            

        return true;
        });
    };
    $scope.getRecords();//calling the get user function repeat the same for rest

    // function to insert or update user data to the database
    $scope.saveUser = function(type){
        var data = $.param({
            'data':$scope.tempUserData,
            'type':type
        });
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        $http.post("action.php", data, config).success(function(response){
           
            if(response.status == 'OK'){
                if(type == 'edit'){
                    $scope.users[$scope.index].id = $scope.tempUserData.id;
                    $scope.users[$scope.index].name = $scope.tempUserData.name;
                    $scope.users[$scope.index].email = $scope.tempUserData.email;
                    $scope.users[$scope.index].phone = $scope.tempUserData.phone;
                    $scope.users[$scope.index].created = $scope.tempUserData.created;
                }else{
                    $scope.users.push({
                        id:response.data.id,
                        name:response.data.name,
                        email:response.data.email,
                        phone:response.data.phone,
                        created:response.data.created
                    });
                    
                }
                $scope.userForm.$setPristine();
                $scope.tempUserData = {};
                $('.formData').slideUp();
                $scope.messageSuccess(response.msg);
            }else{
                $scope.messageError(response.msg);
            }
        });
    };
    
    // function to add user data
  /*  $scope.addUser = function(){
        $scope.saveUser('add');
    };*/
    
    // function to edit user data
   /* $scope.editUser = function(user){
        $scope.tempUserData = {
            id:user.id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            created:user.created
        };
        $scope.index = $scope.users.indexOf(user);
        $('.formData').slideDown();
    };
    
    // function to update user data
    $scope.updateUser = function(){
        $scope.saveUser('edit');
    };
    
    // function to delete user data from the database
    $scope.deleteUser = function(user){
        var conf = confirm('Are you sure to delete the user?');
        if(conf === true){
            var data = $.param({
                'id': user.id,
                'type':'delete'    
            });
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }    
            };
            $http.post("action.php",data,config).success(function(response){
                if(response.status == 'OK'){
                    var index = $scope.users.indexOf(user);
                    $scope.users.splice(index,1);
                    $scope.messageSuccess(response.msg);
                }else{
                    $scope.messageError(response.msg);
                }
            });
        }
    };
    
    // function to display success message
    $scope.messageSuccess = function(msg){
        $('.alert-success > p').html(msg);
        $('.alert-success').show();
        $('.alert-success').delay(5000).slideUp(function(){
            $('.alert-success > p').html('');
        });
    };
    
    // function to display error message
    $scope.messageError = function(msg){
        $('.alert-danger > p').html(msg);
        $('.alert-danger').show();
        $('.alert-danger').delay(5000).slideUp(function(){
            $('.alert-danger > p').html('');
        });
    };

*/


	});

	shopngApp.controller('page2Controller', function($scope) {
		$scope.message = 'Selected Product Details';
        $scope.showMe = true;
        $scope.cartEmpty = false;
        $scope.emptyMessage = "Your cart is empty, please add a product";
        $scope.clearCart = function(){
            $scope.showMe = false;
            $scope.cartEmpty = true;
            document.getElementById('monatCost').innerHTML = 0;
            document.getElementById('totalCost').innerHTML = 0;
            document.getElementById('sum').innerHTML = 0;
            document.getElementById('monatCost2').innerHTML = 0;
            document.getElementById('totalCost2').innerHTML = 0;
            document.getElementById('sum2').innerHTML = 0;
        }
	});

	shopngApp.controller('page3Controller', function($scope) {
		$scope.message = 'Selected Product Details';
        $scope.showMe = true;
        $scope.cartEmpty = false;
        $scope.emptyMessage = "Your cart is empty, please add a product";
        $scope.clearCart = function(){
            $scope.showMe = false;
            $scope.cartEmpty = true;
            document.getElementById('monatCost').innerHTML = 0;
            document.getElementById('totalCost').innerHTML = 0;
            document.getElementById('sum').innerHTML = 0;
            document.getElementById('monatCost2').innerHTML = 0;
            document.getElementById('totalCost2').innerHTML = 0;
            document.getElementById('sum2').innerHTML = 0;
        }
	});