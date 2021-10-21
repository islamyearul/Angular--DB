<?php
include('dbconfig.php');

$SQL = "SELECT * FROM `available-feature`";
 $features = [];
 if($featureres = $mysqli->query($SQL)){
     $sl = 0;
     while($cls = $featureres->fetch_assoc()){
        $features[$sl]['id'] = $cls['id']; 
        $features[$sl]['name'] = $cls['name']; 
        $features[$sl]['image'] = $cls['image']; 
        $sl++;
     }
     echo json_encode($features);
     } 
     else 
     {
        http_response_code(404);
     }

?>