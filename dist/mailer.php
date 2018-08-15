<?php

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone'])) {

    $to = "info@e-huset.se";
    $from = $_POST["email"];
    $subject = 'Kontakt från E-huset.se';
    $name = $_POST["name"];
    $phone = $_POST["phone"];

    // Message
    $message = "Från: " . $name . " <" . $from . "><br>";
    $message .= "Telefonnummer: " . $phone . "<br>";
    $message .= "Meddelande: " . $_POST["message"];

    // Headers
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $name . " <" . $from . ">";

    $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    if ( mail($to, $subject, $message, $headers) ) {
        echo "Meddelandet " . $message . " från " . $name . " <" . $from . "> har skickats.";
    } else {
        echo "Det gick inte att skicka ditt meddelande";
    }

} else {
    return;
}

?>