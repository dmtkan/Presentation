<!DOCTYPE html>
<html >
  <head>
    <title>Contact info</title>
  </head>
  <body>
    <h3>Your message has been sent. Outside test</h3>

<?php
if(isset($_POST["form-controlsubmit"])){
$name =$_POST["Name"];
$email =$_POST["email"];
$subject =$_POST["subject"];
$message =$_POST["message"];
echo print_r($_POST);
$arg1 = "hwu@qcc.cuny.edu";
$arg2 = "Message from $name";
$arg3 = $message;
$arg4 = "header";
mail($arg1, $arg2, $arg3, $arg4);



}


 ?>

</body>
</html>
