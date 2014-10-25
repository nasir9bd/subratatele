<?php

require_once('dbconfig.php');

$customer = json_decode(file_get_contents('php://input'));





$sql = "SELECT * FROM `customer` WHERE `cus_cell` = ".$customer->cus_cell;

$query = mysqli_query($con, $sql);

while($result = mysqli_fetch_assoc($query)){
    $output[] = $result;
}

echo json_encode($output[0]);