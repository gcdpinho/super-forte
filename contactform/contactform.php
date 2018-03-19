<?php
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$companyName = strip_tags(htmlspecialchars($_POST['companyName']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
$to = 'gcdpinho@gmail.com';
$email_subject = "Mensagem do site:  $name";
$email_body = "Você recebeu uma nova mensagem do seu site.\n\n"."Aqui estão os detalhes:\n\nNome: $name\n\nE-mail: $email\n\nEmpresa: $companyName\n\nMensagem:\n$message";
$headers = "De: noreply@vulpis.com.br\n";
$headers .= "Responder a: $email";	
mail($to,$email,$email_body,$headers);
return true;			
?>
