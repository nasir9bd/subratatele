<?php

require_once('dbconfig.php');

$customer = json_decode(file_get_contents('php://input'));

$sql = "INSERT INTO `customer` (`id`, `cus_name`, `cus_cell`, `cus_email`, `cus_address`) VALUES (NULL, '".$customer->cus_name."','".$customer->cus_cell."','".$customer->cus_email."','".$customer->cus_address."')";

$query = mysqli_query($con, $sql);


if($query){
    echo "Customer Data Saved Successfully";
}else{
    echo "there is an error";
}

