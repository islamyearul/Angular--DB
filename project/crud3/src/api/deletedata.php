<?php
include_once("config.php");
 
 
if($_GET["empid"] !="")
{
 
$empid=$_GET["empid"];
 
  $sql = "delete from employee  WHERE Id = '{$empid}' LIMIT 1";
 
  if(mysqli_query($mysqli, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
?>