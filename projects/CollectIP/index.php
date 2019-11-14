<!DOCTYPE html>
<html>
<head>
	<title>IP COLLECTOR (TEST)</title>
</head>
<body>
	This page is a staging ground for an IP-collecting script.
	If you have visited this page on jeremylanssiers.com and are concerned your IP address has been collected, do not hesitate to contact me to make sure all data is deleted.
	If you visited this page on jlanssie.github.io, your IP address has not been collected because Github does not support PHP.

	<!-- script 1 -->

	<?php
	//check IP and check if IP is passed from proxy
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
		$ipaddress = $_SERVER['HTTP_CLIENT_IP']."\r\n";
	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		$ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR']."\r\n";
	} else {
		$ipaddress = $_SERVER['REMOTE_ADDR']."\r\n";
	}

	$file = 'output1.txt';
	$fp = fopen($file, 'a');
	fwrite($fp, $ipaddress);
	fclose($fp);
	?>

	<!-- script 2 -->

	<?php 
		$ip = $_SERVER['REMOTE_ADDR'];
		$file = 'output2.txt';
		$fp = fopen($file, 'a');
		fwrite($fp, $ip);
		fclose($fp);
	?>

	<!-- script 3 -->

	<?php
	echo "Your IP is";
	echo $_SERVER["REMOTE_ADDR"];

	function get_ip_address() {
		// check for shared internet/ISP IP
		if (!empty($_SERVER['HTTP_CLIENT_IP']) && $this->validate_ip($_SERVER['HTTP_CLIENT_IP'])) {
			return $_SERVER['HTTP_CLIENT_IP'];
		}

		// check for IPs passing through proxies
		if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			// check if multiple ips exist in var
			$iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
			foreach ($iplist as $ip) {
				if ($this->validate_ip($ip))
				return $ip;
			}
		}

		if (!empty($_SERVER['HTTP_X_FORWARDED']) && $this->validate_ip($_SERVER['HTTP_X_FORWARDED'])) {
			return $_SERVER['HTTP_X_FORWARDED'];
		}
		if (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && $this->validate_ip($_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
			return $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
		}
		if (!empty($_SERVER['HTTP_FORWARDED_FOR']) && $this->validate_ip($_SERVER['HTTP_FORWARDED_FOR'])) {
			return $_SERVER['HTTP_FORWARDED_FOR'];
		}
		if (!empty($_SERVER['HTTP_FORWARDED']) && $this->validate_ip($_SERVER['HTTP_FORWARDED'])) {
			return $_SERVER['HTTP_FORWARDED'];
		}

		// return unreliable ip since all else failed
			return $_SERVER['REMOTE_ADDR'];
		}

	function validate_ip($ip) {
		if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_IPV6 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false) {
			return false;
			self::$ip = $ip;
			return true;
		}
	 }

	$file = 'output3.txt';
	$fp = fopen($file, 'a');
	fwrite($fp, $ip);
	fclose($fp);
	?>

	<!-- script 4 -->
	<?php
	function getrealip() {
		if (isset($_SERVER)){
			if(isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
				$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
				if(strpos($ip,",")){
					$exp_ip = explode(",",$ip);
					$ip = $exp_ip[0];
				}
			} else if(isset($_SERVER["HTTP_CLIENT_IP"])){
				$ip = $_SERVER["HTTP_CLIENT_IP"];
			} else {
				$ip = $_SERVER["REMOTE_ADDR"];
			}
		} else {
			if(getenv('HTTP_X_FORWARDED_FOR')){
				$ip = getenv('HTTP_X_FORWARDED_FOR');
				if(strpos($ip,",")){
					$exp_ip=explode(",",$ip);
					$ip = $exp_ip[0];
				}
			} else if(getenv('HTTP_CLIENT_IP')){
				$ip = getenv('HTTP_CLIENT_IP');
			} else {
				$ip = getenv('REMOTE_ADDR');
			}
		}
		return $ip; 
	}

	$MyipAddress = getrealip();
	echo $MyipAddress;

	$file = 'output4.txt';
	$fp = fopen($file, 'a');
	fwrite($fp, $MyipAddress);
	fclose($fp);
	?>

	<!-- script 5 -->

	<?php
	$ip = $_SERVER['REMOTE_ADDR'] ;
	 
	/* Set your API key this is a fake example <img draggable="false" role="img" class="emoji" alt="🙂" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg" scale="0"> */
	$api= "1ade0eec6de005cfeedd12678aac3cbf4f47c120bbf83b3cc" ;
	$apiurl = "http://api.ipinfodb.com/v3/ip-city/?key=$api&ip=$ip" ;
	 
	/* Prepare connection to ipinfodb.com and parse results into variables  */
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "$apiurl");
	/**
	* Ask cURL to return the contents in a variable
	* instead of simply echoing them to the browser.
	*/
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	/**
	* Execute the cURL session
	*/
	$contents = curl_exec ($ch);
	/**
	* Close cURL session
	*/
	curl_close ($ch);
	/*Parse the returned string into an array */
	$pieces = explode(";", $contents) ;
	/*Retrieve values from the array and assign them into variables */
	$country = $pieces['4'] ;
	$city = $pieces['6'] ;
	$city2 = $pieces['5'] ;
	$date = date("Y-m-d") ;
	$time = date("H:i:s") ;
	$ip = $_SERVER['REMOTE_ADDR'] ;
	$query_string = $_SERVER['QUERY_STRING'] ;
	$http_referer = isset( $_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : "no referer" ;
	$http_user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : "no User-agent" ;
	$web_page = $_SERVER['SCRIPT_NAME'] ;
	$isbot = is_Bot() ? '1' : '0' ;
	 
	/* Connect to the database --- set your credentials  ---  */
	$connection = new mysqli("localhost", "root", "", "test");
	/* check connection */
	if (mysqli_connect_errno()) {
	    printf("Connection failed: %s", mysqli_connect_error());
	    exit();
	        }
	 
	/* Insert data into mysql - table  */
	mysqli_query($connection,  "INSERT INTO  `visitor_tracker` (`country` ,`city`,`date` ,`time`,`ip` ,`web_page` ,`query_string` ,`http_referer` ,`http_user_agent` ,`is_bot`) VALUES ('$country','$city',  '$date', '$time', '$ip', '$web_page',  '$query_string', '$http_referer', '$http_user_agent','$isbot'
	)") ;
	/* close DB-connection */
	mysqli_close($connection) ;
	 
	/* Remove this line on production pages */
	echo "Your IP is :" . $ip  . "and database is updated " ;
	 
	/* Detect if visitor is a "bot" */
	function is_bot() {
	$botlist = getBotList() ;
	foreach($botlist as $bot) {
	if(strpos($_SERVER['HTTP_USER_AGENT'] , $bot) !== false)
	return true ;
	    }
	return false ;
	    }//end function is_bot
	 
	/* Parse the robotId.txt file into an array */
	function getBotList(){
	if (($handle = fopen("robotid.txt", "r")) !== FALSE) {
	//$count= 1 ; // for debuging
	$bots = array() ;
	while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
	    if (strchr($data[0] , "robot-id:")) {
	    //echo $count ." $data[0]".""; // for debuging
	    $botId = substr("$data[0]", 9) . "" ;
	    array_push($bots, "$botId") ;
	    //$count++ ; // for debuging
	    }
	    }
	fclose($handle);
	return $bots ;
	    }
	    } // end function getBotList

	$file = 'output5.txt';
	$fp = fopen($file, 'a');
	fwrite($fp, $ip);
	fclose($fp);
	?>

</body>
</html>