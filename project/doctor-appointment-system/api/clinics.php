<?php
include('dbconfig.php');

$SQL = "SELECT `id`, `name`, `image` FROM `clinic-specialty`";
 $clinics = [];
 if($clinicres = $mysqli->query($SQL)){
     $sl = 0;
     while($cls = $clinicres->fetch_assoc()){
        $clinics[$sl]['id'] = $cls['id']; 
        $clinics[$sl]['name'] = $cls['name']; 
        $clinics[$sl]['image'] = $cls['image']; 
        $sl++;
     }
     echo json_encode($clinics);
     } 
     else 
     {
        http_response_code(404);
     }

?>