var employee = angular.module('employee', []);

employee.controller('manage_employee', function ($scope, $http) {
    $scope.add_employee = function () {
        var employee_input = {
            'emp_name' : $scope.employee_name,
            'emp_cell' : $scope.employee_cell,
            'emp_email' : $scope.employee_email,
            'emp_address' : $scope.employee_address
        };
        $http.post('../http/addemployee.php', employee_input)
            .success(function (data, status) {
                $scope.employeeaddresult = data;
            })
            .error();

        alert($scope.employeeaddresult);

    }
});


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

        alert($scope.customeraddresult);

    }
});


var order = angular.module('order', []);

order.controller('placeorder', function ($scope, $http) {


    $scope.customer = {};
    $scope.software = 0;
    $scope.hardware = 0;
    $scope.with_charger = 0;
    $scope.with_battery = 0;
    $scope.with_mmc = 0;
    $scope.with_simcard = 0;

    $http.post('http/getpayment.php')
        .success(function (data, status) {
            $scope.payment_types = data;
        })
        .error();

    $http.post('http/getemployee.php')
        .success(function (data, status) {
            $scope.employee = data;
        })
        .error();

    $scope.search_customer = function () {
        var customer_cell = {'cus_cell' : $scope.cus_cell};

        $http.post('http/searchcustomer.php', customer_cell)

            .success(function(data, status){
                $scope.customer = data;
            })
            .error();
    }

    $scope.place_order = function(){




        var order_details = {
            'cus_id' : $scope.customer.id,
            'software' : $scope.software,
            'hardware' : $scope.hardware,
            'phone_problem' : $scope.phone_problem,
            'with_charger' : $scope.with_charger,
            'with_battery' : $scope.with_battery,
            'with_mmc' : $scope.with_mmc,
            'with_simcard' : $scope.with_simcard,
            'bill_estimated' : $scope.bill_estimated,
            'bill_paid' : $scope.bill_paid,
            'bill_due' : $scope.bill_estimated - $scope.bill_paid,
            'payment_id' : $scope.payment_id,
            'employee_id' : $scope.employee_id
        };

        $http.post('http/postorder.php', order_details)
            .success(function(){})
            .error();
    }

});



var payment = angular.module('payment', []);

payment.controller('payment_controller', function ($scope, $http) {

    $scope.add_payment_method = function() {
        var payment_method = {'payment_type': $scope.payment_type};
        
        $http.post('../http/addpayment.php', payment_method)
            .success(function (data, status) {
                
            })
            .error();

    };
});

