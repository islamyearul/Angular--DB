<?php
include('dbconfig.php');

$wSQL = "SELECT * FROM `what-do-we-do`";
 $whats = [];
 if($whatsres = $mysqli->query($wSQL)){
     $sl = 0;
     while($cls = $whatsres->fetch_assoc()){
        $whats[$sl]['id'] = $cls['id']; 
        $whats[$sl]['title'] = $cls['title']; 
        $whats[$sl]['icon'] = $cls['icon']; 
        $whats[$sl]['description'] = $cls['description']; 
        $sl++;
     }
     echo json_encode($whats);
     } 
     else 
     {
        http_response_code(404);
     }

?>