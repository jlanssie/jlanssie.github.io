<!DOCTYPE html>
<html>
<head>
	<title>IP COLLECTOR (TEST)</title>
</head>
<body>
	This page is a staging ground for an IP-collecting script.
	If you have visited this page and are concerned your IP address has been collected, do not hesitate to reach out make sure all data is deleted.

	<?php
	//check IP and check if IP is passed from proxy
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
	    $ipaddress = $_SERVER['HTTP_CLIENT_IP']."\r\n";
	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	    $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR']."\r\n";
	} else {
		$ipaddress = $_SERVER['REMOTE_ADDR']."\r\n";
	}

	$file = 'output.txt';
	$fp = fopen($file, 'a');
	fwrite($fp, $ipaddress);
	fclose($fp);
	?>
</body>
</html>