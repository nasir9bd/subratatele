<?php

require_once('dbconfig.php');

$sql = "SELECT * FROM `employee`";

$query = mysqli_query($con, $sql);

while($result = mysqli_fetch_assoc($query)){
    $output[] = $result;
}

echo json_encode($output);