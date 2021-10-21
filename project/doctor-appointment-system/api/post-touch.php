<?php
include('dbconfig.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$name = $request->data->name;
$email = $request->data->email;
$message = $request->data->message;

if (!empty($name) || !empty($email) || !empty($message)) {
    $sql = "INSERT INTO `contact-message`(`name`, `email`, `message`) VALUES ('$name','$email','$message')";

    if( $mysqli->query($sql)){
     echo("<script>alert('Data Added')</script>");
    }
}
  
?>