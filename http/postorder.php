<?php

require_once('dbconfig.php');

$order = json_decode(file_get_contents('php://input'));





$sql = "INSERT INTO `order`
              (`id`,
              `cus_id`,
              `software`,
              `hardware`,
              `phone_problem`,
              `with_charger`,
              `with_battery`,
              `with_mmc`,
              `with_simcard`,
              `bill_estimated`,
              `bill_paid`,
              `bill_due`,
              `payment_id`,
              `employee_id`,
              `ordered_at`,
              `delivered_at`)
              VALUES
              (NULL,
              '" . $order->cus_id . "',
              '" . $order->software . "',
              '" . $order->hardware . "',
              '" . $order->phone_problem . "',
              '" . $order->with_charger . "',
              '" . $order->with_battery . "',
              '" . $order->with_mmc . "',
              '" . $order->with_simcard . "',
              '" . $order->bill_estimated . "',
              '" . $order->bill_paid . "',
              '" . $order->bill_due . "',
              '" . $order->payment_id . "',
              '" . $order->employee_id . "',
              NOW(),
              '')";

$query = mysqli_query($con, $sql);


if($query){
    $sql = "SELECT * FROM `order`";
    $query = mysqli_query($con, $sql);

    while($result = mysqli_fetch_assoc($query)){
        $output[] = $result;
    }

    echo json_encode($output);
} else{
    echo mysqli_error($con);
}

