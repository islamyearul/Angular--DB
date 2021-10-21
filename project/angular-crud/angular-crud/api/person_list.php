<?php
include 'database.php';
$persons = [];

$sql = "SELECT * FROM persons";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$persons[$i]['id'] = $row['id'];
		$persons[$i]['name'] = $row['name'];
		$persons[$i]['phone'] = $row['phone'];
		$i++;
	}
	echo json_encode($persons);
}
else
{
	http_response_code(404);
}