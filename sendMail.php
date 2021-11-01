<?php
$domain = parse_url($_SERVER['HTTP_REFERER']);

if (isset($domain['host'])) {
  if($domain['host'] == 'akumasoftware.com'){
    $name = $_POST["name"];
    $mailFrom = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $subject = $name." quiere contactarse con Akuma Software";
    
    $mailTo = "contact@akumasoftware.com";
    $headers ="From: ".$mailFrom;
    $txt = $name." "."<".$mailFrom."> quiere contactarse con nosotros."."\n"."Telefono: ".$phone."\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    echo 'mail sended';
  }
  else{
    echo 'domain not registered';
  }
}