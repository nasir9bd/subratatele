var customer = angular.module('customer', []);

customer.controller('addcustomer', function ($scope, $http) {
    $scope.add_customer = function () {
        var customer_input = {
            'cus_name' : $scope.cus_name,
            'cus_cell' : $scope.cus_cell,
            'cus_email' : $scope.cus_email,
            'cus_address' : $scope.cus_address
        };
        $http.post('http/addcustomer.php', customer_input)
            .success(function (data, status) {
                $scope.customeraddresult = data;
            })
            .error();

        alert(customeraddresult);

    }
});


var order = angular.module('order', []);

order.controller('placeorder', function ($scope, $http) {

    $scope.search_customer = function () {
        var customer_cell = {'cus_cell' : $scope.cus_cell};

        $http.post('http/searchcustomer.php', customer_cell)

            .success(function(data, status){
                $scope.customer = data;
            })
            .error();
    }

});

