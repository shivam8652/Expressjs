<?php
ob_start();
ob_flush();
session_start();
//X-Frame-Options
//for i frame means no can embedded my website in their website 
header("X-Frame-Options: DENY");

//X-XSS-Protection
//no scripting attack if attack browser will block
header("X-XSS-Protection: 1; mode=block");

//strict-transport-security
//only accept website over https not on http
//where 63072000 is 24 months and for 12 months use 31536000
header("Strict-Transport-Security:max-age=63072000");

//X-Content-Type-Options
//to avoid MIME type means some one can add cross script on file upload and can change mime
header('X-Content-Type-Options: nosniff');


date_default_timezone_set("Asia/Kolkata");

$conn=mysqli_connect("localhost","metincq6_zerobroker","zerobroker@2021");
mysqli_select_db($conn,"metincq6_zerobroker");

// $conn=mysqli_connect("localhost","root","");
// mysqli_select_db($conn,"zerobroker");

// if($conn)
// {
// 	echo "sucess";
// }
// else
// {
// 	echo "db error";
// }

// mail
function sanitize($field) 
{
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL))
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

function emi_calculator($p, $r, $t)
{ 
    global $emi; 
  
    // one month interest 
    $r = $r / (12 * 100); 
      
    // one month period 
    $t = $t * 12;  
      
    $emi = ($p * $r * pow(1 + $r, $t)) /  
                  (pow(1 + $r, $t) - 1); 
  
    return ($emi); 
}

function clean($filter)
{
  return htmlspecialchars(strip_tags($filter),ENT_QUOTES,'UTF-8');
}

function escape($conn,$data_escape)
{
  return mysqli_real_escape_string($conn,$data_escape);
}

?>