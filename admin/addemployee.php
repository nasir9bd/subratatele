<?php

require_once('dbconfig.php');

$employee = json_decode(file_get_contents('php://input'));

$sql = "INSERT INTO `employee` (`id`, `emp_name`, `emp_cell`, `emp_email`, `emp_address`) VALUES (NULL, '".$employee->emp_name."','".$employee->emp_cell."','".$employee->emp_email."','".$employee->emp_address."')";

$query = mysqli_query($con, $sql);


if($query){
    echo "Employee Data Saved Successfully";
}else{
    echo "there is an error";
}