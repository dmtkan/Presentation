<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Contact Info</title>
  </head>
  <body>
    <h3>Thank You</h3>
    <p id="message"> Message 1</p>
    <?php
      if(isset($_POST["x"])){
        $name = $_POST["FullName"];
        $emailFrom= $_POST["email"];
        $subjectFrom= $_POST["subject"];
        $messageFrom= $_POST["message"];
        echo "testing 1";
        $arg1 = "Heekyung.kim1@baruchmail.cuny.edu";
        $arg2 = "Hello: you got an email from: $name";
        $arg3 = "The message is: " . $messageFrom;
        $arg4 = "<h3>This goes in the header of the email </h3>";
        mail($arg1, $arg2, $arg3, $arg4);
        header("Location: notice.html");
      }
     ?>
  </body>
</html>
