<?php
include('dbconfig.php');

$SQL = "SELECT * FROM `our-service`";
 $services = [];
 if($clinicres = $mysqli->query($SQL)){
     $sl = 0;
     while($cls = $clinicres->fetch_assoc()){
        $services[$sl]['id'] = $cls['id']; 
        $services[$sl]['title'] = $cls['title']; 
        $services[$sl]['icon'] = $cls['icon']; 
        $services[$sl]['description'] = $cls['description']; 
        $sl++;
     }
     echo json_encode($services);
     } 
     else 
     {
        http_response_code(404);
     }

?>