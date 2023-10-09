<?php
if (isset($_POST['submit'])) {
    $to = ''; // Замените на ваш электронный адрес
    $subject = 'Новая форма с вашего сайта';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    $body = "Имя: $name\n\nEmail: $email\n\nСообщение:\n$message";

    if (mail($to, $subject, $body, $headers)) {
      echo 'Сообщение успешно отправлено';
    } else {
      echo 'Ошибка при отправке сообщения';
    }
}
?>