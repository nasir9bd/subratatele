<?php

require_once('dbconfig.php');

$payment = json_decode(file_get_contents('php://input'));

$sql = "INSERT INTO `payment` (`id`, `payment_type`) VALUES (NULL, '".$payment->payment_type."')";

$query = mysqli_query($con, $sql);


if($query){
    echo "Payment Data Saved Successfully";
}else{
    echo "there is an error";
}