<?php
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
$to = 'valeeuropeu@superforte.net.br';
$email_subject = "Mensagem do site:  $name";
$email_body = "Você recebeu uma nova mensagem do seu site.\n\n"."Aqui estão os detalhes:\n\nNome: $name\n\nE-mail: $email\n\Assunto: $subject\n\nMensagem:\n$message";
$headers = "De: noreply@vulpis.com.br\n";
$headers .= "Responder a: $email";	
mail($to,$email,$email_body,$headers);
return true;			
?>
