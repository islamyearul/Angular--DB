<?php
include('dbconfig.php');
$doctors = [];
$sql = "SELECT * FROM doctors";

if($result = $mysqli->query($sql)){
    $sl = 0;
    while ($row = $result->fetch_assoc()){
        $doctors[$sl]['id'] = $row['id'];
        $doctors[$sl]['name'] = $row['doctorName'];
        $doctors[$sl]['specilization'] = $row['specilization'];
        $doctors[$sl]['address'] = $row['address'];
        $doctors[$sl]['docFees'] = $row['docFees'];
        $doctors[$sl]['contactno'] = $row['contactno'];
        $doctors[$sl]['docEmail'] = $row['docEmail'];
        $doctors[$sl]['doc_image'] = $row['doc_image'];
        $sl++;
    } 
    echo json_encode($doctors);
} 
else 
{
    http_response_code(404);
}
