<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Process the contact form submission (e.g., send email or save to database)
    echo "Thank you, $name. Your message has been received.";
}
?>
