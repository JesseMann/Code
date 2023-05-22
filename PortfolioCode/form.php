<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Validate and sanitize the form inputs if needed
    // ...

    $to = "personal.jessemann@gmail.com";
    $headers = "From: $email";
    $mailBody = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    if (mail($to, "Portfolio Website Submission", $mailBody, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Error: Unable to send email";
    }
}
?>