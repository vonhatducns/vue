<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
$mysqli = new mysqli("localhost", "root", "", "vuejs");

/* check connection */
$res= array();
if(isset($_GET['action']))
				{
if($_GET['action']=="read")
			{
/* Select queries return a resultset */
if ($result = $mysqli->query("SELECT * FROM USER LIMIT 10")) 
		{
	$user = array();
	while ($row = $result->fetch_assoc()) 
	{
		array_push($user,$row);
		
	}

		}
			}
				}

$res['user']=$user;
$api=json_encode($res['user']);
echo $api;
?>


