<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: jlanssie.Github.io'; 
    $to = 'jlanssie@gmail.com'; 
    $subject = 'Hello';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Message sent.</p>';
    } else { 
        echo '<p>Message failed.</p>'; 
    }
}
?>
