<?php
require('database.php');
error_reporting(E_ERROR);
$students = [];
$sql = "SELECT * FROM students";

if($results = mysqli_query($conn, $sql)){
    $sl = 0;
    while($row = mysqli_fetch_assoc($results)){
        $students[$sl]['id'] = $row['id'];
        $students[$sl]['std_id'] = $row['std_id'];
        $students[$sl]['std_fname'] = $row['std_fname'];
        $students[$sl]['std_lname'] = $row['std_lname'];
        $students[$sl]['std_email'] = $row['std_email'];
        $sl++;
    }
    echo json_encode($students);
}
else 
{
    http_response_code(404);
}

?>