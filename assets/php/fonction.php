<?php

$subject=$_POST["name"];
  
$message = $_POST["message"];

 mail('projet-alpha@yopmail.com' , $subject, $message);




?>
